const sentences="Seikh HasinA Dubai PalAise";
// const count =sentences.split(/a/gi).length -1;
// console.log(count);

let count =0;
for (let bsl of sentences){
    if(bsl==="a" || bsl==="A"){
        count++;
    }
}
console.log(count)