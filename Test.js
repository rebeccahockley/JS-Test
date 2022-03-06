// // Log out the dishes in the array
const dishes = [
  "Spaghetti",
  "Lasagne",
  "Beans on toast",
  "Porridge",
  "Tomato soup",
  "Salmon",
];

for (let i = 0; i < dishes.length; i++) {
  console.log(dishes[i]);
}

// //Create a button using JS and use it to implement 2 things when clicked
const body = document.querySelector("body");
let btn = document.createElement("button");
btn.innerHTML = "Click Me";
document.body.appendChild(btn);
btn.addEventListener("click", function clickButton() {
  const h1Title = document.createElement("h1");
  h1Title.innerHTML = "Javascript test";
  body.appendChild(h1Title);
  document.body.style.background = "lightgreen";
});

//Make an API call using the Fetch API

// const displayFirstNames = document.createElement("div");
// function fetchAPI() {
//   displayFirstNames.innerHTML = " ";
//   fetch("https://reqres.in/api/users")
//     .then((response) => response.json())
//     .then((namesToDisplay) => {
//       for (let i = 0; i < data.length; i++) {
//         displayFirstNames.innerHTML += `<p> ${namesToDisplay.data[i].first_name} </p>`;
//       }
//     });
// }

// fetchAPI();

async function fetchAPI() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    console.log(data);

    function displayData(data) {
      const displayFirstNames = document.createElement("div");
      displayFirstNames.innerHTML = " ";
      for (let i = 0; i < data.length; i++) {
        displayFirstNames.innerHTML += `<p> ${namesToDisplay.data[i].first_name} </p>`;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

fetchAPI();

//Cannot go deep enough into the API data and get the firstnames
// Struggling with HOW I get to this

//Create a class

class Person {
  constructor(firstname) {
    this.firstname = firstname;
  }

  sayHello() {
    console.log("Hello my name is " + this.firstname);
  }
}

const peter = new Person("peter");
peter.sayHello();
