const form = document.getElementById("formulaire");
var nom =document.getElementById("nomuser");
 var prenom= document.getElementById("prenom");
 var cardNumbr=document.getElementById("cardNumbr");
 var expert=document.getElementById("expert");
 var email=document.getElementById("email");
 form.addEventListener("submit",(event)=>{
    if (/[0-9]+$/.test(nom.value)) {
        alert(" enter a valid name ");
        
    }
    if (/[0-9]+$/.test(prenom.value)) {
        alert(" enter a valid prenom ");
       
    }
    if (/^[a-zA-Z]+$/.test(cardNumbr.value)) {
        alert(" enter a valid  card number");
        
    }
    if ( !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)) {
        alert(" enter a valid email");
        
    }
    event.preventDefault();
    
 })
 