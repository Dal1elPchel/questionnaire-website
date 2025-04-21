window.addEventListener('load', () => {
    history.replaceState(null, '', window.location.href);
});


window.addEventListener('popstate', (event) => {
    window.location.href = "../index.html";
})