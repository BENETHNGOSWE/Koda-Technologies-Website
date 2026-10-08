/* Preservation review only: retain UI interactions but never submit visitor data
   to the original vendor. Remove/replace this guard only after wiring approved Koda endpoints. */
(function () {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {};
  function message(form) {
    if (!form) return;
    var note = form.querySelector('[data-review-notice]');
    if (!note) {
      note = document.createElement('p');
      note.setAttribute('data-review-notice', '');
      note.setAttribute('role', 'status');
      note.style.cssText = 'margin:16px 0 0;padding:12px;background:#eaf6fc;color:#17445d;border-radius:6px;font-size:14px;line-height:1.5;';
      form.appendChild(note);
    }
    note.textContent = 'Design preview only. This form is not connected to a submission service. No information has been sent.';
  }
  document.addEventListener('submit', function (e) {
    e.preventDefault(); e.stopImmediatePropagation(); message(e.target);
  }, true);
  document.addEventListener('click', function (e) {
    var control = e.target.closest('#submit, #modal-partners-btn, #erp-form-btn, #download-brochure, #pricing-link, #submit3, #sendotp-btn, button[type="submit"], input[type="submit"]');
    if (control && control.closest('form')) { e.preventDefault(); e.stopImmediatePropagation(); message(control.closest('form')); }
  }, true);
  var open = XMLHttpRequest.prototype.open;
  var send = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (method, url) {
    this._reviewBlocked = /\.php(?:[?#]|$)/i.test(String(url)) || /controller|checkmobile|track-error|log-error|lead-capture/i.test(String(url));
    if (!this._reviewBlocked) return open.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function () {
    if (this._reviewBlocked) return;
    return send.apply(this, arguments);
  };
})();
