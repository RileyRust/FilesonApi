const baseUrl = "http://localhost:5118/";

export const getsomethingfromApi = async () => {
  const response = await fetch(baseUrl);
  const text = await response.text();
  return text;
};

export const storeFileonApi = async (fileAsString) => {
  const body = {
    base64File: fileAsString,
  };

  await fetch(baseUrl + "fileUpload", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getBase64FileFromApi = async () => {
  const url = baseUrl + "file"

  const response =  await fetch(url)

  return await response.text()
};
