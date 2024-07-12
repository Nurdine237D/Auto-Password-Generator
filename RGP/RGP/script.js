 resultElement = document.getElementById("result");
lengthElement = document.getElementById("length");
uppercaseElement = document.getElementById("uppercase");
lowerElement = document.getElementById("lowercase");
numberElement = document.getElementById("number");
symbolElement = document.getElementById("symbols");
generateElement = document.getElementById("generate");
clipboardElement = document.getElementById("clipboard");

// Random functions
  getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  getRandomSymbol = () => {
      symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

  randomFunctions = {
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol,
};

clipboardElement.addEventListener("click", () => {
      password=resultElement.innerText;
    if(!password) return;
      textarea=document.creatElement("textarea");
    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    creationNotification("Password copied to clipboard!");

});

clipboardElement.addEventListener("click", () => {
      password = resultElement.innerText;
    if (!password) return;
      textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    creationNotification("Password copied to clipboard!");
});

generateElement.addEventListener("click", () => {
      length = +lengthElement.value;
      hasLower = lowerElement.checked;
      hasUpper = uppercaseElement.checked;
      hasNumber = numberElement.checked;
      hasSymbol = symbolElement.checked;
    resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

  generatePassword = (lower, upper, number, symbol, length) => {
    let generatedPassword = '';
      typesCount = lower + upper + number + symbol;
      typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    if (typesCount === 0) return '';
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
              funcName = Object.keys(type)[0];
            generatedPassword += randomFunctions[funcName]();
        });
    }
      finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
};