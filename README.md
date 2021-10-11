# Work_Day_Scheduler
This is Home Work Assignment #5 for the UNH Coding Boot Camp.  Create a Work Day Scheduler Web Application.

Developer: Duane Cantera
Date: Oct. 16, 2021
Assignment: 05 Third Party API's: Work Day Scheduler

All of the HTML elements that I created for this web page were added dynamically using jQuery.  I added the following elements for each time
block to the container.

<!---------------------------------------------------------------------------------------------------------------------------- 
 
 // This div is a row that contains a time block, a text block and a save button block. 
 <div> 

    // This div is a time block that contains a paragraph element that displays the time hour interval.
    <div> 
        <p ></p> 
    </div> 

    // This div is a text block that contains a textarea element that the user can use to enter text for the event.
    <div> 
        <textarea></textarea>  
    </div> 
    
    // This div is the save button block that contains the save icon.
    <div"> 
        <i></i>  
    </div> 

</div>

------------------------------------------------------------------------------------------------------------------------------------>

I performed a clone and appendTo operation to add all of the HTML elements to the container.  I then added all of the classes and
attributes.


*********************
DEVELOPMENT ISSUES:
*********************

Issue: When I performed an appendTo operation to append multiple elements to a div element I found that only the last one remained.  All of
the previous elements no longer existed.

Solution: I found that I had to do a clone operation to create a copy of the element before I performed the appendTo operation.

Issue: How to deal with getting the key string for local storage when a save button was clicked.
Solution: I created a storage-key attribute for each save button element and was able to get this attribute in the click event to save the
          text in the associated text box to local storage.

Issue: How to create one click event function that all of the save buttons could use.
Solution: I was able to use the .add() operation to add all of the id values which allowed me to use one click event function for all of
          the save buttons.

Issue: How to limit the textarea controls to 3 rows.
Solution: I had to write a function for the keydown, keypress and keyup events.  If the keycode was a backspace or delete character we let
          the event go though and be process by the textarea control. 
          
          The rows attribute was retrieved and an enter key test was performed.  If the line count equaled the row count then the value false was returned so the enter key would not be processed by the textarea control.

          Tested if wrapping occurred by testing if the client height is less than the scroll height.  If this is the case then remove the
          last character entered and update the textarea text and return a value of false so the last keyup event will not be processed.


***************
LINKS:
***************

Link To Deployed Application: https://canterad.github.io/Work_Day_Scheduler/