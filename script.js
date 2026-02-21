document.addEventListener('DOMContentLoaded', () => {

    // =============================
    // 1. EFEITO DIGITAÇÃO
    // =============================
    const elementoAlvo = document.querySelector('.cabecalho-subtitulo');
    const textoParaDigitar = "Analista de Dados";
    let charIndex = 0;
    let apagando = false;

    function escrever() {
        if (!elementoAlvo) return;

        if (!apagando) {
            elementoAlvo.textContent = textoParaDigitar.substring(0, charIndex++);
            if (charIndex > textoParaDigitar.length) {
                apagando = true;
                setTimeout(escrever, 1500);
                return;
            }
        } else {
            elementoAlvo.textContent = textoParaDigitar.substring(0, charIndex--);
            if (charIndex < 0) {
                apagando = false;
            }
        }

        setTimeout(escrever, apagando ? 80 : 120);
    }

    escrever();

    // =============================
    // 2. DARK / LIGHT MODE
    // =============================
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');

            if (body.classList.contains('light-mode')) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
        });
    }

    // =============================
    // 3. MODAL
    // =============================
    const modal = document.getElementById('modalProjeto');

    if (modal) {

        window.abrirModal = function () {
            modal.style.display = 'flex';
        };

        window.fecharModal = function () {
            modal.style.display = 'none';
        };

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                window.fecharModal();
            }
        });
    }

    // =============================
    // 4. BLOQUEIO PROPAGAÇÃO
    // =============================
    const links = document.querySelectorAll('.projeto-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => e.stopPropagation());
    });

});


// =============================
// 5. WHATSAPP
// =============================
function enviarWhats(event) {
    event.preventDefault();

    const nomeInput = document.getElementById('nome');
    const mensagemInput = document.getElementById('mensagem');

    if (!nomeInput || !mensagemInput) return;

    const nome = nomeInput.value.trim();
    const mensagem = mensagemInput.value.trim();

    if (!nome || !mensagem) {
        alert("Preencha todos os campos.");
        return;
    }

    const texto = `Olá Eduardo! Me chamo ${nome}. ${mensagem}`;
    const url = `https://wa.me/5511969892900?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank', 'noopener');
}

// =============================
// MODAL IMAGEM FULLSCREEN
// =============================
function abrirImagem(img) {
    const modal = document.getElementById("modalImagem");
    const imagemExpandida = document.getElementById("imagemExpandida");

    imagemExpandida.src = img.src;
    modal.style.display = "flex";
}

document.querySelector(".fechar-imagem").onclick = function () {
    document.getElementById("modalImagem").style.display = "none";
};

document.getElementById("modalImagem").onclick = function (e) {
    if (e.target.id === "modalImagem") {
        this.style.display = "none";
    }
};

document.addEventListener("mousemove", (e) => {
    const before = document.querySelector("body::before");
});