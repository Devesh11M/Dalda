// ये गार्ड हर page को lock करेगा
if (!localStorage.getItem("loggedInUser")) {
  window.location.href = "index.html";
}