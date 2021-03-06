
var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data &copy;'
}).addTo(map);

function onLocationFound(e) {
	var radius = e.accuracy * 2;

	L.marker(e.latlng).addTo(map).bindPopup("<b>Rohit Kumar Shaw</b><br/><i>Rating: 4.0</i><br/><a href='https://www.facebook.com/rohitimaginative' target='_blank'>Facebook</a><hr/><a class='btn btn-default' href=''>Follow</a><a class='btn btn-default' href=''>Ask book</a>").openPopup();
		//.bindPopup("You are within " + radius + " meters from this point").openPopup();

	L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
	alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({setView: true, maxZoom: 16});

$("nav").hover(
	function()
	{
		$(this).css("z-index","100");
	}
);

/*
$( '#review' ).bind( 'mousewheel DOMMouseScroll', function ( e ) {
    var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
    
    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
    e.preventDefault();
});*/