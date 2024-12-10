export const setValueToChromeStorage = (key, value) => {
  return new Promise((res, rej) => {
    chrome.storage.local
      .set({ [key]: value })
      .then(() => {
        res(value);
      })
      .catch((error) => rej(error));
  });
};

export const getValueFromChromeStorage = (key) => {
  return new Promise((res, rej) => {
    chrome.storage.local
      .get(key)
      .then((data) => {
        if (data?.[key]) {
          res(data[key]);
          return;
        }
        res(null);
      })
      .catch((error) => rej(error));
  });
};

export const removeKeyFromChromeStorage = (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local
      .remove([key])
      .then(() => resolve(true))
      .catch(() => reject(false));
  });
};
