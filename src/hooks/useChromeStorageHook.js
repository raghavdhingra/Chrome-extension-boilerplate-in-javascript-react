import { useEffect, useState } from "react";

export const useChromeStorageHook = (key) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    chrome.storage.local.get([key], (items) => {
      setValue(items[key]);
    });

    const listener = (changes, namespace) => {
      if (namespace === "local" && changes[key]) {
        setValue(changes[key].newValue);
      }
    };

    // Add the listener and clean it up on unmount
    chrome.storage.onChanged.addListener(listener);
    return () => chrome.storage.onChanged.removeListener(listener);
  }, [key]);

  return value;
};
