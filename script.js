// Code placed inside ready function so will be executed when the page is ready.
$(document).ready(function()
{
    // This formats in 24 hrs. instead of 9 to 5 I want 9 to 17 1 = 13, 2 = 14, 3 = 15, 4 = 16 5 = 17
    let dateHrs = moment().format("HH:m");
    
    // Convert the hour value to a number.
    let szHr = dateHrs.substr(0, 2);
    let nHour = parseInt(szHr);
 
    // Format the date "Thursday, September 5th" 
    let strDate = moment().format("dddd, MMMM Do ");

    // Get the HTML element with the currentDay id value and set it text to the date value.
    let currentDay = $('#currentDay');
    currentDay.text(strDate);

    // Clone and Append all of the HTML elements to the container.
    let scheduleObj = $('.container');

    $('<div></div>').clone().appendTo(scheduleObj).attr('id','row9');
    $('<div></div>').clone().appendTo($('#row9')).attr('id','hour9');
    $('<p>9AM</p>').clone().appendTo($('#hour9')).attr('id','p9');
    $('<div></div>').clone().appendTo($('#row9')).attr('id','block9');    
    $('<textarea rows="3"></textarea>').clone().appendTo($('#block9')).attr('id','textarea9');    
    $('<div></div>').clone().appendTo($('#row9')).attr('id','btn9');            
    $('<i></i>').clone().appendTo($('#btn9')).attr('id','icon9');    

    $('<div></div>').clone().appendTo(scheduleObj).attr('id','row10');
    $('<div></div>').clone().appendTo($('#row10')).attr('id','hour10');
    $('<p>10AM</p>').clone().appendTo($('#hour10')).attr('id','p10');
    $('<div></div>').clone().appendTo($('#row10')).attr('id','block10');    
    $('<textarea rows="3"></textarea>').clone().appendTo($('#block10')).attr('id','textarea10');    
    $('<div></div>').clone().appendTo($('#row10')).attr('id','btn10');            
    $('<i></i>').clone().appendTo($('#btn10')).attr('id','icon10');   

    $('<div></div>').clone().appendTo(scheduleObj).attr('id','row11');
    $('<div></div>').clone().appendTo($('#row11')).attr('id','hour11');
    $('<p>11AM</p>').clone().appendTo($('#hour11')).attr('id','p11');
    $('<div></div>').clone().appendTo($('#row11')).attr('id','block11');    
    $('<textarea rows="3"></textarea>').clone().appendTo($('#block11')).attr('id','textarea11');    
    $('<div></div>').clone().appendTo($('#row11')).attr('id','btn11');            
    $('<i></i>').clone().appendTo($('#btn11')).attr('id','icon11');   

    $('<div></div>').clone().appendTo(scheduleObj).attr('id','row12');
    $('<div></div>').clone().appendTo($('#row12')).attr('id','hour12');
    $('<p>12PM</p>').clone().appendTo($('#hour12')).attr('id','p12');
    $('<div></div>').clone().appendTo($('#row12')).attr('id','block12');    
    $('<textarea rows="3"></textarea>').clone().appendTo($('#block12')).attr('id','textarea12');    
    $('<div></div>').clone().appendTo($('#row12')).attr('id','btn12');            
    $('<i></i>').clone().appendTo($('#btn12')).attr('id','icon12');   

    $('<div></div>').clone().appendTo(scheduleObj).attr('id','row13');
    $('<div></div>').clone().appendTo($('#row13')).attr('id','hour13');
    $('<p>1PM</p>').clone().appendTo($('#hour13')).attr('id','p13');
    $('<div></div>').clone().appendTo($('#row13')).attr('id','block13');    
    $('<textarea rows="3"></textarea>').clone().appendTo($('#block13')).attr('id','textarea13');    
    $('<div></div>').clone().appendTo($('#row13')).attr('id','btn13');            
    $('<i></i>').clone().appendTo($('#btn13')).attr('id','icon13');   

    $('<div></div>').clone().appendTo(scheduleObj).attr('id','row14');    
    $('<div></div>').clone().appendTo($('#row14')).attr('id','hour14');
    $('<p>2PM</p>').clone().appendTo($('#hour14')).attr('id','p14');
    $('<div></div>').clone().appendTo($('#row14')).attr('id','block14');    
    $('<textarea rows="3"></textarea>').clone().appendTo($('#block14')).attr('id','textarea14');    
    $('<div></div>').clone().appendTo($('#row14')).attr('id','btn14');            
    $('<i></i>').clone().appendTo($('#btn14')).attr('id','icon14');   

    $('<div></div>').clone().appendTo(scheduleObj).attr('id','row15');
    $('<div></div>').clone().appendTo($('#row15')).attr('id','hour15');
    $('<p>3PM</p>').clone().appendTo($('#hour15')).attr('id','p15');
    $('<div></div>').clone().appendTo($('#row15')).attr('id','block15');    
    $('<textarea rows="3"></textarea>').clone().appendTo($('#block15')).attr('id','textarea15');    
    $('<div></div>').clone().appendTo($('#row15')).attr('id','btn15');            
    $('<i></i>').clone().appendTo($('#btn15')).attr('id','icon15');   

    $('<div></div>').clone().appendTo(scheduleObj).attr('id','row16');
    $('<div></div>').clone().appendTo($('#row16')).attr('id','hour16');
    $('<p>4PM</p>').clone().appendTo($('#hour16')).attr('id','p16');
    $('<div></div>').clone().appendTo($('#row16')).attr('id','block16');    
    $('<textarea rows="3"></textarea>').clone().appendTo($('#block16')).attr('id','textarea16');    
    $('<div></div>').clone().appendTo($('#row16')).attr('id','btn16');            
    $('<i></i>').clone().appendTo($('#btn16')).attr('id','icon16');   

    $('<div></div>').clone().appendTo(scheduleObj).attr('id','row17');                
    $('<div></div>').clone().appendTo($('#row17')).attr('id','hour17');
    $('<p>5PM</p>').clone().appendTo($('#hour17')).attr('id','p17');
    $('<div></div>').clone().appendTo($('#row17')).attr('id','block17');    
    $('<textarea rows="3"></textarea>').clone().appendTo($('#block17')).attr('id','textarea17');    
    $('<div></div>').clone().appendTo($('#row17')).attr('id','btn17');            
    $('<i></i>').clone().appendTo($('#btn17')).attr('id','icon17');   
    
    // Add the rowclass to each row HTML element.
    $('#row9').addClass("rowclass");
    $('#row10').addClass("rowclass");
    $('#row11').addClass("rowclass");
    $('#row12').addClass("rowclass");
    $('#row13').addClass("rowclass");
    $('#row14').addClass("rowclass");
    $('#row15').addClass("rowclass");
    $('#row16').addClass("rowclass");
    $('#row17').addClass("rowclass");
 
    // Add the hourclass to each hour HTML element.
    $('#hour9').addClass("hour hourclass");
    $('#hour10').addClass("hour hourclass");
    $('#hour11').addClass("hour hourclass");
    $('#hour12').addClass("hour hourclass");
    $('#hour13').addClass("hour hourclass");
    $('#hour14').addClass("hour hourclass");
    $('#hour15').addClass("hour hourclass");
    $('#hour16').addClass("hour hourclass");
    $('#hour17').addClass("hour hourclass");

    // Add the blockclass to each block HTML element.
    $('#block9').addClass("blockclass");
    $('#block10').addClass("blockclass");
    $('#block11').addClass("blockclass");
    $('#block12').addClass("blockclass");
    $('#block13').addClass("blockclass");
    $('#block14').addClass("blockclass");
    $('#block15').addClass("blockclass");
    $('#block16').addClass("blockclass");
    $('#block17').addClass("blockclass");   

    // Add the textareaclass to each textarea block HTML element.
    $('#textarea9').addClass("textareaclass description");
    $('#textarea10').addClass("textareaclass description");
    $('#textarea11').addClass("textareaclass description");
    $('#textarea12').addClass("textareaclass description");
    $('#textarea13').addClass("textareaclass description");
    $('#textarea14').addClass("textareaclass description");
    $('#textarea15').addClass("textareaclass description");
    $('#textarea16').addClass("textareaclass description");
    $('#textarea17').addClass("textareaclass description");  

    // Add the btnclass to each button div HTML element.
    $('#btn9').addClass("saveBtn btnclass");
    $('#btn10').addClass("saveBtn btnclass");
    $('#btn11').addClass("saveBtn btnclass");
    $('#btn12').addClass("saveBtn btnclass");
    $('#btn13').addClass("saveBtn btnclass");
    $('#btn14').addClass("saveBtn btnclass");
    $('#btn15').addClass("saveBtn btnclass");
    $('#btn16').addClass("saveBtn btnclass");
    $('#btn17').addClass("saveBtn btnclass");  

    // Add the button icon class each icon HTML element.
    $('#icon9').addClass("fa fa-save");
    $('#icon10').addClass("fa fa-save");
    $('#icon11').addClass("fa fa-save");
    $('#icon12').addClass("fa fa-save");
    $('#icon13').addClass("fa fa-save");
    $('#icon14').addClass("fa fa-save");
    $('#icon15').addClass("fa fa-save");
    $('#icon16').addClass("fa fa-save");
    $('#icon17').addClass("fa fa-save");  

    // Add the storage-key attribute to each button element.
    $('#btn9').attr('storage-key','textarea9');
    $('#btn10').attr('storage-key','textarea10');
    $('#btn11').attr('storage-key','textarea11');
    $('#btn12').attr('storage-key','textarea12');
    $('#btn13').attr('storage-key','textarea13');
    $('#btn14').attr('storage-key','textarea14');
    $('#btn15').attr('storage-key','textarea15');
    $('#btn16').attr('storage-key','textarea16');
    $('#btn17').attr('storage-key','textarea17');    

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Loop through the following number values and test them agains the nHour variable to determine which class should be added
    // to each block.  Also deal with local storage.  Convert the nHour value to a string and add it to the end of the string
    // "textarea" use this string to get the local storage data and then pre append the character "#" to set the local storage
    // data for the text box.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $.each([ 9, 10, 11, 12, 13, 14, 15, 16, 17 ], function( index, value ) 
    {
        // Test the value against the Hour value and set the correct class.
        if (value < nHour)
        {
            $('#block' + parseInt(value)).addClass("past");  
        }
        else if (value === nHour)
        {
            $('#block' + parseInt(value)).addClass("present");  
        }
        else
        {
            $('#block' + parseInt(value)).addClass("future");  
        }

        // Deal with local storage for each textbox.
        let textboxId = "textarea" + parseInt(value);
        let szTextBox = localStorage.getItem(textboxId);

        // If we retrieved data from local storage then set it to the text box value.
        if (szTextBox != null) 
        {
            textboxId = "#" + textboxId;
            $(textboxId).val(szTextBox);
        }
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Set up click event for all of the save buttons.  It will change the cursor to the wait cursor and icon color to black.  
    // It will get the text from the associated text area and save it to local storage.  It then resets the cursor to the default 
    // cursor and resets the icon color to white.
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $('#btn9').add('#btn10').add('#btn11').add('#btn12').add('#btn13').add('#btn14').add('#btn15').add('#btn16').add('#btn17').click(function()
    {
        // change the cursor and icon color.
        $(document.body).css({ 'cursor': 'wait' })
        $(this).find('i').css("color","black");
    
        // Create the textbox ID.  Textbox ID created by using the storage-key value for the button.
        let storageKey = $(this).attr("storage-key");
        let storageid = "#" + storageKey;    

        // Get the text from the textbox.
        let text = $(storageid).val();

        // Write to local storage.
        localStorage.setItem(storageKey, text);

        // Reset the cursor and the color of the icon.
        $(document.body).css({ 'cursor': 'default' })
        $(this).find('i').css("color","white");        
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Focus event for all textarea elements.
    // Display the border the same color as the save button.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $("textarea").on('focus',function()
    {
        $(this).css("border", "solid #06aed5");
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Blur event for all textarea elements.
    // When the textbox looses focus then reset the border.
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $("textarea").on('blur',function()
    {
        $(this).css({ "border":"none", "border-left":"1px solid black"});
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Keydown, keypress and keyup event for textarea element.
    // This limits the number of rows based on the "rows" value.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $("textarea").on('keydown keypress keyup',function(e)
    {
        // If the keyCode is backspace or delete then let the event go through.
        if(e.keyCode == 8 || e.keyCode == 46)
        {
            return true;
        }

        // Get the rows value and test for an enter key
        // if the line count equals the row count then return false 
        // so the enter key is not processed.
        var maxRowCount = $(this).attr("rows") || 2;
        var lineCount = $(this).val().split('\n').length;
        if(e.keyCode == 13)
        {
            if(lineCount == maxRowCount)
            {
                return false;
            }
        }

        // If wrapping occurs testing if the client height is less than the scroll height.
        // If this is the case then remove the last character entered and update the textarea text
        // and return a false value so the last keyup event will not be processed.
        var jsElement = $(this)[0];
        if(jsElement.clientHeight < jsElement.scrollHeight)
        {
            var text = $(this).val();
            text= text.slice(0, -1);
            $(this).val(text);
            return false;
        }
    });
});