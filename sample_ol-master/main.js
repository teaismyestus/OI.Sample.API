var _Map, _Draw, _Source, _Layer;
var cords;



InitializeMap = () => {

    _Source = new ol.source.Vector({ wrapX: false });

    _Layer = new ol.layer.Vector({
        source: _Source,
    });

    _Map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            }),
            _Layer
        ],
        view: new ol.View({
            center: [3875337.272593909, 4673762.797695817],
            zoom: 7
        })
    });
}

AddInteraction = () => {

    _Draw = new ol.interaction.Draw({
        source: _Source,
        type: "Point"
    });

    _Map.addInteraction(_Draw);

    _Draw.setActive(false);

    _Draw.on(
        "drawend",
        (_event) => {

            console.log(_event.feature.getGeometry().getCoordinates());
            
            this.cords = _event.feature.getGeometry().getCoordinates();
            console.log(this.cords);
            localStorage.setItem('cords', cords);

            _Draw.setActive(false);
            this.openForm();
        });
}

AddPoint = () => {

    _Draw.setActive(true);
    
}

function openForm() {
    document.body.classList.add("showLoginForm");
  }
  
  function closeForm() {
    document.body.classList.remove("showLoginForm");
  }

  

  