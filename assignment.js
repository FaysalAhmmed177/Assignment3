// https://github.com/FaysalAhmmed177/Assignment3

//1st Problem - Kilometer to meter converter.
function kilometerToMeter(kilometer) {

    //Firstly,check if the number is negative one then return an error message
    if (kilometer < 0) {
        return "Input Error: Negative input is not acceptable.Please try with positive one."
    }

    //If the number is not negative then it convert kilometer to meter
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}

var result = kilometerToMeter(100);
console.log(result);

//2nd Problem - Budget calculator
function budgetCalculator(watch, phone, laptop) {

    //Check if value is less than 0 then show an error message.
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Negative value isn't acceptable.Try with positive number."
    }
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
}

var cost = budgetCalculator(0, 2, 5);
console.log(cost);

//3rd Problem - Hotel Cost calculator
function hotelCost(days) {
    var cost = 0;
    if (days < 0) {
        return "Negative days isn't possible.Please try with positive number."
    }

    if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var hotel = hotelCost(-1);
console.log(hotel);

//4th Problem - Find mega friend name
function megaFriend(names) {
    var elementLength = names[0].length;
    var position = 0
    for (var i = 1; i < names.length; i++) {


        if (elementLength < names[i].length) {
            elementLength = names[i].length;
            position = i;
        }
    }

    return names[position];
}
var names = ["Anik", "Mahmudul", "Mushfiqa", "Sakib", "Riyad", "Robin"];
var f = megaFriend(names);
console.log(f);