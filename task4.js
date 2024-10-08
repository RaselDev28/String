let string="My love is Allah X Muhammad sm"
// let changeString=string.replace(/x/g, 'y').replace(/X/g, "Y");
// console.log(changeString);

let uppercaseString=string.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
console.log(uppercaseString);