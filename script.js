function NUM() {
    
    let a = +document.querySelector("#table").value;
          document.querySelector("#output").innerHTML="";
    for (let b = 1;  b <= 10; b++) {
       document.querySelector("#output").innerHTML +=`<h2>${a} x ${b} = ${a*b}</h2>`;
       
    }
}