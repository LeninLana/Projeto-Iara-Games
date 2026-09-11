document.addEventListener('DOMContentLoaded', function () {
    const botoesSalvar = document.querySelectorAll('.save-button');

    const notificacao = document.createElement('div');
    notificacao.className = 'save-notification';
    notificacao.textContent = 'Jogo salvo em "Favoritos"';
    notificacao.setAttribute('role', 'status');
    notificacao.setAttribute('aria-live', 'polite');
    notificacao.setAttribute('aria-atomic', 'true');
    document.body.appendChild(notificacao);

    let notificationTimer;

    function mostrarNotificacao() {
        clearTimeout(notificationTimer);
        notificacao.classList.add('visible');

        notificationTimer = setTimeout(function () {
            notificacao.classList.remove('visible');
        }, 2200);
    }

    botoesSalvar.forEach(function (botao) {
        botao.addEventListener('click', function () {
            const ativo = botao.classList.toggle('ativo');
            botao.setAttribute('aria-pressed', String(ativo));
            botao.setAttribute('aria-label', ativo ? 'Remover dos favoritos' : 'Salvar jogo');

            if (ativo) {
                mostrarNotificacao();
            }
        });
    });
});
