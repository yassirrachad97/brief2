var btn_menu=document.getElementById("buttonMenu");
var menu=document.getElementById("composants-menu");
btn_menu.addEventListener("click",()=>{
    if(menu.style.display==="block") menu.style.display="none";
    else if(menu.style.display==="none") menu.style.display="block";
});
var qteProduct = document.querySelectorAll(".nombreProduit");
    var price = document.querySelectorAll(".carats p");
    var totalprice = document.querySelectorAll(".total_prix_prod");
    var totalgeneral = document.getElementById("total_general");

    function calculerTotalProduit(quantite, prix) {
        return quantite * prix;
    }

    function calculerTotalGeneral() {
        var total = 0;
        for (var i = 0; i < qteProduct.length; i++) {
            var quantite = parseInt(qteProduct[i].value);
            var prix = parseFloat(price[i].textContent);
            var totalProduit = calculerTotalProduit(quantite, prix);
            totalprice[i].textContent = totalProduit;
            total += totalProduit;
        }
        totalgeneral.textContent = total;
    }

    calculerTotalGeneral();

    for (var i = 0; i < qteProduct.length; i++) {
        qteProduct[i].addEventListener("input", function (event) {
            calculerTotalGeneral();
        });
    }
    delet1.addEventListener("click",()=>{
        document.getElementById("pro1").style.display="none";
    })

