(() => {
  function s() {
    d(), i(), o();
  }
  function d() {
    window.customElements.define('r-grid', class extends HTMLElement {}, {
      extends: 'div',
    }),
      window.customElements.define('r-cell', class extends HTMLElement {}, {
        extends: 'div',
      });
  }
  function i() {
    document.addEventListener('keypress', (e) => {
      e.altKey &&
        (e.code == 'KeyG'
          ? document.body.classList.toggle('debug-base-grid')
          : e.code == 'KeyD' &&
            (document.documentElement.classList.toggle('debug-base-grid'),
            document.documentElement.classList.toggle('debug')));
    });
  }
  function o() {
    const e = document.querySelector('r-grid.main.post,r-grid.main.work');
    if (e) {
      let n = e.querySelectorAll('h2[id],h3[id]');
      for (let t = 0; t < n.length; t++) l(n[t]);
    }
  }
  function l(e) {
    if (!e.id) return;
    for (let t = 0; t < e.childNodes.length; t++)
      if (e.childNodes[t].nodeName == 'A') return;
    let n = document.createElement('a');
    for (; e.childNodes.length; ) n.appendChild(e.childNodes[0]);
    e.appendChild(n), (n.href = '#' + e.id);
  }
  s();
})();
//# sourceMappingURL=main.js.map
