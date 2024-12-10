import {
  POPUP_MESSAGE_TYPE,
  SERVICE_WORKER_MESSAGE_TYPE,
} from "@constants/message";

export const serviceWorkerListner = (request, _sender, reply) => {
  (async () => {
    switch (request.type) {
      case SERVICE_WORKER_MESSAGE_TYPE.SW_CONNECT_VERIFY_WITH_CONTENT_SCRIPT: {
        reply(true);
        return true;
      }

      case POPUP_MESSAGE_TYPE.CHECK_IF_WIDGET_IS_INJECTED: {
        reply(true);
        return true;
      }

      default: {
        // Default Case, when a request is sent and not covered any case
        reply();
        return true;
      }
    }
  })();
  return true;
};
