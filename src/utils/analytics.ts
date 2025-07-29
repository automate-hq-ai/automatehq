// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: {
        page_path?: string;
        page_title?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

// Track page views
export const pageview = (url: string) => {
  window.gtag('config', 'G-K3T0K94HZ3', {
    page_path: url,
  });
};

// Track specific events
export const event = ({ action, params }: { action: string; params: any }) => {
  window.gtag('event', action, params);
}; 