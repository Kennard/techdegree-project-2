/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const listItem = document.querySelectorAll('.student-item');
const itemsPerPage = 10; 

// Create a function with two parameters: One containing the 'list of student' and the second to hold our 'page'.  
function showPage(list,page){ 
    const startIndex = (page * itemsPerPage) - itemsPerPage;
    const endIndex = (page * itemsPerPage) - 1;
    // Create to variables to hold the start and end index for the number of students on a page. Hide the list of students first,
    const ul = document.querySelector('ul');
      for( let i = 0; i < list.length; i += 1){ 
          list[i].style.display = 'none';
      }  
    // Loop through the list to show only 10 students at a time by appending the child elements of the UL to the page. 
      for( let i = 0; i < list.length; i += 1){   
         if (i >= startIndex && i <= endIndex) {
          list[i].style.display = 'block';
          ul.appendChild(list[i]);          
         }
      }                            
}

// This function will add pagination links to the bottom of the student list. Each page click will display 10 students. 
// One parameter will hold the list for the global const listItem

function appendPageLinks(list){
  // To add our pagination links add a container div element with a class name of pagination an appended to the parent div with a class name of 'page'. 
  const page = document.querySelector('.page');
  const div = document.createElement('div');
  div.className = 'pagination';
  page.appendChild(div);

  // Create a constant that references a created UL element and append the ul element to the div  
  const ul = document.createElement('ul');
  div.appendChild(ul);

  // Create a new const to store the value of pages needed. Use the pages needed const to loop through and append LI child elements to the UL. 
  // Append child a link elements to the LI elements adding href attributes with a hash link. Loop also increments the a link text content.
  // Finally add a class name of active to the first a element  
  const pagesNeeded = Math.ceil(list.length / itemsPerPage);
  
  for (let i = 0; i < pagesNeeded; i += 1){
     const li = document.createElement('li');
     const a = document.createElement('a');
        ul.appendChild(li);
        li.appendChild(a);
        a.setAttribute('href', '#')
        a.textContent = i + 1;
      if(i == 0) {
        a.className = 'active';
      }
  }
// Create const for the 'a' element that refernces all the a links by using the dom method getElementsByTagName. Add a click event listerner to the a elements. 
// Since this method returns a collection we loop through them appliying a listener for each page link. Our call back includes the showPage function we created. 
// We also loop through the list to remove all active class when the event targetis clicked. When a new event target is clicked we add the active class back.  
 const a = document.getElementsByTagName('a');
 for (let i = 0; i < a.length; i += 1){     

   a[i].addEventListener('click', (event) => {
      for(let i = 0; i < a.length; i += 1){
        a[i].removeAttribute('class');
      }
      event.target.className = 'active';
      showPage(listItem,a[i].textContent);       
    });
  };
} 

showPage(listItem,1);
appendPageLinks(listItem);

