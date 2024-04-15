document.addEventListener('DOMContentLoaded', function () {
    let scrollButton = document.getElementById('ancor-link');
    let targetBlock = document.getElementById('targetBlock');

    scrollButton.addEventListener('click', function () {
        var targetOffsetTop = targetBlock.offsetTop; // Получаем вертикальное смещение целевого блока
        var scrollAmount = targetOffsetTop + 50; // Добавляем небольшой отступ, чтобы перейти чуть за целевой блок

        window.scrollTo({
            top: scrollAmount,
            behavior: 'smooth'
        });

        setTimeout(function () {
            window.scrollTo({
                top: targetOffsetTop - 5,
                behavior: 'smooth'
            });
        }, 500);

        setTimeout(function () {
            window.scrollTo({
                top: targetOffsetTop,
                behavior: 'smooth'
            });
        }, 700);
    });
});