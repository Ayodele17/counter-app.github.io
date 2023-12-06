// function price (){
//     document.write("the pribce of this product is yet indisclosable")
// }

// function price(income ,tax){
//     let price = income /tax;
//     document.write(price , "$")

// }
// let income = 150000 , tax = 150;

//     document.write(price(income,tax))


// function calc(){
//     let w = document.getElementById("width").value;
//     let h = document.getElementById("height").value;
//     let area = w * h 
//     document.getElementById("answer").value = area ;

// }


function dec(){
    let A = 0; A<=100; A--;
    document.getElementById("count").value = A ;
}
function res(){
    let B = 0 ;
    document.getElementById("count").value = B ;
    
}
function inc(){
    let C = C++;
    document.getElementById("count").value = C


}

let count = 0;
document.getElementById("dec").onclick = function(){
    count--;
    document.getElementById("count1").innerHTML = count
}
document.getElementById("res").onclick = function(){
    count = 0;
    document.getElementById("count1").innerHTML = count
}
document.getElementById("inc").onclick = function(){
    count++;
    document.getElementById("count1").innerHTML = count
}