//*01-variables

const y = 2;
const x = 5.5;
const z = 3.14;
const apple = "fruit";
const test = false;
const giorgi = "patsia";
const array = [1, 2, 3, 4, 5];

function divideNumber() {
  const number1 = prompt("Enter number 1");
  const number2 = prompt("Enter number 2");
  const result = number1 / number2;
  alert(result);
}

function concatPhrases() {
  const phrase1 = prompt("Enter phrase 1");
  const phrase2 = prompt("Enter phrase 2");
  const result = phrase1 + phrase2;
  alert(result);
}

function calcVat() {
  const price = prompt("Enter price");
  const vat = 0.21;
  const result = price * vat;
  alert(result);
}

function surfaceCircle() {
  const radius = prompt("Enter radius");
  const result = Math.PI * radius * radius;

  alert(result);
}

function conversionTimeToSeconds() {
  const hours = parseInt(prompt("Enter hours"));
  const minutes = parseInt(prompt("Enter minute"));
  const seconds = parseInt(prompt("Enter second"));
  const result = hours * 3600 + minutes * 60 + seconds;

  alert(result);
}

//*02-conditions

function cinemaTariff() {
  const ticketPrice = 10;
  const saledTicketPrice = 8;
  const haveSale = prompt("Do you have sale? yes/no");
  if (haveSale === "yes") {
    alert("Ticket price is " + saledTicketPrice);
  } else {
    alert("Ticket price is " + ticketPrice);
  }
}

function maximumNumber() {
  const number1 = prompt("Enter number 1");
  const number2 = prompt("Enter number 2");
  const number3 = prompt("Enter number 3");
  const result = Math.max(number1, number2, number3);
  alert(`maximum number is ${result}`);
}

function identicalDice() {
  const dice1 = alert(`dice1 is ${Math.floor(Math.random() * 6) + 1}`);
  const dice2 = alert(`dice2 is ${Math.floor(Math.random() * 6) + 1}`);
  const dice3 = alert(`dice3 is ${Math.floor(Math.random() * 6) + 1}`);

  if (dice1 === dice2) {
    alert("dice1 and dice2 are identical");
  } else if (dice1 === dice3) {
    alert("dice1 and dice3 are identical");
  } else if (dice2 === dice3) {
    alert("dice2 and dice3 are identical");
  } else {
    alert("no identical dice");
  }
}

function daysNumner() {
  const number = prompt(`enter number between 1-7`);
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  days.forEach((day, index) => {
    if (index + 1 == number) {
      alert(days[index]);
    }
    if (number > 7) {
      alert("enter number between 1-7");
    }
  });
}

function printShop() {
  const amount = prompt(`how much do you want to buy?`);
  if (amount <= 10) {
    alert(
      ` you have to pay ${
        amount * 0.12
      } $ \n price calculated 0.12 $ per 1 item`
    );
  } else if (amount > 10 && amount <= 20) {
    alert(
      ` you have to pay ${amount * 0.11} $\n price calculated 0.11 $ per 1 item`
    );
  } else {
    alert(
      ` you have to pay ${amount * 0.1} $\n price calculated 0.10 $ per 1 item`
    );
  }
}

//*loops

function printNumbers() {
  let number = prompt(`enter number`);
  for (let i = 0; i <= number; i++) {
    console.log(i);
  }
  for (let i = 0; i <= number; number--) {
    console.log(number);
  }
}

function oddNumbers() {
  let number = prompt(`enter number`);
  for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

function printRandomNumbers() {
  let number = prompt(`enter number`);
  for (let i = 0; i <= number; i++) {
    console.log(Math.floor(Math.random() * number));
  }
}

function throwDice() {
  let number = prompt(`how many times do you want to throw dice?`);
  let checkThrowDice = 0;
  let thrownArray = [];

  for (let i = 1; i <= number; i++) {
    let thrownDice = Math.floor(Math.random() * 6);
    thrownArray.push(thrownDice);
  }

  console.log(thrownArray);
}

function evenNUmbers() {
  let number = prompt(`enter number`);
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

const perfectNumbers = () => {
  let temp = 0;
  let number = prompt(`enter number to check if its perfect number`);
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }
  if (temp == number && temp !== 0) {
    alert("It is a perfect number.");
  } else {
    alert("It is not a perfect number.");
  }
};

//*arrays

function printArray() {
  const fruits = ["apple", "banana", "kiwi"];
  fruits.forEach((fruit) => {
    console.log(fruit);
  });
}

function printMaximumIntegerFromArray() {
  let newArray = [];
  const number1 = prompt("Enter number 1");
  const number2 = prompt("Enter number 2");
  const number3 = prompt("Enter number 3");
  newArray.push(number1, number2, number3);
  const result = Math.max(...newArray);
  alert(`maximum number is ${result}`);
}
function printMinimumntegerFromArray() {
  let newArray = [];
  const number1 = prompt("Enter number 1");
  const number2 = prompt("Enter number 2");
  const number3 = prompt("Enter number 3");
  newArray.push(number1, number2, number3);
  const result = Math.min(...newArray);
  alert(`minimum number is ${result}`);
}

function indexOfMinimumNumber() {
  let newArray = [];
  const number1 = parseInt(prompt("Enter number 1"));
  const number2 = parseInt(prompt("Enter number 2"));
  const number3 = parseInt(prompt("Enter number 3"));
  newArray.push(number1, number2, number3);
  console.log(newArray);
  const minInArray = Math.min(...newArray);
  alert(
    `${newArray}\n index of minimum number is ${newArray.indexOf(minInArray)}`
  );
}

function arraySortedOrNo() {
  let array = [];
  const number1 = parseInt(prompt("Enter number 1"));
  const number2 = parseInt(prompt("Enter number 2"));
  const number3 = parseInt(prompt("Enter number 3"));
  const number4 = parseInt(prompt("Enter number 4"));
  const number5 = parseInt(prompt("Enter number 5"));
  array.push(number1, number2, number3, number4, number5);
  let n = array.length;
  if (n === 1 || n === 0) {
    alert(`array is sorted`);
  }
  if (array[n - 1] < array[n - 2]) {
    console.log(array);
    alert(`array is not sorted`);
  } else {
    alert(`array is sorted`);
    console.log(array);
  }
}

//*Strings

function printString(a, b) {
  const firstName = prompt("Enter first name");
  const lastName = prompt("Enter last name");
  const result = firstName + " " + lastName;
  console.log(typeof result);
  return result;
}

function upperCaseToLowerCase() {
  const string = prompt("Enter sentence");
  const result = string.toLowerCase();
  alert(result);
}

function LowerCaseToUpperCase() {
  const string = prompt("Enter sentence");
  const result = string.toUpperCase();
  alert(result);
}

function formatString(firstName, LastName) {
  const nameAndSirname = prompt("Enter name and sirname");
  if (nameAndSirname.includes(",")) {
    const result = nameAndSirname.replace(",", " ");
    alert(result);
  }
}

function removeWhiteSpace() {
  const string = prompt("Enter sentence");
  const result = string.trim();
  alert(result);
}
