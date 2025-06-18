

/* Faz a distribuição das estrelas aleatoriamente*/
const numEstrelas = 1600;
const container = document.getElementById('estrelas-container');

for (let i = 0; i < numEstrelas; i++) {
  const estrela = document.createElement('div');
  estrela.className = 'estrela';
  estrela.style.top = `${Math.random() * 100}vh`;
  estrela.style.left = `${Math.random() * 100}vw`;
  estrela.style.animationDuration = `${Math.random() * 2 + 1}s`;
  container.appendChild(estrela);
}
