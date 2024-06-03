// Task 45 = Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. It should then accept an arbitrary number 
// of keyword arguments. Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. Print the Object that’s returned to make sure all the information was 
// stored correctly.



// Define a function to store information about a car
function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): object {
    // Create an object with the required properties
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add the additional key-value pairs to the car object
    for (let option of options) {
        let [key, value] = option;
        car[key] = value;
    }

    // Return the car object
    return car;
}

// Call the function with the required information and additional name-value pairs
let car = createCar('Toyota', 'Corolla', ['color', 'red'], ['year', 2022], ['sunroof', true]);

// Print the car object to verify all information is stored correctly
console.log(car);