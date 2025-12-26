const normalShareBtn = document.getElementById("btn-normal-state");

const activeShareBtn = document.getElementById("btn-click-state");

const shareOptions = document.querySelector(".share-options");

normalShareBtn.addEventListener("click", function () {
  normalShareBtn.childNodes[1].classList.toggle("filter");
  shareOptions.classList.toggle("show");
});

activeShareBtn.addEventListener("click", () => {
  console.log("unclicked");
  shareOptions.classList.remove("show");
});

