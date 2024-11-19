function encrypt(selectText, startText, keyText) {
  let overText = "1";
  switch (selectText) {
    case "aes":
      return CryptoJS.AES.encrypt(startText,keyText).toString();
    case "rs4":
      return CryptoJS.RC4.encrypt(startText,keyText).toString();
    case "md5":
      return CryptoJS.SHA256(startText).toString();
    case "sha256":
      return CryptoJS.SHA256(startText).toString();
    default:
      overText = "Что то пошло не так попробуйте снова:(";
      return overText;
  }
}
function decrypt(selectText,startText,keyText){
  let overText = "1";
  switch (selectText){
    case "aes":
      return CryptoJS.AES.decrypt(startText,keyText).toString();
    case "rs4":
      return CryptoJS.RC4.decrypt(startText,keyText).toString();
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
export { encrypt, selectTextFunction, decrypt};
