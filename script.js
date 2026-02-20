document.addEventListener('DOMContentLoaded', () => {

    // Efeito digitação
    const elemento = document.querySelector('.cabecalho-subtitulo');
    const texto = "Analista de Dados";
    let i = 0;
    let apagando = false;

    function escrever() {
        if (!apagando) {
            elemento.textContent = texto.substring(0, i++);
            if (i > texto.length) {
                apagando = true;
                setTimeout(escrever, 1500);
                return;
            }
        } else {
            elemento.textContent = texto.substring(0, i--);
            if (i < 0) apagando = false;
        }

        setTimeout(escrever, apagando ? 70 : 120);
    }

    escrever();

    // Dark / Light Mode
    const toggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // Modal
    const modal = document.getElementById('modalProjeto');

    window.abrirModal = () => modal.style.display = 'flex';
    window.fecharModal = () => modal.style.display = 'none';

    modal.addEventListener('click', (e) => {
        if (e.target === modal) fecharModal();
    });
});

// WhatsApp
function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !mensagem) {
        alert("Preencha todos os campos.");
        return;
    }

    const texto = `Olá Eduardo! Me chamo ${nome}. ${mensagem}`;
    const url = `https://wa.me/5511969892900?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
}