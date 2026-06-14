onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

document.querySelectorAll('.flower__light').forEach(light => {
  light.style.animationDelay =
    `${Math.random() * 5}s`;
});