$(document).ready(function() {
 

  $('.owl-carousel').owlCarousel({
        margin: 10,
        loop:true,
        nav: false,
        rtl:true,
        responsive:{
            0:{
                items:1
            }
        }
    })


    // Initialize and add the map
    function initMap() {
        debugger
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
    


    activeTabInSpecificPage = function(tab, page){
      localStorage.setItem('tab', tab);
      window.location.replace('../pages/' + page);
    };

    addToCart = function(){
      
      var itemsInCart = localStorage.getItem('itemsIncart');
      var prevCount = itemsInCart == null? 1 : Number(itemsInCart) + 1;
      localStorage.setItem('itemsIncart', prevCount);
      var currentCount = localStorage.getItem('itemsIncart');

      if(currentCount > 0){
        $('#lblCartCount').addClass('showCart');
        $('#lblCartCount').innerHtml = Number(currentCount);
      }
       
      activeTabInSpecificPage('apply', 'buy-visit-permit.html')

    }

});