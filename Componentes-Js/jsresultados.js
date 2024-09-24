// resultados.html
window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('query');
  // Aqui você pode usar o 'query' para buscar resultados ou exibi-los na página
  document.getElementById('result-message').textContent = `Resultados para: ${query}`;
};
