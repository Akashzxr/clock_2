
setInterval(all_function,1000);


function all_function(){
    const d = new Date();

    let minutes = d.getMinutes();
    let hours = d.getHours();
    let seconds = d.getSeconds();
    

    var mdegree = minutes * 6;
    var sdegree = seconds * 6;
    var hdegree = hours * 30;

    document.getElementById('second-arrow').style.transform = "rotate("+sdegree+"deg)";
    document.getElementById('minute-arrow').style.transform = "rotate("+mdegree+"deg)";
    document.getElementById('hour-arrow').style.transform = "rotate("+hdegree+"deg)";
}

var A;

A = "this is String"; //giving a string to the variable
console.log("A=",A);

A = 10;              //giving a number to the varaiable
console.log("A=",A)


A = true;           //giving boolean to the variable
console.log("A=",A)