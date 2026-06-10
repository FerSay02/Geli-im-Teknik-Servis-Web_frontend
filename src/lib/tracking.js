export function trackConversion(action, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', action, {
    event_category: 'conversion',
    ...params,
  });
}
