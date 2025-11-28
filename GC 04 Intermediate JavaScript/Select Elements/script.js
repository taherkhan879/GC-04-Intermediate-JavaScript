// 1. Select element with ID
const domain = document.querySelector("#domainPreference");
console.log("ID domainPreference:", domain.textContent);

// 2. Select element with class
const education = document.querySelector(".education");
console.log("Class education:", education.textContent);

// 3. Select all <li> elements
const listItems = document.querySelectorAll("li");
console.log("All <li> elements:");

listItems.forEach((item) => {
  console.log(item.textContent);
});
