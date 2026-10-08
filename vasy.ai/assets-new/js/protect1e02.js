document.addEventListener('copy', function (event) {
    var copiedText = window.getSelection().toString();
    if (copiedText) {
        var pageURL = window.location.href;
        var copiedContent = copiedText + '\n\nCopyright © VASY ' + new Date().getFullYear() + '\n' + '\nRead more at:' + pageURL;
        event.clipboardData.setData('text/plain', copiedContent);
        event.preventDefault();
    }
});

