const clock = document.getElementById("clock");

function getClock() {
  const date = new Date();
  clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);
