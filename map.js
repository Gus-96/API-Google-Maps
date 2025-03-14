function initMap() {
    // Define a localização da loja (exemplo: latitude e longitude)
    var loja = { lat: -9.377649194766514, lng: -40.52676257910357 }; // Exemplo: localização da loja

    // Cria o mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: loja
    });

    // Adiciona um marcador na localização da loja
    var marker = new google.maps.Marker({
        position: loja,
        map: map,
        title: 'Nossa Loja'
    });
}