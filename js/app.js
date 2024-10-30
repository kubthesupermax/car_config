const topBar = document.getElementById("top-bar");

// <-- Top Bar on Scroll -->
const handleScroll = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle("visible-bar", atTop);
  topBar.classList.toggle("hidden-bar", atTop);
};

// Event Listeners
window.addEventListener("scroll", () => requestAnimationFrame(handleScroll));
// could have just used handleScroll() but I wanted to use the requestAnimationFrame() to get better performance
// added some vanilla css for the visibility of the top bar
