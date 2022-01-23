// Square code
function perimeterSquare (side) {
    // console.log(side * 4)
    return side * 4;
}

function areaSquare (side) {
    return side * side;
}

// Triangle code
function perimeterTriangle (side1,side2,base) {
    return side1 + side2 + base;
}

function areaTriangle (base,height) {
    return (base * height) / 2;
}

function heightTriangle (side,base) {
    return Math.sqrt((side * side) - ((base * base) / 4));
}

// Circle code
const PI = Math.PI;

function diameterCircle (radio) {
    return radio * 2;
}

function perimeterCircle (radio) {
    const diametro = diameterCircle(radio);
    return diametro * PI;
}

function areaCircle (radio) {
    return PI * (radio * radio);
}

// Integration with HTML

function calculatePerimeterSquare() {
    const input = document.getElementById("input-square");
    const value = input.value;

    const perimeter = perimeterSquare(value);
    const result = document.getElementById("square-perimeter")
    result.innerText = `The perimeter is ${perimeter.toFixed(2)}`;
}

function calculateAreaSquare() {
    const input = document.getElementById("input-square");
    const value = input.value;

    const area = areaSquare(value);
    const result = document.getElementById("square-area");
    result.innerText = `The area is ${area.toFixed(2)}`;   
}


function calculatePerimeterCircle() {
    const radio = parseInt(document.getElementById("input-circle").value);

    const perimeter = perimeterCircle(radio);
    const result = document.getElementById("circle-perimeter");
    result.innerText = `The perimeter is ${perimeter.toFixed(2)}`;
}

function calculateAreaCircle() {
    const radio = parseInt(document.getElementById("input-circle").value);

    const area = areaCircle(radio);
    const result = document.getElementById("circle-area");
    result.innerText = `The area is ${area.toFixed(2)}`;
}


function calculatePerimeterTriangle() {
    const side1 = parseInt(document.getElementById("input-triangle-s1").value);
    const side2 = parseInt(document.getElementById("input-triangle-s2").value);
    const base = parseInt(document.getElementById("input-triangle-b").value);

    const perimeter = perimeterTriangle (side1,side2,base);
    const result = document.getElementById("triangle-perimeter");
    result.innerText = `The perimeter is ${perimeter.toFixed(2)}`;
}

function calculateAreaTriangle() {
    const base = parseInt(document.getElementById("input-triangle-b").value);
    const height = parseInt(document.getElementById("input-triangle-h").value);

    const area = areaTriangle(base,height);
    const result = document.getElementById("triangle-area");
    result.innerText = `The area is ${area.toFixed(2)}`;
}


function calculateHeightTriangle() {
    const side1 = parseInt(document.getElementById("input-isosceles-s1").value);
    const side2 = parseInt(document.getElementById("input-isosceles-s2").value);
    const base = parseInt(document.getElementById("input-isosceles-b").value);

    if (side1===side2) {
        const height = heightTriangle(side1,base);
        
        const result = document.getElementById("isosceles-height");
        result.innerText = `The height is ${height.toFixed(2)}`;
    } else {
        alert("Please enter two equal sides!!!");
    }
}



