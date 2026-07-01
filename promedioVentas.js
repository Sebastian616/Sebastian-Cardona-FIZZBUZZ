//promedio ventas

let cantidad = 0;

let ventas = [120000, 95000, 150000, 80000, 200000 ]

for (let i = 0; i < ventas.length; i++) {
    cantidad += ventas[i];
}

console.log("los datos suman", cantidad)
console.log("el promedio es de", cantidad/ventas.length)


