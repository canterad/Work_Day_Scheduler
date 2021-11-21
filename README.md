# Work Day Scheduler
This is Home Work Assignment #5 for the UNH Coding Boot Camp.  Create a Work Day Scheduler Web Application.<br><br>

Developer: Duane Cantera<br>
Date: Oct. 16, 2021<br>
Assignment: 05 Third Party API's: Work Day Scheduler<br><br>

All of the HTML elements that I created for this web page were added dynamically using jQuery.  I added the elements for each time block to the container.  I added a div that contains a time block, a text block and a save button block.  I performed a clone and appendTo operation to add all of the HTML elements to the container.  I then added all of the classes and attributes.<br><br>

*********************
DEVELOPMENT ISSUES:
*********************

Issue: When I performed an appendTo operation to append multiple elements to a div element I found that only the last one remained.  All of the previous elements no longer existed.<br>
Solution: I found that I had to do a clone operation to create a copy of the element before I performed the appendTo operation.<br><br>

Issue: How to deal with getting the key string for local storage when a save button was clicked.<br>
Solution: I created a storage-key attribute for each save button element and was able to get this attribute in the click event to save the text in the associated text box to local storage.<br><br>

Issue: How to create one click event function that all of the save buttons could use.<br>
Solution: I was able to use the .add() operation to add all of the id values which allowed me to use one click event function for all of the save buttons.<br><br>

Issue: How to limit the textarea controls to 3 rows.<br>
Solution: I had to write a function for the keydown, keypress and keyup events.  If the keycode was a backspace or delete character I let the event go though and be processed by the textarea control. The rows attribute was retrieved and an enter key test was performed.  If the line count equaled the row count then the value false was returned so the enter key would not be processed by the textarea control.  I tested if wrapping occurred by testing if the client height was less than the scroll height.  If this is the case then I removed the last character, I entered and updated the textarea text and returned a value of false so the last keyup event would not be processed.<br><br>

***************
LINKS:
***************

Link To Deployed Application: https://canterad.github.io/Work_Day_Scheduler/