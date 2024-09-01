// Selecione os containers
const containers = document.querySelectorAll('#container2, #container22, #container23, #container24');

// Adicione um evento de clique nos containers
containers.forEach((container) => {
  container.addEventListener('click', () => {
    // Verifique se o container está expandido
    if (container.classList.contains('expanded')) {
      // Se estiver expandido, remova a classe expanded
      container.classList.remove('expanded');
    } else {
      // Se não estiver expandido, adicione a classe expanded
      container.classList.add('expanded');
    }
  });
});