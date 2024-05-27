document.getElementById('toggleDarkMode').addEventListener('click', function() {
    const body = document.body;
    const button = document.getElementById('toggleDarkMode');
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        button.textContent = 'Disable Dark Mode';
    } else {
        button.textContent = 'Enable Dark Mode';
    }
});
