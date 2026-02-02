import { useEffect, useCallback, useState } from "react";

const RECAPTCHA_SITE_KEY = "6LeIsl0sAAAAAHyIpao43uLUWNEKkCnKqpquAiLE";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      render: (container: string | HTMLElement, parameters: {
        sitekey: string;
        callback: (token: string) => void;
        "expired-callback"?: () => void;
        "error-callback"?: () => void;
      }) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

export function useRecaptcha(containerId: string) {
  const [token, setToken] = useState<string | null>(null);
  const [widgetId, setWidgetId] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[src*="recaptcha/api.js"]')) {
      if (window.grecaptcha) {
        setIsLoaded(true);
      }
      return;
    }

    // Load reCAPTCHA script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
    script.async = true;
    script.defer = true;

    // Global callback for when reCAPTCHA is loaded
    (window as any).onRecaptchaLoad = () => {
      setIsLoaded(true);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup global callback
      delete (window as any).onRecaptchaLoad;
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || widgetId !== null) return;

    const container = document.getElementById(containerId);
    if (!container || !window.grecaptcha) return;

    window.grecaptcha.ready(() => {
      try {
        const id = window.grecaptcha.render(containerId, {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: (responseToken: string) => {
            setToken(responseToken);
          },
          "expired-callback": () => {
            setToken(null);
          },
          "error-callback": () => {
            setToken(null);
          },
        });
        setWidgetId(id);
      } catch (error) {
        console.error("Error rendering reCAPTCHA:", error);
      }
    });
  }, [isLoaded, containerId, widgetId]);

  const resetRecaptcha = useCallback(() => {
    if (window.grecaptcha && widgetId !== null) {
      window.grecaptcha.reset(widgetId);
      setToken(null);
    }
  }, [widgetId]);

  return { token, resetRecaptcha, isLoaded };
}
