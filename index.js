// Code your solutions in this file
function writeCards(names) {
  const messagesArray = [];
  for (let i = 0; i < names.length; i++) {
    messagesArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return messagesArray;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"])); 


  //countdown
   function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
countDown(10);