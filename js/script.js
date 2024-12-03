const endTime = "4 December 2024, 01:49:00 PM";

document.getElementById("end-time").innerText = endTime;
const inputs = document.querySelectorAll("input");
//console.log(inputs);

function clock() {
  const end = new Date(endTime);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return;

  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor((diff / 3600) % 24);
  inputs[2].value = Math.floor((diff / 60) % 60);
  inputs[3].value = Math.floor(diff % 60);
}

setInterval(() => {
  clock();
}, 1000);
