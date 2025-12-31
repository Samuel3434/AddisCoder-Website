document.addEventListener("DOMContentLoaded", function () {
  const line = document.querySelector('.line');
  const section = document.querySelector('.timeline');
  
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const sectionRect = entry.boundingClientRect;
              const viewportHeight = window.innerHeight;
              const sectionTop = sectionRect.top;
              const sectionHeight = sectionRect.height;

              const visibilityRatio = Math.min(1, (viewportHeight - sectionTop) / sectionHeight);
              line.style.height = `${visibilityRatio * 100}%`; 
          } else {
              line.style.height = "0"; 
          }
      });
  }, {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: Array.from({length: 101}, (_, i) => i / 100) // Check at every 1% of the section's visibility
  });

  observer.observe(section);
});
