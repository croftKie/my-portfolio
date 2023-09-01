export function mouseMove(event, ref) {
  if (false) {
    ref.classList.remove("mouseCursorFast");
    ref.style.height = event.target.clientHeight + 22.5 + "px";
    ref.style.width = event.target.clientWidth + 30 + "px";
    ref.style.top = event.target.offsetTop - 10 + "px";
    ref.style.left = event.target.offsetLeft - 12.5 + "px";
    ref.style.borderRadius = "25px";
  } else {
    ref.style.top = event.clientY - 10 + "px";
    ref.style.left = event.clientX - 10 + "px";
    ref.style.height = 20 + "px";
    ref.style.width = 20 + "px";
    ref.style.borderRadius = "50%";
    ref.classList.add("mouseCursorFast");
  }
}
