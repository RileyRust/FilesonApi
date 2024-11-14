import { getBase64FileFromApi, getsomethingfromApi, storeFileonApi } from "./service.js";

console.log("in UI");

const text = await getsomethingfromApi();
console.log(text);

const setupForm = () => {
  const formElement = document.getElementById("fileUploadForm");
  formElement.addEventListener("submit",  async (e) => {
    e.preventDefault();
    const fileUploadElement = document.getElementById("fileUpload");
    console.log(fileUploadElement);
    const file = fileUploadElement.files[0];

    console.log(file);

    function getBase64(file) {
      return new Promise((resolve, reject) => {
        var reader = new FileReader();
  
        reader.readAsDataURL(file);
  
        reader.onload = async function () {
         // console.log(reader.result);
         resolve(reader.result)
        };
        reader.onerror = function (error) {
          console.log("Error: ", error);
          reject(error)
        };

      });
    }

    const base64File = await getBase64(file);
    await storeFileonApi(base64File);

    const stringFromApi = await getBase64FileFromApi(); 

    const imageContainer = document.getElementById("ImageContainer")
    const imageElement = document.createElement("img")
    imageElement.src = stringFromApi
    imageContainer.replaceChildren(imageElement)
  });
};

setupForm();
