var generatedPassword = '';
function generatePassword() {
var passwordLengthInput = document.querySelector(".passwordLength");
var passwordLength = passwordLengthInput.value;
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|\\:;<>,.?/~";

if (passwordLength >= 8 && passwordLength <= 16) {
    generatedPassword = '';
for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    generatedPassword += characters.charAt(randomIndex);
    }
    var passwordDisplay = document.querySelector(".password");
    passwordDisplay.textContent = "Your random password is: " + generatedPassword;
    } else {
        alert("Please enter a valid password length between 8 and 16.");
    }
}

function copyToClipboard() {
if (generatedPassword) {
    var textArea = document.createElement("textarea");
    textArea.value = generatedPassword;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Password copied");
    } else {
        alert("You need to generate.");
    }
}

function modifyText() {
    var inputElement = document.querySelector(".pss");
    // Modify the text by setting the value property
    inputElement.value = "Modified Text";
}