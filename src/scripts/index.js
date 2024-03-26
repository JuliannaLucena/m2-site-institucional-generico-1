function handleModal() {
    const botaoCadastro = document.querySelector('.botaoRegistro');
    const modalController = document.querySelector('.modalController');
    const botaoCadastro2 = document.querySelector(".botaoRegistro2")

    botaoCadastro.addEventListener('click', function() {
        modalController.showModal();

        closeModal();
    })

    botaoCadastro2.addEventListener('click', function() {
        modalController.showModal();

        closeModal();
    })
}

function closeModal() {
    const botaoFechar = document.querySelector('.botaoFechar');
    const modalController = document.querySelector('.modalController');

    botaoFechar.addEventListener('click', function() {
        modalController.close();
    })
}

handleModal() 

















