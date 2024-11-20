import { encrypt, selectTextFunction, decrypt } from "./back.js";
const optionStorage = ["aes", "rs4", "sha256", "md5"];

// Элементы страницы
const divMain = document.createElement("div");
const selectMain = document.createElement("select");
const hOne = document.createElement("h1");
const hTwo = document.createElement("h1");
const hThree = document.createElement("h1");
const hFour = document.createElement("h1");
const hEncrypt = document.createElement("h2");
const hDecrypt = document.createElement("h2");
const textAreaKey = document.createElement("textarea");
const textAreaStart = document.createElement("textarea");
const textAreaOver = document.createElement("textarea");
const buttonDecrypt = document.createElement("div");
const buttonEncrypt = document.createElement("div");

// Стили div
divMain.id = "myDiv";
divMain.style.backgroundColor = "rgb(20, 16, 39)";
divMain.style.width = "90%";
divMain.style.height = "100%";
divMain.style.borderRadius = "5%";
divMain.style.marginLeft = "5%";

// Стили h1
hOne.innerText = "Алгоритм";
hTwo.innerText = "Ключ";
hThree.innerText = "Ввод";
hFour.innerText = "Ввывод";
hEncrypt.innerText = "Защифровать";
hDecrypt.innerText = "Расщифровать";
hTwo.id = "hTwo";
hOne.style.textAlign=hTwo.style.textAlign=hThree.style.textAlign=hFour.style.textAlign=hEncrypt.style.textAlign=hDecrypt.style.textAlign="center";
hOne.style.color=hTwo.style.color=hThree.style.color=hFour.style.color="white";

// Стили select
selectMain.style.width = "80%";
selectMain.style.height = "3%";
selectMain.style.marginLeft = "10%";
selectMain.style.backgroundColor = "black";
selectMain.style.color = "white";
selectMain.style.fontSize = "150%";
selectMain.id = "selectMain";

//Стили TextArea
textAreaKey.style.width=textAreaStart.style.width=textAreaOver.style.width="80%";
textAreaKey.style.marginLeft=textAreaStart.style.marginLeft=textAreaOver.style.marginLeft="10%";
textAreaKey.style.backgroundColor=textAreaStart.style.backgroundColor=textAreaOver.style.backgroundColor ="black";
textAreaKey.style.color=textAreaStart.style.color=textAreaOver.style.color ="white";
textAreaStart.style.height = textAreaOver.style.height = "20%";
textAreaKey.style.height = "5%";
textAreaKey.id = "inputKey";
textAreaStart.id = "inputStart";
textAreaOver.id = "inputOver";

//Стили кнопок
buttonEncrypt.style.display = buttonDecrypt.style.display = "flex";
buttonEncrypt.style.justifyContent = buttonDecrypt.style.justifyContent ="center";
buttonEncrypt.style.alignItems = buttonDecrypt.style.alignItems = "center";
buttonEncrypt.style.width = buttonDecrypt.style.width = "30%";
buttonEncrypt.style.height = buttonDecrypt.style.height = "5%";
buttonEncrypt.style.marginLeft = buttonDecrypt.style.marginLeft = "35%";
buttonEncrypt.style.marginTop = buttonDecrypt.style.marginTop = "2%";
buttonEncrypt.style.borderRadius = buttonDecrypt.style.borderRadius = "10%";
buttonEncrypt.style.fontSize = buttonDecrypt.style.fontSize = "130%";
buttonEncrypt.style.backgroundColor = buttonDecrypt.style.backgroundColor = "green";
buttonEncrypt.style.color = buttonDecrypt.style.color = "white";
buttonEncrypt.id = "buttonEncrypt";
buttonDecrypt.id = "buttonDecrypt";

//Анимация для кнопки Encrypt
buttonEncrypt.addEventListener("mouseover", function () {
  buttonEncrypt.style.backgroundColor = "rgb(9, 30, 16)";
});

buttonEncrypt.addEventListener("mouseleave", function () {
  buttonEncrypt.style.backgroundColor = "green";
});

buttonEncrypt.addEventListener("click", function () {
  buttonEncrypt.style.backgroundColor = "black";
  encryptFunction();
});

//Анимация для кнопки Decrypt
buttonDecrypt.addEventListener("mouseover", function () {
  buttonDecrypt.style.backgroundColor = "rgb(9, 30, 16)";
});

buttonDecrypt.addEventListener("mouseleave", function () {
  buttonDecrypt.style.backgroundColor = "green";
});

buttonDecrypt.addEventListener("click", function () {
  buttonDecrypt.style.backgroundColor = "black";
  decryptFunction();
});

// Аниимация для selectMain
optionStorage.addEventListener("click", function () {
  let selectText = document.getElementById("selectMain").value;
  let param = selectTextFunction(selectText);
  hTwo.style.display = param.hTwo_display;
  textAreaKey.style.display = param.textAreaKey_display;
  buttonDecrypt.style.display = param.buttonDecrypt_display;
  hEncrypt.innerText = param.hEncrypt_innerText;
  buttonDecrypt.style.justifyContent = "center"
  buttonDecrypt.style.alignItems = "center"
});

// Функция ввывода всех элемнтов при загрузке страницы
function main() {
  document.body.appendChild(divMain);

  divMain.appendChild(hOne);

  document.body.appendChild(selectMain);
  divMain.appendChild(selectMain);
  optionStorage.forEach((option) => {
    const newOption = document.createElement("option");
    newOption.innerText = option;
    newOption.style.textAlignLast = "center";
    selectMain.appendChild(newOption);
  });
  divMain.appendChild(hTwo);

  divMain.appendChild(textAreaKey);

  divMain.appendChild(hThree);

  divMain.appendChild(textAreaStart);

  divMain.appendChild(hFour);

  divMain.appendChild(textAreaOver);

  divMain.appendChild(buttonEncrypt);
  buttonEncrypt.appendChild(hEncrypt);

  divMain.appendChild(buttonDecrypt);
  buttonDecrypt.appendChild(hDecrypt);
}
window.onload = main;

function encryptFunction() {
  let selectText = document.getElementById("selectMain").value;
  let startText = document.getElementById("inputStart").value;
  let keyText = document.getElementById("inputKey").value;

  let overText = encrypt(selectText, startText, keyText);
  console.log(overText)
  textAreaOver.innerText = overText
}

function decryptFunction() {
  let selectText = document.getElementById("selectMain").value;
  let startText = document.getElementById("inputStart").value;
  let keyText = document.getElementById("inputKey").value;

  let overText = decrypt(selectText, startText, keyText);
  console.log(overText)
  textAreaOver.innerText = overText
}
