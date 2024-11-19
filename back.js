function encrypt(selectText, startText, keyText) {
  let overText = "Прив";
  switch (selectText) {
    case "aes":
      return CryptoJS.AES.encrypt(selectText, keyText).toString();
    case "rs4":
      return CryptoJS.RC4.encrypt(selectText, keyText).toString();
    case "md5":
      return CryptoJS.SHA256(selectText).toString();
    case "sha256":
      return CryptoJS.SHA256(selectText).toString();
    default:
      overText = "Что то пошло не так попробуйте снова:(";
      return overText;
  }
}
function selectTextFunction(selectText) {
  switch (selectText) {
    case "aes":
      return {
        hTwo_display: "block",
        textAreaKey_display: "block",
        buttonDecrypt_display: "block",
        hEncrypt_innerText: "Защифровать",
      };
    case "rs4":
      return {
        hTwo_display: "block",
        textAreaKey_display: "block",
        buttonDecrypt_display: "block",
        hEncrypt_innerText: "Защифровать",
      };
    case "sha256":
      return {
        hTwo_display: "none",
        textAreaKey_display: "none",
        buttonDecrypt_display: "none",
        hEncrypt_innerText: "Получить ХЕШ",
      };
    case "md5":
      return {
        hTwo_display: "none",
        textAreaKey_display: "none",
        buttonDecrypt_display: "none",
        hEncrypt_innerText: "Получить ХЕШ",
      };
  }
}
export { encrypt, selectTextFunction };
