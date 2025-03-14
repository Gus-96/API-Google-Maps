O objetivo é fornecer uma forma interativa para que os clientes possam encontrar facilmente o endereço de uma loja através de um mapa incorporado na página web utilizando a API do Google Maps.

Você precisa de uma chave da API do Google Maps para usar a funcionalidade do mapa. 

Insira a chave no script dentro do arquivo HTML:

<script src="https://maps.googleapis.com/maps/api/js?key=SUA_CHAVE_AQUI&callback=initMap&libraries=&v=weekly" async></script>   
Ajuste a localização da loja: A localização da loja está definida com coordenadas de latitude e longitude:

var loja = { lat: -9.377649194766514, lng: -40.52676257910357 }; // Exemplo: localização da loja

Substitua as coordenadas de latitude e longitude pela localização da sua loja.

Certifique-se de que o JavaScript esteja ativado em seu navegador para visualizar o mapa corretamente.
