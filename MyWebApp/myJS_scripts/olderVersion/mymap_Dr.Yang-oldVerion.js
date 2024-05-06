var map = L.map('map').setView([0, 0], 2.45);

// Add OpenStreetMap base layer
var streets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



//Dr Yang add code START

////////////////////	
var vocalno_data;


//Initial Setup  with layer Verified No
vocalno_data = L.geoJson(null, {

        pointToLayer: pointToImage,  
		onEachFeature: function (feature, layer) {
			layer.bindPopup(feature.properties.Type);
		},
        // filter: function(feature, layer) {   
        //      return (feature.properties.Verified == "XXX" );
        // },

    }); 	
	
     $.getJSON(volcanodata, function(data) {
        vocalno_data.addData(data);
    });
//Dr. Yagn add code END


function addPopups(feature, layer) {
    //this if statement is used to check whether the feature has a property named "Location"
    if (feature.properties && feature.properties["Volcano Name"] + feature.properties.Country + feature.properties.Type + feature.properties["Elevation (m)"]) {
      layer.bindPopup("Name:" + " " + feature.properties["Volcano Name"] + "<br>" 
      + "Location:" + " " + feature.properties.Country + "<br>" + "Type:" + " " + feature.properties.Type + "<br>"
       + "Elevation" + " " + feature.properties["Elevation (m)"] + "m");
       // Dr. Yang suggestion to add the Status column in the popup.
       // Dr. Yang suggests make the popup key, like "Name" etc in bold.
    }
  }

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

var fired_button = 1;
$("button").click(function() {
    var fired_button = $(this).val();
    alert(fired_button);
    console.log (typeof(fired_button));
});


//define a global variable to hold volcanoType value. // added by Dr. Yang
var volcanoType = ""; 

//Dr. Yang added function for adding icon images for "Type"
function Type_image_icons ()
{
    // Set fill color based on the "Type" property using if-else statements
    if (volcanoType === "Shield volcano") {
        imageUrl = "data/orange.svg";
    } else if (volcanoType === "Fissure vent") {
        imageUrl = "data/orange.svg";
    } else if (volcanoType === "Fissure vents") {
        imageUrl = "data/orange.svg";
    } else if (volcanoType === "Shield volcanoes") {
        imageUrl = "data/orange.svg";
    } else if (volcanoType === "Cinder cone") {
        imageUrl = "data/grey.svg";
    } else if (volcanoType === "Scoria cone") {
        imageUrl = "data/grey.svg";
    } else if (volcanoType === "Scoria cones") {
        imageUrl = "data/grey.svg";
    } else if (volcanoType === "Cinder cones") {
        imageUrl = "data/grey.svg";
    } else if (volcanoType === "Pyroclastic cones") {
        imageUrl = "data/grey.svg";
    } else if (volcanoType === "Pyroclastic cone") {
        imageUrl = "data/grey.svg";
    } else if (volcanoType === "Cone") {
        imageUrl = "data/grey.svg";
    } else if (volcanoType === "Stratovolcano") {
        imageUrl = "data/black.svg";
    } else if (volcanoType === "Stratovolcanoes") {
        imageUrl = "data/black.svg";
    } else if (volcanoType === "Complex volcano") {
        imageUrl = "data/black.svg";
    } else if (volcanoType === "Compound volcano") {
        imageUrl = "data/black.svg";
    } else if (volcanoType === "Caldera") {
        imageUrl = "data/red.svg";
    } else if (volcanoType === "Volcanic field") {
        imageUrl = "data/yellow.svg";
    } else if (volcanoType === "Crater rows") {
        imageUrl = "data/yellow.svg";
    } else if (volcanoType === "Submarine volcano") {
        imageUrl = "data/blue.svg";
    } else if (volcanoType === "Submarine volcanoes") {
        imageUrl = "data/blue.svg";
    } else if (volcanoType === "Submarine volcano?") {
        imageUrl = "data/blue.svg";
    } else {
        imageUrl = "data/green.svg";
    }



    //Dr. Yang added function for adding icon images for "Status" map
function Status_image_icons ()
{
     // Set fill color based on the "Type" property using if-else statements
     if (volcanoStatus === "Historical") {
        imageUrl = "data/red.svg";
    } else if (volcanoStatus === "Holocene") {
        imageUrl = "data/black.svg";
    } else if (volcanoStatus === "Radiocarbon") {
        imageUrl = "data/orange.svg";
    } else if (volcanoStatus === "Fumarolic") {
        imageUrl = "data/yellow.svg";
    } else if (volcanoStatus === "Uncertain") {
        imageUrl = "data/grey.svg";
    } else {
        imageUrl = "data/green.svg";
    }
}


//Dr. Yang added function for adding icon images for "Elevation" map
function Elevation_image_icons ()
{
    // Set fill color based on the "Type" property using if-else statements
    if (Number(feature.properties["Elevation (m)"]) >= 5000) {
        imageUrl = "data/black.svg";
    } else if (Number(feature.properties["Elevation (m)"]) >= 2500 && Number(feature.properties["Elevation (m)"] <5000)) {
        imageUrl = "data/dark.svg";
    } else if (Number(feature.properties["Elevation (m)"]) >= 1000 && Number(feature.properties["Elevation (m)"] <2500)) {
        imageUrl = "data/grey.svg";
    } else if (Number(feature.properties["Elevation (m)"]) >= 0 && Number(feature.properties["Elevation (m)"] <1000)) {
        imageUrl = "data/light.svg";
    } else {
        imageUrl = "data/white.svg";
    }
}

    var customIcon = L.icon({
        iconUrl: imageUrl,
        iconSize: [15, 15], // You can adjust the size of the image
    });


    // Create and return the marker with custom icon
    return my_curent_VolcanodataData = L.marker(latlng, { icon: customIcon });

    



} 




//Initial Setup  with Vocalno Type  // Dr. Yang added




//END Initial Setup  with Vocalno Type  // Dr. Yang added


//Using a Layer Group to add/ remove data from the map.
// var myVolcanodataData =  L.layerGroup([]);
// myVolcanodataData.addLayer(volcanodata);// this volcanodata is the variable via .js file that Abe created.
// myVolcanodataData.addTo(map); 









function pointToImage(feature, latlng) {//Dr. Yang added
    var imageUrl = "";


    if (Number(fired_button) == 1) // Dr. Yang added for Type button
    { 

        // myVolcanodataData.clearLayers(); // Dr. Yang added to remove current map before redraw
		// map.removeLayer(myVolcanodataData); // Dr. Yang added to remove current map before redraw

        var  volcanoType = feature.properties["Type"];
        console.log("volcanoType: ", volcanoType);

           Type_image_icons();

            // Set fill color based on the "Type" property using if-else statements
        // if (volcanoType === "Shield volcano") {
        //     imageUrl = "data/orange.svg";
        // } else if (volcanoType === "Fissure vent") {
        //     imageUrl = "data/orange.svg";
        // } else if (volcanoType === "Fissure vents") {
        //     imageUrl = "data/orange.svg";
        // } else if (volcanoType === "Shield volcanoes") {
        //     imageUrl = "data/orange.svg";
        // } else if (volcanoType === "Cinder cone") {
        //     imageUrl = "data/grey.svg";
        // } else if (volcanoType === "Scoria cone") {
        //     imageUrl = "data/grey.svg";
        // } else if (volcanoType === "Scoria cones") {
        //     imageUrl = "data/grey.svg";
        // } else if (volcanoType === "Cinder cones") {
        //     imageUrl = "data/grey.svg";
        // } else if (volcanoType === "Pyroclastic cones") {
        //     imageUrl = "data/grey.svg";
        // } else if (volcanoType === "Pyroclastic cone") {
        //     imageUrl = "data/grey.svg";
        // } else if (volcanoType === "Cone") {
        //     imageUrl = "data/grey.svg";
        // } else if (volcanoType === "Stratovolcano") {
        //     imageUrl = "data/black.svg";
        // } else if (volcanoType === "Stratovolcanoes") {
        //     imageUrl = "data/black.svg";
        // } else if (volcanoType === "Complex volcano") {
        //     imageUrl = "data/black.svg";
        // } else if (volcanoType === "Compound volcano") {
        //     imageUrl = "data/black.svg";
        // } else if (volcanoType === "Caldera") {
        //     imageUrl = "data/red.svg";
        // } else if (volcanoType === "Volcanic field") {
        //     imageUrl = "data/yellow.svg";
        // } else if (volcanoType === "Crater rows") {
        //     imageUrl = "data/yellow.svg";
        // } else if (volcanoType === "Submarine volcano") {
        //     imageUrl = "data/blue.svg";
        // } else if (volcanoType === "Submarine volcanoes") {
        //     imageUrl = "data/blue.svg";
        // } else if (volcanoType === "Submarine volcano?") {
        //     imageUrl = "data/blue.svg";
        // } else {
        //     imageUrl = "data/green.svg";
        // }

    }

    else if (Number(fired_button == 2) ) // Dr. Yang added for Status button 
      {
        // {var volcanoStatus = feature.properties["Staus"]; // Dr. Yang added

        // need to add remove existingg map function. before draw the map again.

        // myVolcanodataData.clearLayers(); // Dr. Yang added to remove current map before redraw
		// map.removeLayer(myVolcanodataData); // Dr. Yang added to remove current map before redraw

    

        var volcanoType = feature.properties["Type"];// Abe, change this part to Status and then create the image url for Status just like you did for the Type properti above

            // Set fill color based on the "Type" property using if-else statements
        if (volcanoType === "Shield volcano") {
            imageUrl = "data/orange.svg";
        } else if (volcanoType === "Fissure vent") {
            imageUrl = "data/orange.svg";
        
        } else {
            imageUrl = "data/green.svg";
        }
    }


    // var customIcon = L.icon({
    //     iconUrl: imageUrl,
    //     iconSize: [15, 15], // You can adjust the size of the image
    // });


    // // Create and return the marker with custom icon
    // return my_curent_VolcanodataData = L.marker(latlng, { icon: customIcon });

    // myVolcanodataData.addLayer(my_curent_VolcanodataData);
    // myVolcanodataData.addTo(map);;
}



// L.geoJSON(volcanodata, {
L.geoJSON(volcanodata, {
    onEachFeature: addPopups,
    pointToLayer: pointToImage,
  }).addTo(map);

// When I added in the boundary similar to lab 3 it zoomed out way too much

