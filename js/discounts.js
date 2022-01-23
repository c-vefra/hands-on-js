function calculatePriceDiscount(price,discount) {
    const percentajePriceDiscount = 100 - discount;
    const priceDiscount = (price * percentajePriceDiscount) / 100;

    return priceDiscount;
}

function calculatePriceBtn () {
    const inputPrice = document.getElementById("input-price").value;
    const inputDiscount = document.getElementById("input-discount").value;

    let discount = 0;
    let discountValidator = true;

    if (inputDiscount === "coupon10") {
        discount = 10;
    } else if (inputDiscount === "coupon15") {
        discount = 15;
    } else if (inputDiscount === "coupon20") {
        discount = 20;
    } else if (inputDiscount === "") {
        discount = 0;
    } else {
        alert("The coupon is not valid!!!");
        discountValidator = false;
    }

    const priceDiscount = calculatePriceDiscount(inputPrice,discount);
    const resultPrice = document.getElementById("final-price");

    if(discountValidator){
        resultPrice.innerText = `The final price is \$${priceDiscount}`;
    } else if (discountValidator === false) {
        resultPrice.innerText = `You do not have a discount. The price is \$${priceDiscount}`;
    }
}




// const coupons = [
//     {
//         name: "JuanDC_es_Batman",
//         discount: 15,
//     },
//     {
//         name: "pero_no_le_digas_a_nadie",
//         discount: 30,
//     },
//     {
//         name: "es_un_secreto",
//         discount: 25,
//     },
// ];

// function calcularPrecioConDescuento(price, discount){
//     const porcentajeDelPrecioConDescuento = 100 - discount;
//     const priceDiscount = (price * porcentajeDelPrecioConDescuento)/ 100;
  
//     return priceDiscount;
  
//   }

// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;
    
//     const inputCoupon = document.getElementById("inputCoupon");
//     const couponValue = inputCoupon.value;

//     const isCouponValueValid = function (coupon) {
//         return coupon.name === couponValue;
//     };

//     const userCoupon = coupons.find(isCouponValueValid);

//     if (!userCoupon) {
//         alert("El cupón " + couponValue + " no es válido");
//     } else {
//         const discount = userCoupon.discount;
//         const priceDiscount = calcularPrecioConDescuento(priceValue, discount);

//         const resultP = document.getElementById("ResultP");
//         resultP.innerText = "El price con discount son: $" + priceDiscount;
//     }

// }  