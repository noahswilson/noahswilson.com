const visual = document.querySelector(".hero-visual");

if (visual && window.matchMedia("(pointer: fine)").matches) {
  visual.addEventListener("pointermove", (event) => {
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    visual.style.transform = `rotate(1.2deg) perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg)`;
  });

  visual.addEventListener("pointerleave", () => {
    visual.style.transform = "rotate(1.2deg)";
  });
}
