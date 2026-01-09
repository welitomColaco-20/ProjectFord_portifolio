const menuBtn = document.querySelector('.options');
const menuList = document.querySelector('.optionmn');
menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
});
const closeBtn = document.querySelector('.fechar');
closeBtn.addEventListener('click', () => {
    menuList.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const setas = document.querySelectorAll('.mv img');

    setas.forEach((seta) => {
        seta.addEventListener('click', function() {
             
            const lista = this.parentElement.nextElementSibling;

            if (lista) {
                lista.classList.toggle('aberto');
                this.style.transform = lista.classList.contains('aberto') ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    });
});
const mentn = document.querySelector('.botopt');
const menList = document.querySelector('.lihn');
mentn.addEventListener('click', () => {
    menList.classList.toggle('active');
});
//menu

// Seleciona todos os containers que envolvem o título e a seta
const accordions = document.querySelectorAll('.bx');

accordions.forEach((item) => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        
        if (content && content.classList.contains('textTm')) {
            content.classList.toggle('active');
            const seta = item.querySelector('.imst');
            if (seta) {
                seta.style.transform = content.classList.contains('active') 
                    ? 'rotate(90deg)' 
                    : 'rotate(0deg)';
                seta.style.transition = '0.3s';
            }
        }
    });
});



