// Initial insights posts for Orange Enterprise
// Managed via local storage or admin panel updates

export const initialInsights = [
  {
    id: 'etf-assets-sixfold-jump',
    title: 'ETF assets register a six-fold jump',
    tag: 'CRISIL commentary, 2007',
    date: '2007',
    summary: 'Analysis of ETF market development and exponential asset growth in India, authored during Parag Doshi\'s tenure at CRISIL Fund Services.',
    link: '#',
    linkText: 'Link to original CRISIL PDF [Confirm URL]',
    type: 'Commentary'
  },
  {
    id: 'pension-fund-managers-selection',
    title: 'Increasing professionalism in selecting pension fund managers',
    tag: 'CRISIL commentary, 2007',
    date: '2007',
    summary: 'Research on institutional fund governance and rigorous criteria for evaluating and selecting pension fund managers in India.',
    link: '#',
    linkText: 'Link to original CRISIL PDF [Confirm URL]',
    type: 'Commentary'
  },
  {
    id: 'beginners-guide-equity-investing',
    title: "A beginner's guide to equity investing",
    tag: 'Guide',
    date: 'Educational Guide',
    summary: 'Core principles of long-term disciplined investing and asset allocation for families and professionals.',
    link: '#',
    linkText: 'Coming Soon [Ask Parag for the file]',
    type: 'Guide'
  }
];

export function getInsights() {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('oe_insights');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // ignore
    }
  }
  return initialInsights;
}

