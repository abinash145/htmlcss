var button=document.querySelectorAll("button");
var display1=document.querySelector(".display1");
var display2=document.querySelector(".display2");
var display3=document.querySelector(".display3");

// a is used for saving data 1
var a=0;
var b;
var data1=" ";
var d;

var sign=0;

function data(a){
   
    data1=data1+a;
    console.log(data1);
}

button.forEach(element => {
    element.addEventListener("click",()=>{
        display1.append(element.value);
        display2.append(element.value);
        data(element.value);
        
        
    });
});

// CLEAR
button[16].addEventListener("click",()=>{
    
    display1.innerText="";
    display2.innerText="";
    display3.innerText="";
    a=0;
    data1=0;
    d=0;
   
})

//DELETE
button[3].addEventListener("click",()=>{
    display2.innerText=data1.substring(0, data1.length - 1);
    data1=display2.innerText;
    display1.innerText=data1;
})



// ADD
button[7].addEventListener("click",()=>{
    var c="+";
    sign=0;
    a=a+parseInt(data1);
    display1.append(c);
    data1=0;
    display3.innerText=a;
    display2.innerText="";    
   
})



//SUBTRACT

button[11].addEventListener("click",()=>{
    var c="-";
    sign=1;
    a=a+parseInt(data1);
    display1.append(c);
    data1=0;
    display3.innerText=a;
    display2.innerText="";    
   
})

//MULTIPLY
button[15].addEventListener("click",()=>{
    var c="×";
    sign=2;
    a=a+parseInt(data1);
    display1.append(c);
    data1=0;
    display3.innerText=a;
    display2.innerText="";    
   
})

//DIVIDE
button[14].addEventListener("click",()=>{  
    var c="/";

    sign=3;
    a=a+parseInt(data1);
    display1.append(c);
    data1=0;
    display3.innerText=a;
    display2.innerText="";
        
   
})



// EQUALTO
button[17].addEventListener("click",()=>{
    b=data1;

    switch (sign) {
        case 0:
            d=parseInt(a)+parseInt(b);
          break;
        case 1:
            d=parseInt(a)-parseInt(b);
          break;
        case 2:
           d=parseInt(a)*parseInt(b);
          break;
        case 3:
         d=parseInt(a)/parseInt(b);;
          break;
       

    }

    
    display3.innerText="";
    display2.innerText=d;
    a=d;
    data1=0;

   
})




