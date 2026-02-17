const menuBtn = document.querySelector('.options');
const menuList = document.querySelector('.optionmn');
menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
});
const closeBtn = document.querySelector('.fechar');
closeBtn.addEventListener('click', () => {
    menuList.classList.remove('active');
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

/*último menu*/

const navOptions = document.querySelectorAll(".navOpt");

navOptions.forEach((option) => {
  const header = option.querySelector(".navMax");
  const content = option.querySelector(".navLi");
  const icon = option.querySelector("img");

  header.addEventListener("click", () => {

    // Fecha todos primeiro
    document.querySelectorAll(".navLi").forEach(item => {
      if (item !== content) {
        item.classList.remove("active");
      }
    });

    document.querySelectorAll(".navMax img").forEach(img => {
      if (img !== icon) {
        img.classList.remove("rotate");
      }
    });

    // Alterna o clicado
    content.classList.toggle("active");
    icon.classList.toggle("rotate");
  });
});
