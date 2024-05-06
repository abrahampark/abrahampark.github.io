//added code by Dr. Yang for checking button click event) START
var fired_button = 1;
$("button").click(function() {
    var fired_button = $(this).val();
    alert(fired_button);
    console.log (typeof(fired_button));
});

//added code by Dr. Yang for checking button click event) END



//added code by Dr. Yang for wrapping map code based on button click -- START
map_code_based_button_click(fired_button);

function map_code_based_button_click(fired_button_parameter){
    
    
    var map = L.map('map').setView([0, 0], 2.45);
    
    // Add OpenStreetMap base layer
    var streets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    


    function addPopups(feature, layer) {
        //this if statement is used to check whether the feature has a property named "Location"
        if (feature.properties && feature.properties["Volcano Name"] + feature.properties.Country + feature.properties.Type + 
        feature.properties["Elevation (m)"]) {
          layer.bindPopup("Name:" + " " + feature.properties["Volcano Name"] + "<br>" 
          + "Location:" + " " + feature.properties.Country + "<br>" + "Type:" + " " + feature.properties.Type + "<br>"
           + "Elevation" + " " + feature.properties["Elevation (m)"] + "m");
        }
      }




    function pointToImage(feature, latlng) {
        var imageUrl = "";
        var volcanoType = feature.properties["Type"];
    
        // Set fill color based on the "Type" property using if-else statements
        if (volcanoType === "Shield volcano") {
            imageUrl = "data/images/Icon_Type/orange.svg";
        } else if (volcanoType === "Fissure vent") {
            imageUrl = "data/images/Icon_Type/orange.svg";
        } else if (volcanoType === "Fissure vents") {
            imageUrl = "data/images/Icon_Type/orange.svg";
        } else if (volcanoType === "Shield volcanoes") {
            imageUrl = "data/images/Icon_Type/orange.svg";
        } else if (volcanoType === "Cinder cone") {
            imageUrl = "data/images/Icon_Type/grey.svg";
        } else if (volcanoType === "Scoria cone") {
            imageUrl = "data/images/Icon_Type/grey.svg";
        } else if (volcanoType === "Scoria cones") {
            imageUrl = "data/images/Icon_Type/grey.svg";
        } else if (volcanoType === "Cinder cones") {
            imageUrl = "data/images/Icon_Type/grey.svg";
        } else if (volcanoType === "Pyroclastic cones") {
            imageUrl = "data/images/Icon_Type/grey.svg";
        } else if (volcanoType === "Pyroclastic cone") {
            imageUrl = "data/images/Icon_Type/grey.svg";
        } else if (volcanoType === "Cone") {
            imageUrl = "data/images/Icon_Type/grey.svg";
        } else if (volcanoType === "Stratovolcano") {
            imageUrl = "data/images/Icon_Type/black.svg";
        } else if (volcanoType === "Stratovolcanoes") {
            imageUrl = "data/images/Icon_Type/black.svg";
        } else if (volcanoType === "Complex volcano") {
            imageUrl = "data/images/Icon_Type/black.svg";
        } else if (volcanoType === "Compound volcano") {
            imageUrl = "data/images/Icon_Type/black.svg";
        } else if (volcanoType === "Caldera") {
            imageUrl = "data/images/Icon_Type/red.svg";
        } else if (volcanoType === "Volcanic field") {
            imageUrl = "data/images/Icon_Type/yellow.svg";
        } else if (volcanoType === "Crater rows") {
            imageUrl = "data/images/Icon_Type/yellow.svg";
        } else if (volcanoType === "Submarine volcano") {
            imageUrl = "data/images/Icon_Type/blue.svg";
        } else if (volcanoType === "Submarine volcanoes") {
            imageUrl = "data/images/Icon_Type/blue.svg";
        } else if (volcanoType === "Submarine volcano?") {
            imageUrl = "data/images/Icon_Type/blue.svg";
        } else {
            imageUrl = "data/images/Icon_Type/green.svg";
        }
    
        var customIcon = L.icon({
            iconUrl: imageUrl,
            iconSize: [15, 15], // You can adjust the size of the image
        });
    
    
        // Create and return the marker with custom icon
        return L.marker(latlng, { icon: customIcon });
    }
    

    L.geoJSON(volcanodata, {
        onEachFeature: addPopups,
        pointToLayer: pointToImage,
      }).addTo(map);
    
    // When I added in the boundary similar to lab 3 it zoomed out way too much

}

//added code by Dr. Yang for wrapping map code based on button click -- END





/* old legend
var legend = L.control({position: 'bottomleft'});

legend.onAdd = function (map) {
  
    var div = L.DomUtil.create('div', 'info legend'),
        title = "Volcano Type"; 
        grades = ["Shield Volcano", "Cinder Cone", "Stratovolcano", "Caldera"],
        labels = [];

    div.innerHTML = '<h4>' + title + '</h4>';

    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<div class="legend ' + grades[i].toLowerCase() + '">' + grades[i] + '</div>';
    }

    return div;
};


legend.addTo(map);
*/




