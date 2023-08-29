const withdraw_btn = document.querySelector("#withdraw_btn");

withdraw_btn.addEventListener("click", function () {
  const withdrawInput = document.querySelector("#withdraw_input").value;
  document.querySelector("#withdraw_input").value = "";

  const withdrawTotal = document.querySelector("#withdrawTotal").innerText;
  document.querySelector("#withdrawTotal").innerText += withdrawInput;
});
