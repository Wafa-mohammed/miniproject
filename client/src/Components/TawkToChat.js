// TawkToChat.js
import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67449a3b2480f5b4f5a3a7ec/1idhvkuhv";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No UI, just the script
};

export default TawkToChat;