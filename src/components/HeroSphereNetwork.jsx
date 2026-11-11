import React, { useEffect, useRef, useState, useCallback } from 'react';

// Service nodes data matching the reference image layout
const SERVICE_NODES = [
  {
    id: 'mutual-funds',
    label: 'Mutual Funds',
    position: 'top',
    style: { top: '6%', left: '50%', transform: 'translateX(-50%)' },
    depth: 1.1,
    serviceName: 'Mutual Funds Advisory',
  },
  {
    id: 'portfolio-advisory',
    label: 'Portfolio Advisory',
    position: 'top-right',
    style: { top: '20%', right: '2%' },
    depth: 1.25,
    serviceName: 'Portfolio Management',
  },
  {
    id: 'sip-planning',
    label: 'SIP & Wealth Planning',
    position: 'mid-left',
    style: { top: '44%', left: '1%' },
    depth: 1.15,
    serviceName: 'SIP & STP Planning',
  },
  {
    id: 'tax-optimization',
    label: 'Tax Optimization',
    position: 'mid-right',
    style: { top: '48%', right: '3%' },
    depth: 0.95,
    serviceName: 'Tax Optimization',
  },
  {
    id: 'retirement',
    label: 'Retirement Planning',
    position: 'bottom-left',
    style: { bottom: '12%', left: '3%' },
    depth: 1.2,
    serviceName: 'Retirement Advisory',
  },
  {
    id: 'wealth-architecture',
    label: 'Wealth Architecture',
    position: 'bottom-center',
    style: { bottom: '2%', left: '40%', transform: 'translateX(-50%)' },
    depth: 1.05,
    serviceName: 'Financial Architecture',
  },
  {
    id: 'life-health',
    label: 'Life & Health Cover',
    position: 'bottom-right',
    style: { bottom: '8%', right: '5%' },
    depth: 1.18,
    serviceName: 'Insurance Solutions',
  },
];

export default function HeroSphereNetwork({ onOpenSchedule, setActivePage }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0.25, y: 0.35 });
  const velocityRef = useRef({ x: 0.0025, y: 0.0045 });

  // Handle card click
  const handleCardClick = (node) => {
    if (node.id === 'sip-planning') {
      if (setActivePage) {
        setActivePage('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (onOpenSchedule) {
      onOpenSchedule(node.serviceName);
    }
  };

  // Mouse & Touch interaction for 3D dragging & parallax
  const handlePointerDown = (e) => {
    setIsDragging(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    dragStartRef.current = { x: clientX, y: clientY };

    // Check if clicked near center orb
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.hypot(clientX - centerX, clientY - centerY);
      const orbRadius = Math.min(rect.width, rect.height) * 0.16;
      if (dist < orbRadius && onOpenSchedule) {
        onOpenSchedule('General Advisory');
      }
    }
  };

  const handlePointerMove = useCallback((e) => {
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = (clientX - rect.left) / rect.width - 0.5;
      const relativeY = (clientY - rect.top) / rect.height - 0.5;
      setMouseOffset({ x: relativeX * 24, y: relativeY * 24 });
    }

    if (isDragging) {
      const dx = clientX - dragStartRef.current.x;
      const dy = clientY - dragStartRef.current.y;
      rotationRef.current.y += dx * 0.008;
      rotationRef.current.x -= dy * 0.008;
      dragStartRef.current = { x: clientX, y: clientY };
    }
  }, [isDragging]);

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // 3D Geodesic Wireframe Sphere Engine (Canvas with True Depth: Back Edges -> Center Sphere -> Front Edges)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Define 3D icosahedron vertices (normalized)
    const phi = (1 + Math.sqrt(5)) / 2;
    const baseVertices = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ].map(([x, y, z]) => {
      const len = Math.hypot(x, y, z);
      return [x / len, y / len, z / len];
    });

    // Subdivide edges for geodesic density (like in reference image)
    const vertices = [...baseVertices];
    const edges = [];
    const threshold = 1.15;

    for (let i = 0; i < baseVertices.length; i++) {
      for (let j = i + 1; j < baseVertices.length; j++) {
        const dist = Math.hypot(
          baseVertices[i][0] - baseVertices[j][0],
          baseVertices[i][1] - baseVertices[j][1],
          baseVertices[i][2] - baseVertices[j][2]
        );
        if (dist < threshold) {
          edges.push([i, j]);
          const midX = (baseVertices[i][0] + baseVertices[j][0]) / 2;
          const midY = (baseVertices[i][1] + baseVertices[j][1]) / 2;
          const midZ = (baseVertices[i][2] + baseVertices[j][2]) / 2;
          const len = Math.hypot(midX, midY, midZ);
          vertices.push([midX / len, midY / len, midZ / len]);
        }
      }
    }

    // Connect geodesic neighbor edges
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const dist = Math.hypot(
          vertices[i][0] - vertices[j][0],
          vertices[i][1] - vertices[j][1],
          vertices[i][2] - vertices[j][2]
        );
        if (dist > 0.4 && dist < 0.76) {
          edges.push([i, j]);
        }
      }
    }

    // Set canvas dimensions with high-DPI scaling
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
      const sphereRadius = Math.min(width, height) * 0.39;

      ctx.clearRect(0, 0, width, height);

      // Auto-rotation when not dragging
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

      // Project vertices to 2D screen coordinates
      const projected = vertices.map(([vx, vy, vz]) => {
        // Rotate around Y
        const x1 = vx * cosY + vz * sinY;
        const z1 = -vx * sinY + vz * cosY;
        // Rotate around X
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

      // Helper function to draw an edge
      const drawEdge = (p1, p2, avgZ, isFront) => {
        const alpha = isFront
          ? Math.max(0.35, Math.min(0.85, (avgZ + 1) * 0.48))
          : Math.max(0.1, Math.min(0.35, (avgZ + 1) * 0.25));

        const lineGrad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        lineGrad.addColorStop(0, `rgba(0, 195, 255, ${alpha})`);
        lineGrad.addColorStop(0.5, `rgba(139, 92, 246, ${alpha * 0.95})`);
        lineGrad.addColorStop(1, `rgba(253, 103, 2, ${alpha * 0.85})`);

        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = isFront ? 1.4 : 0.9;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      };

      // Helper function to draw a node dot
      const drawNode = (p, isFront) => {
        const alpha = isFront ? Math.max(0.4, (p.z + 1) * 0.55) : 0.2;
        const radius = Math.max(1.5, (isFront ? 3.0 : 1.8) * p.scale);

        // Main node dot
        ctx.fillStyle = `rgba(0, 195, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Extra glowing aura on front nodes
        if (isFront && p.z > 0.15) {
          ctx.fillStyle = `rgba(253, 103, 2, ${alpha * 0.45})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      };

      // =========================================================================
      // PASS 1: DRAW BACK WIREFRAME EDGES & NODES (z < 0)
      // =========================================================================
      for (const [i, j] of edges) {
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

      // =========================================================================
      // PASS 2: DRAW CENTRAL "OE" SPHERE INSIDE THE WIREFRAME (z = 0)
      // =========================================================================
      const orbRadius = sphereRadius * 0.42;

      // Outer radial glow halo
      const glowGrad = ctx.createRadialGradient(
        centerX, centerY, orbRadius * 0.6,
        centerX, centerY, orbRadius * 1.45
      );
      glowGrad.addColorStop(0, 'rgba(37, 99, 235, 0.45)');
      glowGrad.addColorStop(0.5, 'rgba(79, 70, 229, 0.25)');
      glowGrad.addColorStop(0.85, 'rgba(253, 103, 2, 0.15)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbRadius * 1.45, 0, Math.PI * 2);
      ctx.fill();

      // Main spherical gradient (matching blue-purple orb from reference image)
      const sphereGrad = ctx.createRadialGradient(
        centerX - orbRadius * 0.32,
        centerY - orbRadius * 0.32,
        orbRadius * 0.05,
        centerX,
        centerY,
        orbRadius
      );
      sphereGrad.addColorStop(0, '#38BDF8');   // Top-left sky blue highlight
      sphereGrad.addColorStop(0.25, '#2563EB'); // Rich Royal Blue body
      sphereGrad.addColorStop(0.65, '#1E40AF'); // Deep Blue
      sphereGrad.addColorStop(1, '#0F172A');   // Dark Navy shadow edge

      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbRadius, 0, Math.PI * 2);
      ctx.fill();

      // Inner sphere rim highlight
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // Bold White Typography "OE" (Exactly like "AI-Q" in reference image)
      ctx.save();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `800 ${Math.round(orbRadius * 0.62)}px "Hanken Grotesk", system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = 8;
      ctx.fillText('OE', centerX, centerY);
      ctx.restore();

      // =========================================================================
      // PASS 3: DRAW FRONT WIREFRAME EDGES & NODES (z >= 0)
      // These pass IN FRONT OF the central OE sphere, making it appear truly INSIDE!
      // =========================================================================
      for (const [i, j] of edges) {
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
      className="relative w-full aspect-square max-w-[440px] sm:max-w-[480px] lg:max-w-[520px] mx-auto select-none cursor-grab active:cursor-grabbing touch-none flex items-center justify-center"
      style={{ perspective: '1000px' }}
      title="Interactive 3D Network: Drag or hover to rotate"
    >
      {/* Blueprint Grid Background Pattern (matching reference image) */}
      <div 
        className="absolute inset-2 sm:inset-4 rounded-3xl opacity-60 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(200, 215, 235, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 215, 235, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 50%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 50%, transparent 95%)'
        }}
      />

      {/* Ambient Radial Lighting Glow */}
      <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-[#00D2FF]/20 via-[#4F46E5]/15 to-[#FD6702]/25 blur-3xl pointer-events-none" />

      {/* 3D Geodesic Constellation Canvas (Renders Back Edges -> Center OE Orb -> Front Edges) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* =========================================================================
          FLOATING SERVICE PILL CARDS (Movable, Interactive & Animated around sphere)
          ========================================================================= */}
      {SERVICE_NODES.map((node, index) => {
        const isHovered = hoveredCard === node.id;
        // Parallax depth calculation
        const parallaxX = mouseOffset.x * node.depth;
        const parallaxY = mouseOffset.y * node.depth;

        // Custom organic float delays for each card
        const floatDelay = `${(index * 0.45).toFixed(2)}s`;
        const floatDuration = `${(3.6 + (index % 3) * 0.6).toFixed(1)}s`;

        return (
          <div
            key={node.id}
            onClick={() => handleCardClick(node)}
            onMouseEnter={() => setHoveredCard(node.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className="absolute z-30 transition-transform duration-150 ease-out"
            style={{
              ...node.style,
              transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
            }}
          >
            {/* Smooth Floating Wrapper */}
            <div
              className="transition-all duration-300"
              style={{
                animation: `heroFloat ${floatDuration} ease-in-out ${floatDelay} infinite alternate`,
              }}
            >
              <button
                type="button"
                className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? 'scale-108 shadow-xl border-[#FD6702] text-[#FD6702] ring-2 ring-[#FD6702]/25'
                    : 'shadow-md hover:shadow-lg border border-slate-200/80 text-[#161C25]'
                }`}
                style={{
                  boxShadow: isHovered
                    ? '0 12px 28px -4px rgba(253, 103, 2, 0.25), 0 4px 12px -2px rgba(0, 0, 0, 0.08)'
                    : '0 8px 20px -3px rgba(0, 0, 0, 0.08), 0 3px 6px -1px rgba(0, 0, 0, 0.04)',
                }}
              >
                {/* Tiny Status Dot */}
                <span 
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    isHovered ? 'bg-[#FD6702] animate-ping' : 'bg-primary/80'
                  }`} 
                />
                
                {/* Service Label (Clean typography matching reference) */}
                <span className="text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap">
                  {node.label}
                </span>

                {/* Subtle Hover Action Arrow */}
                {isHovered && (
                  <span className="material-symbols-outlined text-[14px] text-[#FD6702] animate-bounce-x">
                    arrow_forward
                  </span>
                )}
              </button>
            </div>
          </div>
        );
      })}

      {/* Floating Animation Keyframes */}
      <style>{`
        @keyframes heroFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(0.4deg);
          }
          100% {
            transform: translateY(4px) rotate(-0.3deg);
          }
        }
        @keyframes bounceX {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        .animate-bounce-x {
          animation: bounceX 1s infinite;
        }
      `}</style>
    </div>
  );
}
