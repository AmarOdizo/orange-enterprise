import React, { useEffect, useRef, useState, useCallback } from 'react';

// 7 Service nodes with 3D normalized coordinates orbiting the central OE sphere
// Positioned to match the reference layout (Machine Learning, Generative AI, AI Ethics, Computer Vision, NLP, Prompt Eng, Deep Learning)
const SERVICE_NODES = [
  {
    id: 'mutual-funds',
    label: 'Mutual Funds',
    coords: [-0.82, 0.78, 0.36], // Bottom-Left foreground (like Machine Learning)
  },
  {
    id: 'sip-planning',
    label: 'SIP & Wealth Planning',
    coords: [-0.18, 0.92, 0.42], // Bottom-Center foreground (like Generative AI)
  },
  {
    id: 'portfolio-advisory',
    label: 'Portfolio Advisory',
    coords: [0.74, 0.82, 0.34], // Bottom-Right foreground (like AI Ethics)
  },
  {
    id: 'life-health',
    label: 'Life & Health Cover',
    coords: [0.92, -0.36, 0.32], // Mid-Right foreground (like Computer Vision)
  },
  {
    id: 'retirement',
    label: 'Retirement Planning',
    coords: [0.02, -0.94, -0.32], // Top background (like NLP)
  },
  {
    id: 'wealth-architecture',
    label: 'Wealth Architecture',
    coords: [-0.94, -0.16, -0.34], // Mid-Left background (like Prompt Engineering)
  },
  {
    id: 'tax-optimization',
    label: 'Tax Optimization',
    coords: [0.52, 0.12, -0.42], // Inside-Right background (like Deep Learning)
  },
];

// Pre-computed geodesic icosahedron (frequency 2: 42 vertices, 120 edges)
const phi = (1 + Math.sqrt(5)) / 2;
const BASE_VERTICES = [
  [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
  [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
  [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
].map(([x, y, z]) => {
  const len = Math.hypot(x, y, z);
  return [x / len, y / len, z / len];
});

const ICOSAHEDRON_FACES = [
  [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
  [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
  [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
  [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]
];

const GEODESIC_VERTICES = [...BASE_VERTICES];
const midCache = new Map();
function getMidpoint(i1, i2) {
  const key = i1 < i2 ? `${i1}_${i2}` : `${i2}_${i1}`;
  if (midCache.has(key)) return midCache.get(key);
  const v1 = GEODESIC_VERTICES[i1];
  const v2 = GEODESIC_VERTICES[i2];
  const mx = (v1[0] + v2[0]) / 2;
  const my = (v1[1] + v2[1]) / 2;
  const mz = (v1[2] + v2[2]) / 2;
  const len = Math.hypot(mx, my, mz);
  const idx = GEODESIC_VERTICES.length;
  GEODESIC_VERTICES.push([mx / len, my / len, mz / len]);
  midCache.set(key, idx);
  return idx;
}

const subFaces = [];
for (const [a, b, c] of ICOSAHEDRON_FACES) {
  const ab = getMidpoint(a, b);
  const bc = getMidpoint(b, c);
  const ca = getMidpoint(c, a);
  subFaces.push([a, ab, ca]);
  subFaces.push([b, bc, ab]);
  subFaces.push([c, ca, bc]);
  subFaces.push([ab, bc, ca]);
}

const edgeSet = new Set();
const GEODESIC_EDGES = [];
for (const [a, b, c] of subFaces) {
  for (const [u, v] of [[a, b], [b, c], [c, a]]) {
    const k = u < v ? `${u}_${v}` : `${v}_${u}`;
    if (!edgeSet.has(k)) {
      edgeSet.add(k);
      GEODESIC_EDGES.push([u, v]);
    }
  }
}

// Scattered ambient constellation particles
const AMBIENT_PARTICLES = [
  [-0.32, -0.45, 0.28],
  [0.42, -0.38, 0.35],
  [-0.48, 0.35, 0.42],
  [0.25, 0.52, -0.38],
  [-0.15, 0.22, -0.55],
  [0.38, -0.15, -0.48],
  [-0.55, -0.28, 0.15],
  [0.18, 0.32, 0.62],
];

export default function HeroSphereNetwork() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const cardElementsRef = useRef([]);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0.08, y: 0.12 });
  const velocityRef = useRef({ x: 0.0012, y: 0.0032 });

  // Mouse & Touch interaction for smooth 3D dragging
  const handlePointerDown = (e) => {
    setIsDragging(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    dragStartRef.current = { x: clientX, y: clientY };
  };

  const handlePointerMove = useCallback((e) => {
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

    if (isDragging) {
      const dx = clientX - dragStartRef.current.x;
      const dy = clientY - dragStartRef.current.y;
      rotationRef.current.y += dx * 0.0065;
      rotationRef.current.x -= dy * 0.0065;
      dragStartRef.current = { x: clientX, y: clientY };
    }
  }, [isDragging]);

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // 3D Geodesic Wireframe Sphere Engine & Real-Time Card Orbiting
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions with DPR scaling
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Render loop
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;

      // Sizing matching reference image proportions
      const sphereRadius = Math.min(width, height) * 0.36;
      const cardOrbitRadius = Math.min(width, height) * 0.47;
      const orbRadius = sphereRadius * 0.44; // Central blue circle is ~44% of wireframe cage

      ctx.clearRect(0, 0, width, height);

      // Smooth auto-rotation when not dragging
      if (!isDragging) {
        rotationRef.current.y += velocityRef.current.y;
        rotationRef.current.x += velocityRef.current.x;
      }

      const rx = rotationRef.current.x;
      const ry = rotationRef.current.y;
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);

      // Project 3D wireframe vertices
      const projected = GEODESIC_VERTICES.map(([vx, vy, vz]) => {
        const x1 = vx * cosY + vz * sinY;
        const z1 = -vx * sinY + vz * cosY;
        const y2 = vy * cosX - z1 * sinX;
        const z2 = vy * sinX + z1 * cosX;

        const fov = 3.2;
        const scale = fov / (fov + z2);
        return {
          x: centerX + x1 * sphereRadius * scale,
          y: centerY + y2 * sphereRadius * scale,
          z: z2,
          scale,
        };
      });

      // Project ambient particles
      const projectedParticles = AMBIENT_PARTICLES.map(([px, py, pz]) => {
        const x1 = px * cosY + pz * sinY;
        const z1 = -px * sinY + pz * cosY;
        const y2 = py * cosX - z1 * sinX;
        const z2 = py * sinX + z1 * cosX;
        const fov = 3.2;
        const scale = fov / (fov + z2);
        return {
          x: centerX + x1 * sphereRadius * scale,
          y: centerY + y2 * sphereRadius * scale,
          z: z2,
          scale,
        };
      });

      // Calculate 3D projected positions for all 7 service cards in real-time
      const projectedCards = SERVICE_NODES.map((node, idx) => {
        const [vx, vy, vz] = node.coords;
        const x1 = vx * cosY + vz * sinY;
        const z1 = -vx * sinY + vz * cosY;
        const y2 = vy * cosX - z1 * sinX;
        const z2 = vy * sinX + z1 * cosX;

        const fov = 3.2;
        const scale = fov / (fov + z2);
        const px = centerX + x1 * cardOrbitRadius * scale;
        const py = centerY + y2 * cardOrbitRadius * scale;

        // Update corresponding DOM element directly at 60 FPS
        const el = cardElementsRef.current[idx];
        if (el) {
          const isFront = z2 >= 0;
          // Depth scale: 0.82 in background to 1.05 in foreground
          const depthScale = Math.max(0.80, Math.min(1.06, 0.93 + z2 * 0.20));
          // Opacity: 0.50 in background to 1.0 in foreground (matching NLP/Prompt Eng vs Machine Learning in reference)
          const opacity = Math.max(0.48, Math.min(1.0, 0.76 + z2 * 0.38));
          const zIndex = isFront ? 40 : 15;

          el.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%) scale(${depthScale})`;
          el.style.opacity = `${opacity}`;
          el.style.zIndex = `${zIndex}`;
        }

        return { x: px, y: py, z: z2, scale };
      });

      // Helper function to draw an edge with gradient matching reference image
      const drawEdge = (p1, p2, avgZ, isFront) => {
        // Opacity smoothly tied to depth
        const alpha = isFront
          ? Math.max(0.40, Math.min(0.92, 0.45 + (avgZ + 1) * 0.35))
          : Math.max(0.12, Math.min(0.38, 0.15 + (avgZ + 1) * 0.18));

        const lineGrad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        lineGrad.addColorStop(0, `rgba(0, 195, 255, ${alpha})`);      // Vibrant Cyan
        lineGrad.addColorStop(0.5, `rgba(59, 130, 246, ${alpha})`);    // Royal Blue
        lineGrad.addColorStop(1, `rgba(129, 140, 248, ${alpha * 0.9})`); // Indigo

        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = isFront ? 1.35 : 0.85;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      };

      // Helper function to draw vertex node dots
      const drawNode = (p, isFront) => {
        const alpha = isFront ? Math.max(0.5, Math.min(1.0, 0.4 + (p.z + 1) * 0.35)) : 0.22;
        const radius = Math.max(1.6, (isFront ? 2.8 : 1.7) * p.scale);

        ctx.fillStyle = `rgba(0, 210, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle outer glow halo for prominent front vertices
        if (isFront && p.z > 0.2) {
          ctx.fillStyle = `rgba(0, 195, 255, ${alpha * 0.35})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      };

      // =========================================================================
      // PASS 1: DRAW BACK WIREFRAME EDGES & NODES (z < 0)
      // =========================================================================
      for (const [i, j] of GEODESIC_EDGES) {
        const p1 = projected[i];
        const p2 = projected[j];
        if (!p1 || !p2) continue;
        const avgZ = (p1.z + p2.z) / 2;
        if (avgZ < 0) {
          drawEdge(p1, p2, avgZ, false);
        }
      }

      for (const p of projected) {
        if (p.z < 0) {
          drawNode(p, false);
        }
      }

      // Draw background ambient particles
      for (const pt of projectedParticles) {
        if (pt.z < 0) {
          ctx.fillStyle = 'rgba(147, 197, 253, 0.4)';
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.8 * pt.scale, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw faint constellation connecting lines to background cards
      for (const card of projectedCards) {
        if (card.z < 0) {
          ctx.strokeStyle = 'rgba(191, 219, 254, 0.16)';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(card.x, card.y);
          ctx.stroke();
        }
      }

      // =========================================================================
      // PASS 2: DRAW CENTRAL "OE" SPHERE INSIDE THE WIREFRAME (z = 0)
      // Pure vibrant Saas Gradient matching "AI-Q" reference image
      // =========================================================================
      // Ambient Radial Glow behind the sphere
      const ambientGlow = ctx.createRadialGradient(
        centerX, centerY, orbRadius * 0.5,
        centerX, centerY, orbRadius * 1.55
      );
      ambientGlow.addColorStop(0, 'rgba(43, 107, 242, 0.45)');
      ambientGlow.addColorStop(0.5, 'rgba(82, 88, 235, 0.25)');
      ambientGlow.addColorStop(0.85, 'rgba(0, 195, 255, 0.12)');
      ambientGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbRadius * 1.55, 0, Math.PI * 2);
      ctx.fill();

      // Main Spherical Gradient: Indigo-Purple Top -> Cobalt Blue Center -> Cyan Blue Bottom
      const sphereGrad = ctx.createRadialGradient(
        centerX - orbRadius * 0.25,
        centerY - orbRadius * 0.35,
        orbRadius * 0.08,
        centerX,
        centerY,
        orbRadius
      );
      sphereGrad.addColorStop(0, '#5A5EEA');    // Vibrant indigo-violet highlight
      sphereGrad.addColorStop(0.45, '#2563EB'); // Deep electric royal blue body
      sphereGrad.addColorStop(0.85, '#0284C7'); // Rich azure blue
      sphereGrad.addColorStop(1, '#00A8FF');    // Luminous sky cyan edge

      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbRadius, 0, Math.PI * 2);
      ctx.fill();

      // Delicate inner rim highlight
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.38)';
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Bold White Clean Typography "OE" (matching "AI-Q" typography from reference image)
      ctx.save();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `800 ${Math.round(orbRadius * 0.65)}px "Inter", "Hanken Grotesk", system-ui, -apple-system, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(15, 23, 42, 0.35)';
      ctx.shadowBlur = 10;
      ctx.fillText('OE', centerX, centerY + 1);
      ctx.restore();

      // =========================================================================
      // PASS 3: DRAW FRONT WIREFRAME EDGES & NODES (z >= 0)
      // These pass directly IN FRONT OF the central OE sphere, making it truly INSIDE!
      // =========================================================================
      for (const [i, j] of GEODESIC_EDGES) {
        const p1 = projected[i];
        const p2 = projected[j];
        if (!p1 || !p2) continue;
        const avgZ = (p1.z + p2.z) / 2;
        if (avgZ >= 0) {
          drawEdge(p1, p2, avgZ, true);
        }
      }

      for (const p of projected) {
        if (p.z >= 0) {
          drawNode(p, true);
        }
      }

      // Draw foreground ambient particles
      for (const pt of projectedParticles) {
        if (pt.z >= 0) {
          ctx.fillStyle = 'rgba(0, 210, 255, 0.75)';
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2.2 * pt.scale, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw connecting constellation lines to foreground cards
      for (const card of projectedCards) {
        if (card.z >= 0) {
          const lineAlpha = Math.max(0.20, Math.min(0.55, 0.22 + (card.z + 1) * 0.18));
          
          const lineGrad = ctx.createLinearGradient(centerX, centerY, card.x, card.y);
          lineGrad.addColorStop(0, `rgba(37, 99, 235, ${lineAlpha})`);
          lineGrad.addColorStop(1, `rgba(0, 195, 255, ${lineAlpha})`);

          ctx.strokeStyle = lineGrad;
          ctx.lineWidth = 1.0;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(card.x, card.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className="relative w-full aspect-square max-w-[460px] sm:max-w-[500px] lg:max-w-[530px] mx-auto select-none cursor-grab active:cursor-grabbing touch-none flex items-center justify-center overflow-visible"
      style={{ perspective: '1000px' }}
      title="3D Wealth Galaxy: Drag in any direction to rotate the sphere and service cards"
    >
      {/* Blueprint Square Grid Background Pattern (matching reference image) */}
      <div 
        className="absolute inset-1 sm:inset-3 rounded-3xl opacity-50 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(186, 214, 250, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(186, 214, 250, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 45%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 45%, transparent 90%)'
        }}
      />

      {/* Ambient Radial Lighting Glow */}
      <div className="absolute w-64 h-64 sm:w-76 sm:h-76 rounded-full bg-gradient-to-tr from-[#00D2FF]/20 via-[#4F46E5]/18 to-[#38BDF8]/22 blur-3xl pointer-events-none" />

      {/* 3D Geodesic Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* =========================================================================
          MOVABLE 3D ORBITING SERVICE CARDS (Exact match to reference image cards)
          Clean white pill/rounded card with soft diffused shadow, unclickable
          ========================================================================= */}
      {SERVICE_NODES.map((node, index) => {
        return (
          <div
            key={node.id}
            ref={(el) => {
              cardElementsRef.current[index] = el;
            }}
            className="absolute top-0 left-0 transition-opacity duration-200 pointer-events-none select-none will-change-transform"
            style={{
              transform: 'translate3d(0, 0, 0)',
            }}
          >
            {/* Clean White Floating Card (matching reference image: Machine Learning, Generative AI, Computer Vision, etc.) */}
            <div
              className="flex items-center justify-center px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-sm text-slate-800 pointer-events-none select-none"
              style={{
                boxShadow: '0 10px 25px -4px rgba(15, 23, 42, 0.10), 0 4px 10px -2px rgba(15, 23, 42, 0.05)',
              }}
            >
              <span className="text-xs sm:text-[13px] font-semibold tracking-tight whitespace-nowrap text-slate-800">
                {node.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}