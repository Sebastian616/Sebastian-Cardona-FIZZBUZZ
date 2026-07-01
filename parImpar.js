let par = "Santiago";
let impar = "sofia";


for (let i = 1; i < 21; i++) {
   if ( i % 2 === 0) {
    console.log(i, "es atendido por", par);
   } else if ( i % 2 === 1) {
    console.log(i,"sera atendido por", impar)}
}