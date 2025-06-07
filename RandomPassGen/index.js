function generatePass(){

  const len = parseInt(document.getElementById("len").value);
  const useUpper = document.getElementById("upperCase").checked;
  const useLower = document.getElementById("lowerCase").checked;
  const useNum = document.getElementById("numbers").checked;
  const useSym = document.getElementById("symbols").checked;

    const lowers="abcdefghijklmnopqrstuvwxyz";
const uppers="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums="0123456789";
const sym="!@#$%^&*()";
let password="";

let allowedChars = "";
  if (useLower) allowedChars += lowers;
  if (useUpper) allowedChars += uppers;
  if (useNum) allowedChars += nums;
  if (useSym) allowedChars += sym;

if (len <= 0 || isNaN(len)) {
    document.getElementById("result").textContent = "Enter a valid length.";
    return;
  }

  if (allowedChars === "") {
    document.getElementById("result").textContent = "Select at least one option.";
    return;
  }

  
  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars.charAt(randomIndex);
  }
document.getElementById("result").textContent=password;
}





