// Reading aids: progress bar, estimated reading time and a back-to-top button.
(function () {
  const WORDS_PER_MINUTE = 200;
  const CODE_WORDS_PER_MINUTE = 100;

  function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words[0] === '' ? 0 : words.length;
  }

  function addReadingTime(main) {
    const title = main.querySelector('h1');
    if (!title) {
      return;
    }
    const clone = main.cloneNode(true);
    let codeWords = 0;
    clone.querySelectorAll('pre').forEach(function (pre) {
      codeWords += countWords(pre.textContent);
      pre.remove();
    });
    const proseWords = countWords(clone.textContent);
    const minutes = Math.max(1, Math.round(
      proseWords / WORDS_PER_MINUTE + codeWords / CODE_WORDS_PER_MINUTE
    ));

    const label = document.createElement('p');
    label.className = 'reading-time';
    label.textContent = '⏱ ' + minutes + ' min read';
    title.insertAdjacentElement('afterend', label);
  }

  function addProgressAndBackToTop() {
    const bar = document.createElement('div');
    bar.className = 'reading-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'back-to-top';
    button.title = 'Back to top';
    button.setAttribute('aria-label', 'Back to top');
    button.textContent = '↑';
    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(button);

    let ticking = false;
    function update() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
      bar.style.transform = 'scaleX(' + progress + ')';
      button.classList.toggle('visible', window.scrollY > window.innerHeight);
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('#mdbook-content main');
    if (!main) {
      return;
    }
    addReadingTime(main);
    addProgressAndBackToTop();
  });
})();
