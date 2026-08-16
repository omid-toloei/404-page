const container = document.querySelector("#container");

window.addEventListener('mousemove', (event) => {
  // m = mouse / x and y = mouse x or y position
  let mLocateX = event.clientX / 5;
  let mLocateY = event.clientY / 5;

  container.style.backgroundPositionX = mLocateX + "px";
  container.style.backgroundPositionY = mLocateY + "px";
});