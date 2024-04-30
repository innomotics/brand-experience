// import { defineCustomElement as defineToastContainer } from "@innomotics/ix/components/inno-status-message-container.js";
// import { defineCustomElement as defineToast } from "@innomotics/ix/components/inno-status-message.js";

import { statusMessage, InnoStatusMessageConfig } from "@innomotics/ix";
import ReactDOMClient from "react-dom/client";

export type StatusMessageConfig = {
  message: string | React.ReactNode;
};

export async function showStatusMessage(
  config: Omit<InnoStatusMessageConfig, "message"> & StatusMessageConfig
) {
  // Define custom element, otherwise dynamic creation of tosat container will fail
  // defineToast();
  // defineToastContainer();

  if (typeof config.message === "string") {
    const toastInstance = await statusMessage(
      config as InnoStatusMessageConfig
    );
    return toastInstance;
  }

  const node = config.message as React.ReactNode;
  const toastContainer = document.createElement("DIV");
  const root = ReactDOMClient.createRoot(toastContainer);
  root.render(node);

  const toastInstance = await statusMessage({
    ...config,
    message: toastContainer,
  });

  toastInstance.onClose.once(() => {
    root.unmount();
  });

  return toastInstance;
}
