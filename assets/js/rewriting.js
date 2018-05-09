'use strict';

$.ajax({
    url: "assets/data-tours.json"
}).done(response=> {
    tours = response;

    generateOptionsForObject(tours,$('#travel-locations-1'));
    generateOptionsForObject(tours,$('#travel-locations-2'));


});

$.ajax({
    url: "assets/data-amounts.json"
}).done(response=> {
    amounts = response;
    generateOptions(amounts,$('#buyers-amount'));
    generateOptions(amounts,$('#members-amount'));
    generateOptions(amounts,$('#hotel-duration-form'));

});
$.ajax({
    url: "assets/data-hotels.json"
}).done(response=> {
    hotels = response;

    tours.forEach((tour,hotelIndex)=>{
        tour.hotel=hotels[hotelIndex];
    });

    console.log(tours);
    //generateOptions(hotels,'#hotels-search');
    generateOptionsForObject(tours, $('#hotels-in-travel-location'));

});
$.ajax({
    url: "assets/data-classes.json"
}).done(response=> {
    flightClasses = response;
    generateOptions(flightClasses,$('#flight-classes'));

});