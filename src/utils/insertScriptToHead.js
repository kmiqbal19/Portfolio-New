// utils/insertScript.ts
export function insertScriptToHead(scriptContent, options) {
    const { isExternal = false, id } = options || {};
  
    // Avoid duplicate script by ID
    if (id && document.getElementById(id)) return;
  
    const script = document.createElement('script');
    if (id) script.id = id;
  
    if (isExternal) {
      script.src = scriptContent;
      script.async = true;
    } else {
      script.textContent = scriptContent;
    }
  
    document.head.appendChild(script);
  }
  