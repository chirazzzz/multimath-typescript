function startGame() {
  // starting a new game
  const messagesElement = document.getElementById("messages");
  messagesElement.innerText = "Welcome to MultiMath! Starting new game...";
}

document.getElementById("startGame").addEventListener("click", startGame);
