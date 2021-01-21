//kilometer to meter converter.
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

//budget calculator
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

//hotel Cost calculator
function hotelCost(days){
var cost = 0;
if( days <= 10 ){
cost = days * 100;
}
else if( days <=20 ){
    var firstPart= 10 * 100;
    var remaining = days - 10;
    var secondPart = remaining * 80;
    cost = firstPart + secondPart;
}
else{
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remaining = days - 20;
    var thirdPart = remaining * 50;
    cost = firstPart + secondPart + thirdPart;
}
return cost;
}
var hotel = hotelCost(28);
console.log(hotel);