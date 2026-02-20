// Localize o final do seu script e adicione:

document.querySelectorAll('.projeto-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Isso impede que o clique no link ative o "abrirModal" do pai
        e.stopPropagation(); 
    });
});