// const body = document.querySelector("body");
// const displayFirstNames = document.createElement("div");
// function fetchAPI() {
//   displayFirstNames.innerHTML = " ";
//   fetch("https://reqres.in/api/users")
//     .then((response) => response.json())
//     .then((namesToDisplay) => {
//         // console.log(namesToDisplay)
//       for (let i = 0; i < namesToDisplay.data.length; i++) {
//         // console.log(namesToDisplay.data[i])
//         displayFirstNames.innerHTML += `<p> ${namesToDisplay.data[i].first_name} </p>`;
//       }
//       body.appendChild(displayFirstNames)
//     });
// }

// fetchAPI();



const body = document.querySelector("body");

async function fetchAPI() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = response.json();
    //   console.log(data);
  
      function displayData(data) {
        const displayFirstNames = document.createElement("div");
        displayFirstNames.innerHTML = " ";
        for (let i = 0; i < data.data.length; i++) {
          displayFirstNames.innerHTML += `<p> ${data.data[i].first_name} </p>`; 
        }
        body.appendChild(displayFirstNames)
      }
      displayData(data)
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchAPI();