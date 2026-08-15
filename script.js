// One deliberate motion: a short board-power-up reveal after the document is ready.
window.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => document.body.classList.add('ready'));
});
