const cube_3d = document.querySelector(".album");
let isDragging = false;
let startX, startY;
let currentX = 0;
let currentY = 0;

const startDrag = (e) => {
  isDragging = true;
  startX = e.pageX || e.touches[0].pageX;
  startY = e.pageY || e.touches[0].pageY;

  document.addEventListener("mousemove", onDrag);
  document.addEventListener("touchmove", onDrag);
  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("touchend", stopDrag);
};

const onDrag = (e) => {
  if (!isDragging) return;
  let posX = e.pageX || e.touches[0].pageX;
  let posY = e.pageY || e.touches[0].pageY;
  let deltaX = posX - startX;
  let deltaY = posY - startY;

  currentX += deltaX * 0.5;
  currentY -= deltaY * 0.5;

  cube_3d.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;
  startX = posX;
  startY = posY;
};

const stopDrag = () => {
  isDragging = false;
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("touchmove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
  document.removeEventListener("touchend", stopDrag);
};

cube_3d.addEventListener("mousedown", startDrag);
cube_3d.addEventListener("touchstart", startDrag);
