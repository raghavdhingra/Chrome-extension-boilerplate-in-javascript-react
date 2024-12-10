import React from "react";
import { createRoot } from "react-dom/client";

import { POPUP_MESSAGE_TYPE } from "@constants/message";

import { injectStyleSheet } from "./injectStyleSheet";

(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.tabs.sendMessage(
      tab.id || 0,
      { type: POPUP_MESSAGE_TYPE.CHECK_IF_WIDGET_IS_INJECTED },
      (_response) => {
        const rootElement = document.getElementById("root");
        if (!rootElement) {
          throw new Error("Can't find root element");
        }
        const root = createRoot(rootElement);

        injectStyleSheet();

        root.render(<div>Popup</div>);
      }
    );
  });
})();
