/**Basic List Filter and Pagination using the Unobstrusive Javscript Methods **/

Description

Taking a html structured list and applying interactive pagination behavior using javascript for easier list filtering. 
The html markup conatins a list of 54 students in index.html that is broken down into pages showing ten students at 
a time using pagination techniques. The javscript functions will work on varying list of smaller or longer student list. 

Project Process

One of the principle techniques applied in this project is Unobstrusive Javascript principles. A method of seperating the 
core markup from the interactive behavior. This principles allows the markup to display without any interactive behaivor 
employed by javascript if it were disabled. 

The core javascript code uses two function. 

The first function handles manipulating the original list and outputing a specified number of list items per page. This function requires the initial DOM manipulation to create our initial abbreviated list and stores the remaing list items in groups of ten.

In the second function we further manipulate the DOM by adding additional elements to the page. The first function is also called in this function as well to loop through our list and pull student based on the page clicked. We use a click option on the event listener to generate our group of students everytime the a page number is clicked. 
 
