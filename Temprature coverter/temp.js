console.log("script working..");

let celcius = document.getElementById('celcius');
let fahrenheit = document.getElementById('fahrenheit');
let result = document.getElementById('result');
let novalue = document.getElementById('novalue');
let nounit = document.getElementById('nounit');
let button = document.getElementById('Convert');


function tocelcius(temp){
    return(temp-32) * (5/9);

}

function tofahrenheit(temp){
    return temp * 9 / 5 + 32;
}
button.onclick = function(){
    let val = document.getElementById('value').value;
    let ans;

    novalue.innerHTML = "";
    nounit.innerHTML = "";

    if (val== ""){
        novalue.innerHTML = "*must provide a value";
    }
    val = Number(val);
    if(celcius.checked){
        ans = tocelcius(val).toLocaleString(undefined, {style: 'unit', unit:'celsius', minimumFractionDigits:2, maximumFractionDigits:2})
    } else if(fahrenheit.checked){
        ans = tofahrenheit(val).toLocaleString(undefined, {style: 'unit', unit:'fahrenheit', minimumFractionDigits:2, maximumFractionDigits:2})
    }else{
        nounit.innerHTML = "*must select a unit for convertion";
    }
     if(ans == undefined){
        result.innerHTML = "";
     }else {
        result.innerHTML = ans;
     }
   
}