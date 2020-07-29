//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' 
// (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here
// create a new div element
const newDiv = document.createElement('div');
// make a variable for the id a-1
const a1 = document.getElementById('a-1');
// so that i can append the new div element to the a-1 element
a1.appendChild(newDiv);
// set the class name to square
newDiv.className = 'square';
// set the text content to default to x
newDiv.textContent = 'x';
// set the style to the div's background to red so people can see the clickable field
newDiv.style.backgroundColor = 'red';
// change the content in the div using an event listener. if clicked, 
newDiv.addEventListener('click', () => {
    // and if the content of the div element is 'x'
    if (newDiv.textContent == 'x') {
        // display 'o'
        newDiv.textContent = 'o';
    // otherwise it'll be x (the next click will change the o back to x)
    } else {
        newDiv.textContent = 'x';
    }
})



//------------------------Question 2 ---------------------------
// Write a JavaScript program to remove items from a dropdown list.
// xIn order to create the list we are providing you with the array bellow, 
// xthose items are the ones you need to add to the dropdown list as the select options
// you also need to create a button that makes the remove action of the element selected
// xappend the new list as a child of the element with the 'id = a-2'
// xappend the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];




//resolve // QUESTION 2 here

// create a select element (drop down menu)
const dropdownList = document.createElement('select');
// set an id for the dropdown list
dropdownList.id = 'colorsList';
// create a variable for element id a-2 so i can... 
const a2 = document.getElementById('a-2');
// iterate through the colors array to add the elements inside it to the dropdown list
for (let i = 0; i < colors.length; i++) {
    // create a new option element for each iteration
    let option = document.createElement('option');
    // at each iteration, set the value and text content
    option.textContent = colors[i];
    option.value = colors[i]; 
    option.id
    // and append it to the drop down list
    dropdownList.appendChild(option);
}
// add the drop down list to the a-2 id element in html by appending it
a2.appendChild(dropdownList);



// create a button to delete any selected item from the drop down list
// button created
const deleteButton = document.createElement('button');
// button display will read "remove"
deleteButton.innerHTML = "Remove";
// append the button to the a-2 element
a2.appendChild(deleteButton);
// create event listener. on click
deleteButton.addEventListener('click', () => {
    // create a variable that looks for the select list (id = colorsList)
    let removeItem = document.getElementById('colorsList');
    // and remove the selected item 
    removeItem.remove(removeItem.selectedIndex);
})

//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere)
// write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


// get the input for "volume"
const volume = document.querySelector('#volume');
const area = document.querySelector('#area');
const a3 = document.getElementById('a-3');

const calculate_sphere = () =>{
  // get input of radius
  let radius = document.querySelector('#radius').value;
  let radiusInput = Number.parseInt(radius);
  
  // create and perform math and insert answer as value
  let areaFormula = (4 * Math.PI * Math.pow(radiusInput, 2)).toFixed(2);
  let volumeFormula = (((4/3) * Math.PI * (Math.pow(radiusInput, 3)))).toFixed(2);
  volume.setAttribute('value', `${volumeFormula} cubic units`);
  area.setAttribute('value', `${areaFormula} sq units`);
  
  // return false to prevent form default clearing behavior
  return false;
};
    
 

window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, 
//each with a click action that will hide the respective question's answer above. 
//So if you click the "Hide Question 1" button it will hide from the DOM the answer 
//to your first exercise. If you click it again it will show the answer. 


//resolve // QUESTION 4 here

// this can be done in a function to create a button for each question
// only need it for three questions
// sooooo...
const a4 = document.getElementById('a-4');

// name the function. the only argument i need is the id of the section i want to hide.
function createHideButton (section) {
    // create a variable for the section id (a-1 to a-3 in string form)
    let toggleQuestion = document.getElementById(section);
    // create the button element
    let hideButton = document.createElement('button');
    // default the button text content to "hide answer"
    hideButton.textContent = `Hide Answer to ${section}`;
    // append the button to the a-4 div section
    a4.appendChild(hideButton);
    // the button event listener is also inside the function. when the button is clicked
    hideButton.addEventListener('click', () => {
        // if the answer is not showing
        if (toggleQuestion.style.display === 'none') {
            // show it
            toggleQuestion.style.display = 'block';
            // and change the button text to "hide"
            hideButton.textContent = `Hide Answer to ${section}`;
        } else {
            // otherwise, change the display to none or hidden
            toggleQuestion.style.display = 'none';
            // and change the button text to "show answer"
            hideButton.textContent = `Show Answer to ${section}`;
        }
    });
}
// CALL THE FUNCTION 3X TO MAKE THE BUTTONS
createHideButton ('a-1');
createHideButton ('a-2');
createHideButton ('a-3');

