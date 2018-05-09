'use strict';


let hotelSearchModal = hotel => {

    clearInfoModalContent(contentParent);
    let content = `
        <div class="text-center">
            <p >In this place we have these hotels: <br><h4>${hotel}</h4></p>
            <input type="button" id="wanna-take-a-look" class="btn btn-primary" value="Wanna take a look"/>
        </div>`;


    $(contentParent).html(content);
    $('#wanna-take-a-look').click(()=> {
        window.location.href = "https://www.google.ru/maps";
    });
    $(infoParent).modal('show');


};


let bookNowModal = (userLocation, bookedFlight) => {

    $(infoParent).modal('show');
    bookNow(userLocation, bookedFlight);

};


let readMoreModal = ()=> {
    let btn = $('.read-more');

    $(btn).click(()=> {
        clearInfoModalContent(contentParent);
        $(contentParent).html(`<p>Lorem ipsum dolor sit
        amet, contur adip elit, sed do mod incid ut labore et dolore
         magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, contur adip elit,
          sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>`);

        $(infoParent).modal('show');
    });
};
let successAlert = str => {
    clearInfoModalContent(contentParent);
    $(contentParent).html(str).addClass('alert-success');
    $(infoParent).modal('show', {
        backdrop: true
    });
};
let subscribeModal = () => {
    let btn = $('#subscribe-btn');

    $(btn).click(()=> {
        let email = $('#subscribe-input').val();
        if (isEmail(email)) {
            successAlert(`Success! Thank you!`);
        } else {
            myAlert('Invalid email form filling!');
        }

    });

};


