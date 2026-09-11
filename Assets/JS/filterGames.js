document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('[data-category-filter]');
    const gameCards = document.querySelectorAll('[data-game-category]');
    const resultText = document.querySelector('.category-filter__result');

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const selectedCategory = button.dataset.categoryFilter;
            let visibleGames = 0;

            filterButtons.forEach(function (currentButton) {
                const isSelected = currentButton === button;
                currentButton.classList.toggle('is-active', isSelected);
                currentButton.setAttribute('aria-pressed', String(isSelected));
            });

            gameCards.forEach(function (card) {
                const shouldShow = selectedCategory === 'todos' || card.dataset.gameCategory === selectedCategory;
                card.classList.toggle('is-hidden', !shouldShow);
                card.setAttribute('aria-hidden', String(!shouldShow));

                if (shouldShow) {
                    visibleGames += 1;
                }
            });

            if (resultText) {
                const categoryName = button.firstChild.textContent.trim().toLowerCase();
                const gameLabel = visibleGames === 1 ? 'jogo encontrado' : 'jogos encontrados';
                resultText.textContent = selectedCategory === 'todos'
                    ? visibleGames + ' ' + gameLabel
                    : visibleGames + ' ' + gameLabel + ' em ' + categoryName;
            }
        });
    });
});
