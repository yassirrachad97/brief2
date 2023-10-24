var btn_menu=document.getElementById("buttonMenu");
var menu=document.getElementById("composants-menu");
var qteProduct = document.querySelectorAll(".nombreProduit");
 var price = document.querySelectorAll(".carats p");
 var totalprice = document.querySelectorAll(".total_prix_prod");
 var totalgeneral = document.getElementById("total_general");
btn_menu.addEventListener("click",()=>{
    if(menu.style.display==="block") menu.style.display="none";
    else if(menu.style.display==="none") menu.style.display="block";
});

    function calculerTotalProduit(quantite, prix) {
        return quantite * prix;
    }

    for (var i = 0; i < qteProduct.length; i++) {
        qteProduct[i].addEventListener("input", function (event) {
            calculerTotalGeneral();
        });
    }
    let produit=document.getElementsByClassName("produit");
    delet1.addEventListener("click",()=>{
       produit[0].style.display="none";
       calculerTotalGeneral();
    })
    delet2.addEventListener("click",()=>{
        produit[1].style.display="none";
        calculerTotalGeneral();
     })
     delet3.addEventListener("click",()=>{
        produit[2].style.display="none";
        calculerTotalGeneral(); 
     })

     function calculerTotalGeneral() {
        var total = 0;
        for (var i = 0; i < qteProduct.length; i++) {
            if(produit[i].style.display!="none"){
            var quantite = parseInt(qteProduct[i].value);
            var prix = parseFloat(price[i].innerHTML);
            var totalProduit = calculerTotalProduit(quantite, prix);
            totalprice[i].innerHTML = totalProduit;
            total += totalProduit;

            }
            
        }
        totalgeneral.innerHTML = total+".00$";
    }
   
function validationEmail(email)
{}

