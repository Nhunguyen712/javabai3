const randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = null;
while (userGuess !== randomNumber) {
  const input = prompt("Hãy đoán một số từ 1 đến 10:");
  
  if (input === null) {
    alert("Bạn muốn thoát chứ?");
    break;
  }
  userGuess = parseInt(input);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    alert("Vui lòng nhập một số hợp lệ từ 1 đến 10.");
  } else if (userGuess !== randomNumber) {
    alert("Sai rồi thử lại.");
  }
}

if (userGuess === randomNumber) {
  alert("Bạn đã đoán đúng số! " + randomNumber);
}
