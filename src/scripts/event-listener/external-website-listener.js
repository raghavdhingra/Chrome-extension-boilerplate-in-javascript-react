import { getExtensionDetail } from "@scripts/function";
import { EXTENSION_COMMUTE_MESSAGE_TYPE } from "@constants/message";

export const serviceWorkerExternalWebsiteListner = (
  request,
  _sender,
  reply
) => {
  (async () => {
    switch (request.type) {
      case EXTENSION_COMMUTE_MESSAGE_TYPE.CONNECTION_REQUEST: {
        const version = getExtensionDetail();
        reply(version || "");
        return true;
      }

      default: {
        reply();
        return true;
      }
    }
  })();
  return true;
};
