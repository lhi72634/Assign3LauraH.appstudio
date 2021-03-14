/*
let boutiqueProducts = ["Crocheted Dog Toy $10.00", "Slow Feeder Bowl $14.00", "Pawz Grey Treat Jar $20.00", "Blue Sweet Dreams Thermal Pajamas $30.00", "Checker Chewy Vuiton Bowl $32.00", "Red Heart Sweater Dress $27.00", "Velvet Hair Bow - Sun Kissed $12.00", "Into the Wild Leash $27.00"]
let wishList = []

btnProductList.onclick=function(){
  lblProductList.value = boutiqueProducts
}

btnAdd.onclick = function() {
    let product = inptProduct.value
    i = boutiqueProducts.includes(product)
    if (i == true)
        wishList.push(product)
        lblProducts.value = "The product has been added to your Wish List."
    if (i == false)
        lblProducts.value = "Make sure the product is in the list."
}

btnSeeList.onclick = function() {
    lblProducts.value = wishList
}
*/