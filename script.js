    function triggerCardAnimations() {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('bounce-in');
            }, index * 80); 
        });
    }
    window.addEventListener('transitionDone', triggerCardAnimations);

    
    setTimeout(triggerCardAnimations, 700);

window.addEventListener('load', function () {
    document.querySelectorAll('.fill').forEach(function (el) {
        el.style.width = '0%';
    });
 
    setTimeout(function () {
        document.querySelectorAll('.fill').forEach(function (el) {
            el.style.width = el.getAttribute('data-width');
        });
    }, 150);
});


(function () {
  const overlay = document.getElementById('page-transition');

  
  document.querySelectorAll('nav a').forEach(link => {
    if (link.href === location.href) link.classList.add('active');
  });

 
  if (overlay) {
    overlay.classList.remove('slide-in');
    overlay.classList.add('slide-out');
    overlay.addEventListener('animationend', () => {
      overlay.classList.remove('slide-out');
    }, { once: true });
  }


  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = this.href;
      if (!target || target === location.href) return;
      e.preventDefault();

      if (overlay) {
        overlay.classList.remove('slide-out');
        overlay.classList.add('slide-in');
        overlay.addEventListener('animationend', () => {
          window.location.href = target;
        }, { once: true });
      } else {
        window.location.href = target;
      }
    });
  });
})();