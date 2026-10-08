/* Koda static enquiry routing. Block obsolete vendor submission endpoints. */
(function () {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {};
  function message(form) {
    window.location.assign('/contact-us.html');
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
    this._kodaBlocked = /\.php(?:[?#]|$)/i.test(String(url)) || /controller|checkmobile|track-error|log-error|lead-capture/i.test(String(url));
    if (!this._kodaBlocked) return open.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function () {
    if (this._kodaBlocked) return;
    return send.apply(this, arguments);
  };
})();
