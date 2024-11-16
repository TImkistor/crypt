const optionStorage = ["aes","md5",'sha256']

// Элементы страницы
const divMain = document.createElement("div");
const selectMain = document.createElement("select");
const buttonMain = document.createElement("button");
const hOne = document.createElement("h1");
const hTwo = document.createElement("h1");
const hThree = document.createElement("h1");
const hFour = document.createElement("h1");
const hEncrypt = document.createElement("h2");
const hDecrypt = document.createElement("h2");
const inputKey = document.createElement("input");
const inputStart = document.createElement("input");
const inputOver = document.createElement("input");
const buttonDecrypt = document.createElement("div");
const buttonEncrypt = document.createElement("div");

// Стили div
divMain.id = "myDiv";
divMain.style.backgroundColor = "rgb(20, 16, 39)"
divMain.style.width = "90%"
divMain.style.height = "100%"
divMain.style.borderRadius = "5%"
divMain.style.marginLeft = "5%"

// Стили h1
hOne.innerText = "Алгоритм"
hTwo.innerText = "Ключ"
hThree.innerText = "Ввод"
hFour.innerText = "Ввывод"
hEncrypt.innerText = "Защифровать" 
hDecrypt.innerText = "Расщифровать"
hOne.style.textAlignLast=hTwo.style.textAlignLast=hThree.style.textAlignLast=hFour.style.textAlign = "center"
hOne.style.color=hTwo.style.color=hThree.style.color=hFour.style.color = hEncrypt.style.color = hDecrypt.style.color = "white"
hEncrypt.style.textAlign = hDecrypt.style.textAlign = "center"

// Стили select
selectMain.style.width = "80%";
selectMain.style.height = "3%";
selectMain.style.marginLeft = "10%"
selectMain.style.backgroundColor = "black"
selectMain.style.color = "white"
selectMain.id = "selectMain"

//Стили input
inputKey.style.width = inputStart.style.width = inputOver.style.width = "80%"
inputKey.style.marginLeft = inputStart.style.marginLeft = inputOver.style.marginLeft = "10%"
inputKey.style.backgroundColor = inputStart.style.backgroundColor = inputOver.style.backgroundColor= "black"
inputKey.style.color =  inputStart.style.color = inputOver.style.color = "white"
inputStart.style.height = inputOver.style.height = "20%"
inputKey.style.height = "5%"
inputKey.id = "inputkey"
inputStart.id = "inputStart"
inputOver.id = "inputOver"

//Стили кнопок
buttonEncrypt.style.width = buttonDecrypt.style.width = "20%" 
buttonEncrypt.style.height = buttonDecrypt.style.height = "5%"
buttonEncrypt.style.backgroundColor = buttonDecrypt.style.backgroundColor = "green"
buttonEncrypt.style.color = buttonDecrypt.style.color = "white"
buttonEncrypt.style.marginLeft = buttonDecrypt.style.marginLeft = "10%"
buttonEncrypt.style.marginTop = buttonDecrypt.style.marginTop = "2%"
buttonEncrypt.style.marginLeft = buttonDecrypt.style.marginLeft = "40%"
buttonEncrypt.style.borderRadius = buttonDecrypt.style.borderRadius = "10%"

function main(){
    document.body.appendChild(divMain);

    divMain.appendChild(hOne);

    document.body.appendChild(selectMain);
    divMain.appendChild(selectMain)
    optionStorage.forEach(option => {
        const newOption = document.createElement("option");
        newOption.innerText = option;
        newOption.style.textAlignLast = "center"
        selectMain.appendChild(newOption);
        });
    divMain.appendChild(hTwo)

    divMain.appendChild(inputKey)

    divMain.appendChild(hThree)

    divMain.appendChild(inputStart)

    divMain.appendChild(hFour)

    divMain.appendChild(inputOver)

    divMain.appendChild(buttonEncrypt)
    buttonEncrypt.appendChild(hEncrypt)

    divMain.appendChild(buttonDecrypt)
    buttonDecrypt.appendChild(hDecrypt)      
}