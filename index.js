const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolArr = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

function copy() {
    alert("Sorry, Error for now")
}

function generatePass() {
    let setLength = document.querySelector("#input").value;
    if (setLength === "") {
        setLength = 15;
    }
    let newPass = "";
    for (let i = 0; i < setLength; i++) {
        let randChar = Math.floor(Math.random() * characters.length);
        newPass += characters[randChar];
    }
    return newPass;
}

function randPass() {
    if (document.querySelector('#no-num').checked && characters.includes("0")) {
        characters.splice(characters.indexOf("0"), 10);
    } else if (!document.querySelector('#no-num').checked && !characters.includes("0")) {
        for (let i = 0; i < numArr.length; i++) {
            characters.push(numArr[i]);
        }
    } 
    if (document.querySelector('#no-symbol').checked && characters.includes("~")) {
        characters.splice(characters.indexOf("~"), 29);
    } else if (!document.querySelector('#no-symbol').checked && !characters.includes("~")) {
        for (let i = 0; i < symbolArr.length; i++) {
            characters.push(symbolArr[i]);
        }
    }
    
    document.querySelector("#password-container1").textContent = generatePass();
    document.querySelector("#password-container2").textContent = generatePass();
}