

//---------------------------------restOperator----------------

function calculateCardPrice(...num1){

    return num1;
}

console.log(calculateCardPrice(200,500,600,800)) //[ 200, 500, 600, 800 ]

function calculatePrice(val1, val2, ...num1){

    return num1;
}

console.log(calculatePrice(200,500,600,800)) //[ 600, 800 ] 200 or 500 val1 or val2 Parameter main gai hai q ky print sirif num1 karaya tha islie [ 600, 800 ] aya
