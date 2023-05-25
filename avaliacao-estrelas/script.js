const estrelas = document.querySelectorAll('.estrelas svg');

estrelas.forEach((estrela, index1) => {
    estrela.addEventListener('click', () => {
        estrelas.forEach((estrela, index2) => {
            index1 >= index2 ? estrela.classList.add('ativo') : estrela.classList.remove('ativo');
        });
    });
});