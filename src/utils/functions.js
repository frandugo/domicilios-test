export const saludar = (name) => {
    return `Hola ${ name }`
}

export const suma = (a, b) => {
    return a + b
} 


export const createStore = () => {
    let fruits = []
    return {
       addFruit: (fruit) => {
           fruits.push(fruit)
       },
       getFruits: () => {
           return fruits
       }
    }
}