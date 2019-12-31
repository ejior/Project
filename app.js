//return 範例

var outWear = 'T-shirt';
function myOutFit(){
    return outWear;
}

console.log(myOutFit()); // T-shirt

// boolean

function torf(isTrue){
    if(isTure){
        return "Yes, It's true";
    }
    return "No, it's false";
}

console.log(torf(true))// "yes, It's true"

// double confirm

function testing(val){
    /*if(val <= 50){
        if(val >= 25){
            return "Yes";
        }
    }*/

    if(val <= 50 && val >= 25){
        return "Yes";
    }
    return "No";
}

testing(48);