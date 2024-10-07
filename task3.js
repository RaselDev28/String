const sentence="He is a good and beautiful boy ";
const vowels="aeiou";
let allVowels=true; //Assumption
for(let vowel of vowels){ //Loop through
    if(!sentence.toLocaleLowerCase().includes(vowel)){ // check all vowels
        allVowels=false; // if one is missing output is false and
        break; // go out from the loop
    }
}
console.log(allVowels);