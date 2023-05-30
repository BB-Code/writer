document.getElementById('theme-mode').addEventListener('click', async () => {
    const toDark = await window.themeMode.dark()
    document.getElementById('theme-mode').innerHTML = toDark ? '🌙' : '🌞'
})