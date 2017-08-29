
//Details of each Markers locations
var markersDetails = [
   {
    title: "Belmont Forum",
    lat: -31.964942,
    lng: 115.934971,
    street: "227 Belmont Ave",
    city: "Perth WA 6105",
    icon: 'img/shopping.png',
    image : 'img/belmontForum.jpg'
    },
    {
    title: "Westfield Carousel",
    lat: -32.018745,
    lng: 115.937704,
    street: "1382 Albany Hwy",
    city: "Cannington WA 6107",
    icon: 'img/shopping.png',
    image: 'img/WC.jpg'
    },
    {
    title: "Watertown",
    lat: -31.946837,
    lng: 115.857156,
    street: "840 Wellington St",
    city: "West Perth WA 6005",
    icon: 'img/shopping.png',
    image: 'img/Watertown.jpg'
    },
    {
    title: "Forrest Chase",
    lat: -31.952569,
    lng: 115.859862,
    street: "200 Murray St",
    city: "Perth WA 6000",
    icon: 'img/shopping.png'  ,
    image: 'img/forrestChase.jpg'
    },
    {
    title: "South Shore Shopping Centre",
    lat: -31.972183,
    lng: 115.853241,
    street: "85 S Perth Esplanade",
    city: "South Perth WA 6151",
    icon: 'img/shopping.png',
    image: 'img/southShore.jpg'
    },
    {
    title: "Raine Square",
    lat: -31.951762,
    lng: 115.857156,
    street: "300 Murray St",
    city: "Perth WA 6000",
    icon: 'img/shopping.png',
    image: 'img/rs.jpg'
    },
    {
    title: "Republic of Coffee",
    lat: -31.933158,
    lng: 115.955737,
    street: "2 George Wiencke Dr",
    city: "Perth Airport WA 6105",
    icon: 'img/cafe.png',
    image : 'img/cafe1.jpg'
    },
    {
    title: "Sprolo",
    lat: -31.983008,
    lng: 115.875723,
    street: "138 Canning Hwy",
    city: "South Perth WA 6151",
    icon: 'img/cafe.png',
    image : 'img/cafe2.jpg'
    },
    {
    title: "Infinity Cafe",
    lat: -31.960324,
    lng: 115.872977,
    street: "111/131 Adelaide Terrace",
    city: "Perth WA 6000",
    icon: 'img/cafe.png',
    image : 'img/cafe3.jpg'
    },
    {
    title: "Cotta Cafe",
    lat: -31.961192,
    lng: 115.895344,
    street: "Crown Casino, Crown Perth, Great Eastern Highway",
    city: "Burswood WA 6100",
    icon: 'img/cafe.png',
    image : 'img/cafe4.jpg'
    },
    {
    title: "DuoTone",
    lat: -31.957547,
    lng: 115.869029,
    street: "313 Hay St",
    city: "East Perth WA 6004",
    icon: 'img/cafe.png',
    image : 'img/cafe5.jpg'
    },
    {
    title: "Dôme Café - Eastend",
    lat: -31.957557,
    lng: 115.865616,
    street: "1/256 Adelaide Terrace",
    city: "Perth WA 6000",
    icon: 'img/cafe.png',
    image : 'img/cafe6.jpg'
    },
    {
    title: "Quills",
    lat: -31.999980,
    lng: 115.984790,
    street: "338 Hale Rd",
    city: "Wattle Grove WA 6107",
    icon: 'img/restraunt.png',
    image : 'img/r1.jpg'
    },
    {
    title: "Rockpool Bar & Grill Perth",
    lat: -31.960310,
    lng: 115.894632,
    street: "Great Eastern Hwy",
    city: "Burswood WA 6100",
    icon: 'img/restraunt.png',
    image : 'img/r2.jpg'
    },
    {
    title: "Bistro Guillaume",
    lat: -31.960678,
    lng: 115.893713,
    street: "Great Eastern Highway",
    city: "Burswood WA 6100",
    icon: 'img/restraunt.png',
    image : 'img/r3.jpg'
    },
    {
    title: "Epicurean Crown Towers",
    lat: -31.959476,
    lng: 115.893542,
    street: "Great Eastern Highway",
    city: "Burswood WA 6100",
    icon: 'img/restraunt.png',
    image : 'img/r4.jpg'
    },
    {
    title: "Blackbird Restaurant",
    lat: -31.952729,
    lng: 115.876747,
    street: "4/10 Eastbrook Terrace",
    city: "East Perth WA 6004",
    icon: 'img/restraunt.png',
    image : 'img/r5.jpg'
    },
    {
    title: "Friends Restaurant",
    lat: -31.961938,
    lng: 115.873356,
    street: "20 Terrace Rd",
    city: "Perth WA 6000",
    icon: 'img/restraunt.png',
    image : 'img/r6.jpg'
    },
    {
    title: "The Boatshed Restaurant",
    lat: -31.974792,
    lng: 115.864636,
    street: "Coode St",
    city: "South Perth WA 6151",
    icon: 'img/restraunt.png',
    image : 'img/r7.jpg'
    }
];

    //Declairing Variables Globally
    var map;
    var marker;
    var infoWindow;

    //Function to display the Map
    function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: -31.950527,  lng: 115.860457}
    });

    //Activating Knockout
    ko.applyBindings(new viewModel());
    }

    //Function for creating the markers,Infowindow
   var locations = function(data) {
        var self = this;
        this.title = data.title;
        this.street = data.street;
        this.city = data.city;
        this.icon = data.icon;
        this.image = data.image;
        this.streetAddress = "";
        this.cityAddress = "";
        this.url = "";

        this.visible = ko.observable(true);
     
        // Foursquare url for retrieving information for each location
        var foursquareUrl = 'https://api.foursquare.com/v2/venues/search?ll='+ this.lat + ',' + this.lng + '&client_id=MAJZT4I1HA3H1BOEWRYF5AD23MSHCXITATK2UE2VS4VLB2P2&client_secret=MLCP202QHAFGSVXBVYAJZPW0RPNHHUCJ4UXR4WTW3DZXB5HM&v=20171224' + '&query=' + this.title;
        
        //Ajax Request for getting data Asynchronously
        $.ajax({
            url: foursquareUrl,
            method: 'GET',
            dataType: 'json',
            //If AJAX request completes succesfully following function runs
            success: function(info){
                    var result = info.response.venues[0];
                    self.streetAddress = result.location.formattedAddress[0];
                    self.cityAddress = result.location.formattedAddress[1];
                    self.url = result.url;
                },
            //If AJAX request fails an alert is generated
            error: function(){
                    alert("Error Loading Foursquare Data.Please try Again");
                }
        });
            //Creating Marker for each location
            this.marker = new google.maps.Marker({
                position: new google.maps.LatLng(data.lat, data.lng),
                map: map,
                title: this.title,
                icon: this.icon,
                animation: google.maps.Animation.DROP
            });

            //Creating InfoWindow for Each marker
            this.infoWindow = new google.maps.InfoWindow({
                content: self.infoWindowContent,
                maxWidth: 200
            });

            //Creating a Content String that will be displayed on the infoWindow 
            this.infoWindowContent = '<img src="' + self.image + '" alt="Image of ' + self.title + '"><br><hr><strong>' + 
                                        self.title + '</strong><br><p>' + 
                                        self.streetAddress + '<br>' + 
                                        self.cityAddress + '<br></p><a href=' + self.url + 
                                        ' target="_blank">' + self.url + '</a>';

            //clickEventListener For Each Marker
            this.marker.addListener('click', function(){
                self.infoWindowContent = '<img src="' + self.image + '" alt="Image of ' + self.title + '"><br><hr><strong>' + 
                                            self.title + '</strong><br><p>' + 
                                            self.streetAddress + '<br>' + 
                                            self.cityAddress + '<br></p><a href="http://' + self.url + 
                                            '" target="_blank">' + self.url + '</a>';


                self.infoWindow.setContent(self.infoWindowContent);
                self.infoWindow.open(map, self.marker);
                map.setCenter(this.getPosition());
                map.setZoom(18);
                self.marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function() {
                    self.marker.setAnimation(null);
                }, 3200);               
            });

            this.showInfoWindow = function(locations){
                google.maps.event.trigger(self.marker,'click');
            };

            //Displays the Markers on map that are present in the Refined list
            this.displayListMarkers = ko.computed(function() {
                if(this.visible() != true) {
                    this.marker.setMap(null);
                } else {
                    this.marker.setMap(map);
                }
                return true;
            }, this);

}
    //ViewModel for the program
    function viewModel() {
        var self = this;
        this.searchInput = ko.observable("");
        this.refineList = ko.observableArray([]);

        markersDetails.forEach(function(searchItem){
            self.refineList.push( new locations(searchItem));
        });

        this.refinedSearchList = ko.computed( function() {
            var refine = self.searchInput().toLowerCase();
            if (!refine) {
                self.refineList().forEach(function(searchItem){
                    searchItem.visible(true);
                });
                return self.refineList();
            } else {
                return ko.utils.arrayFilter(self.refineList(), function(searchItem) {
                    var searchstring = searchItem.title.toLowerCase();
                    var results = (searchstring.search(refine) > -1);
                    searchItem.visible(results);
                    return results;
                });
            }
        }, self)
   }

    //Function to Reset the Map.
        function resetMap() {
            var screenWidth = $(window).width();
            if(screenWidth >= 1000) {
                map.setCenter(map.center);
                map.setZoom(12);
            } else if(screenWidth < 1000) {
                map.setCenter(map.center);   
                map.setZoom(10);
            }
        }

    //Resets the screen When resetZoom button is clicked.
     $("#resetZoom").click(function() {
            resetMap();
        });

     //If Google Maps fails to load,An alert is displayed
     function error(){
        alert("Problem Loading Google Maps. Please try again");
     }
