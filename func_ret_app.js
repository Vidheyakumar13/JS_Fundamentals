// function calculate(value){
//     console.log('The Distance in CM is:' + value*2.54 + 'cm');
// }

// let width = calculate(1000)
// let height = calculate(500)

// const dimension = [width, height]
// console.log(dimension);

const pole_height = 80 
function calculate(value){
    let new_value= value*2.54;
    return new_value;
}

let width = calculate(200);
let height = calculate(pole_height);

const dimensions=[width, height]
console.log(dimensions);