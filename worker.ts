// This is a module worker, so we can use imports (in the browser too!)
globalThis.addEventListener("message", (event) => {
  globalThis.postMessage(event.data * 100);
});

export {};
