// TODO: this file! :)

// array to store numbers
let numbers = [];


//function to update the number bank display
const updateNumberBank = () => {
  const numberBankOutput = document.querySelector(`#new-number`);
  numberBankOutput.textContent = numbers.join(', ');
}

// event listener for add number button
const addNumberForm = document.querySelector('form');

//function to handle adding number
const addNumber = (event) =>{
  event.preventDefault(); //Prevent form from refreshing the page
  const numberInput = document.querySelector(`#number`); // grab the id number on line 15
    // console.log(numberInput.value)
    const num = numberInput.value;
    if(!isNaN(num) && num !== ``){ // if the input is either not a number or a space
      numbers.push(Number(num)); // add this number to the array of number
      updateNumberBank(); //update the number in the bank
    }
    numberInput.value = ``; // blank out the user input after adding number
    
}

// function for the sort1 button 
const sortOneButton = document.querySelector(`#sortOne`); // grab sort1 button
const sortOneNumber = () => {
  if (numbers.length > 0){ // check length of the array 
    const num = numbers.shift(); //remove a number
      sortNumber(num); 
      updateNumberBank();
    }
};

//function for the sortAll button
const sortAllButton = document.querySelector(`#sortAll`);
const sortAll = () => {
  while (numbers.length > 0){
    const num= numbers.shift();
      sortNumber(num);
      updateNumberBank();

  }
};



//function to sort number into odd or even
const evenOutput = document.querySelector(`#evens output`); // grab the number in even ID
const oddOutput = document.querySelector(`#odds output`); // grab the number in odd ID
const sortNumber = (num) =>{ 
  if (num%2 === 0){ // if number is even 
      evenOutput.textContent +=  `${num} `; // add the number into even 
  } else { // if number is odd
      oddOutput.textContent +=  `${num} ` ; // add the nubmer into odd
  }
}
;


// event listeners
addNumberForm.addEventListener(`submit`, addNumber);
sortOneButton.addEventListener(`click`, sortOneNumber);
sortAllButton.addEventListener(`click`, sortAll);





























// //grab the button 
// const addNumberButton = document.querySelector(`button`);
// //add event listener for the "Add Number" button when it is clicked
// addNumberButton.addEventListener(`click`, (event) =>{
//   // prevent the form from refreshing
//   event.preventDefault();
   
//   // grab the input
// const userInput = document.querySelector(`input`);
//   //console.log(userInput.value);

//   // grab the information from the input
// const newNumberBank = document.querySelector(`#number`);
//   //console.log(newNumberBank);
    
 


// // array to store number
// let numbers = [];
//  // grab the blank bar so that we can put user input in
// const newNumber = document.querySelector(`#new-number`);
//   // add number input into the blank bar
//   const updateNumberBank =() => {
//     newNumber.textContent = numbers.joins(`, `);
//   };
// // function to handle adding number
// const addNumber = (event) => {

// 
