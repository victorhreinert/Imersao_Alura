const h1 = document.querySelector('#greeting');

var horaAtual = new Date().getHours();

/* document.body.h1.document.querySelector('#h1') */

if (horaAtual > 5 && horaAtual < 13) {
    h1.innerText = `Bom Dia`;
    console.log('Bom Dia`');
} else if (horaAtual > 13 && horaAtual < 20) {
    h1.innerText = `Boa Tarde`;
    console.log('Boa Tarde');
} else {
    h1.innerText = `Boa Noite`;
    console.log('Boa Noite');
}

// GRID INTELIGENTE
const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {  //mudanças no tamanho do elemento 
  const containerWidth = container.offsetWidth; //largura total do elemento, incluindo largura do conteúdo, bordas e preenchimento.
  const numColumns = Math.floor(containerWidth / 200); //número de colunas com base na largura do container

  //largura mínima de 200px e máxima de 1fr (uma fração do espaço disponível).
  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;

  console.log({ container });
  console.log({ numColumns });
});
//observando a mudança do elemento
observer.observe(container);
