const myString="Bangladesh is a beautiful country";
// const count=myString.split("a").length-1;
// console.log(count);
let count=0;
for(let word of myString){
   if(word==="a"){
    count++;
   }
}
console.log(count);