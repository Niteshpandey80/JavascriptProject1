var qrinput= document.querySelector("#qr-input");
var qrimg=document.querySelector("img");
var qrbutton=document.querySelector("button");

qrbutton.addEventListener("click", function(){
    var inputvalue = qrinput.value;
    console.log(inputvalue)
    if(!inputvalue){
        alert('Please Enter value')
    }
    else{
        qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
        qrimg.alt=`QR Code For ${inputvalue}`

    }
}) 