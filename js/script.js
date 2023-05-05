///console.log("ola mundo ");

//var nr1 = "10";
//var nr2 = "5";


//Realizando operaçoes com  strings;
//console.log(parseInt(nr1)+parseInt(nr2));

//var nome1 ="lukinha";
//let nome2 = "gustavo";
//const nome3 = "melin";
//var nome4 ="iguin"

//if(nome1 != ""){
   // let nome1 ="aaaaaaaaaaa"
//}

//console.log(nome1);

//diferença entre var e let

const btn = document.getElementById("meu-btn");
//console.log(btn.id);
btn.addEventListener("click", function(){
    //console.log(this.textContent);
    let r=0, g=0, b=0;
    r = Math.round(Math.random() *255);
    g = Math.round(Math.random() *255);
    b = Math.round(Math.random() *255);
    this.setAttribute("style", `background-color:rgb(${r},${g},${b};`);
})