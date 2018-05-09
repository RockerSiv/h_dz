'use strict';
let validationsForHotels = (destination, membersAmount) => {
    return checkOptionValue(membersAmount) && checkOptionValue(destination);
};

let validationsForFlights = (buyersAmount, fromLocation, toLocation, flightClass) => {
    return checkOptionValue(buyersAmount) && checkOptionValue(toLocation) && checkOptionValue(fromLocation) && checkOptionValue(flightClass) && isSimilar(fromLocation, toLocation);
};

let validationsForBookForm = (name, age, phoneNumber) => {
    return isName(name) && isAge(age) && isAdult(age) && isPhoneNumber(phoneNumber);
};
let isName = name => {
    console.log(name);
    let pattern = /^[a-zA-Z ]+$/;
    return pattern.test(name);
};

let isAdult = age =>{
  if( age>=18){
      return age;
  }else{
      myAlert('You are too young');
      return false;
  }
};

let isAge = age => {
    //0954706025
    console.log(age);
    let pattern = /^\S[0-9]{0,3}$/;
    return pattern.test(age);
};
let isPhoneNumber = phoneNumber => {
    console.log(phoneNumber);
    let pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return pattern.test(phoneNumber);
};

let isEmail = email => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
};


let checkOptionValue = value => {
    console.log(value);
    if (value !== 'default') {
        return value;
    } else {
        myAlert('Invalid form filling');
        console.log('invalid option value');
        return false;
    }
};

let isSimilar = (yourLocation, destinationLocation) => {
    if (yourLocation === destinationLocation) {
        myAlert('Your location and your destination location can\'t be the one places');
        console.log('Your location and destination location can\'t be the one place');
        return false;
    } else {
        return true;
    }
};

