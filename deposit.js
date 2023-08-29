const deposit_btn = document.querySelector(".deposit_btn");

deposit_btn.addEventListener("click", function () {
  const depositInput = document.querySelector("#deposit_input").value;
  document.querySelector("#deposit_input").value = "";

  const depositTotal = document.querySelector("#depositTotal").innerText;
  document.querySelector("#depositTotal").innerText += depositInput;
});
