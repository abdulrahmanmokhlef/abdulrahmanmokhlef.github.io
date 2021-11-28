$(document).ready(function() {
 


    // Initialize and add the map
    function initMap() {
        // The location of Uluru
        const _center = { lat: 29.985495121178694, lng: 31.20663591744529 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 10,
          center: _center,
        });

        const branches = [
          ["Location1", 29.985495121178694, 31.20663591744529],
          ["location2", 29.92522150031286, 30.915514995357007],
          ["location3", 30.031704114197876, 31.509530844864127]
        ];

        

        for (let i = 0; i < branches.length; i++) {
          const branch = branches[i];

          new google.maps.Marker({
            position: { lat: branch[1], lng: branch[2] },
            map,
            title: branch[0],
          });
        }
        
      }

      initMap();
    

      send = function(){
        debugger
        $('#sendModal').modal('toggle');
    
        setInterval(function(){
          location.href="../index.html"
        },3000);
      }
});