'use strict';
let infoParent = $('#info-modal');
let contentParent = $('#info-modal-body');

let clearInfoModalContent = area => {
    area.empty();
    area.removeClass('alert-success alert-danger');
};

let myAlert = (str) => {

    clearInfoModalContent(contentParent);
    $(contentParent).html(str).addClass('alert-danger');
    $(infoParent).modal('show');
};

let bookNow = (userLocation,bookedFlight) => {
    clearInfoModalContent($(contentParent));
    let form = `
  <form id="book-form">
  <div>
        <label for="client-name">Type your name<input type="text" id="client-name" placeholder="Name" class="form-control"></label>
    </div>
     <div>
        <label for="client-age">Type your age<input type="text" id="client-age" placeholder="Age" class="form-control"></label>
    </div>
     <div>
        <label for="client-phone">Type your phone number<input type="text" id="client-phone" placeholder="Phone number" class="form-control"></label>
    </div>

     <div>
        <input type="button" id="form-book-now-btn" class="btn btn-primary" value="Book now!">
    </div>
  </form>`;
    $(contentParent).append(form);

    //
    $('#form-book-now-btn').click(()=> {
        let name = $('#client-name').val();
        let age = $('#client-age').val();
        let phoneNumber = $('#client-phone').val();


        if (validationsForBookForm(name, age, phoneNumber)) {
            console.log('success');
            if(userLocation!==undefined || bookedFlight!==undefined){
                successAlert(`Success! Thank you! Flight from the <h5>${userLocation}</h5> to the <h5>${bookedFlight}</h5> have been booked`);
            }else{
                successAlert(`Success! Thank you! Flight have been booked`);
            }

        } else {
            console.log('error');
            myAlert('Invalid form filling!');
        }
    });

};

let generateOptions = (arr, parent) => {
    arr.forEach((element)=> {
        let optionBlock = $('<option/>', {
            value: element
        }).html(element);
        parent.append(optionBlock);
    })
};

let generateOptionsForObject = (arr, parent) => {
    for (let index = 0; index < arr.length; index++) {
        let optionBlock = $('<option/>', {
            value: arr[index]["city"]
        }).html(`${arr[index]["city"]}[${arr[index]["country"]}]`);
        parent.append(optionBlock);
    }
};


let myModals = () => {
    $('.book-now').click(()=> {
        bookNowModal();
    });
    readMoreModal();
    subscribeModal();
};

let hotelSearch = () => {
    let members = $('#members-amount').val();
    let destination = $('#hotels-in-travel-location').val();

    if (validationsForHotels(destination, members)) {
        console.log('success');
        let index = _.findIndex(tours, {'city': destination});
        hotelSearchModal(tours[index].hotel);
    } else {
        console.log('error');
    }

};
let flightSearch = () => {
    let buyers = $('#buyers-amount').val();
    let fromLocation = $('#travel-locations-1').val();
    let toLocation = $('#travel-locations-2').val();
    let flightClass = $('#flight-classes').val();

    if (validationsForFlights(buyers, fromLocation, toLocation, flightClass)) {
        console.log('success');

        bookNowModal(fromLocation,toLocation);

        // hotelSearchModal(tours[].hotel);
    } else {
        console.log('error');
    }

};

