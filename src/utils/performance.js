export const trackPageLoad = () => {
  window.addEventListener('load', () => {
    const entries = performance.getEntriesByType('navigation');
    if (entries.length > 0) {
      const navEntry = entries[0];
      if (import.meta.env.DEV) {
        // Log load time
      }
    }
  });
};

export const trackScrollDepth = () => {
  let maxScroll = 0;
  
  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
    }
  }, { passive: true });
}; 