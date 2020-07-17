$(document).ready(function () {
    console.log(moment()); //Console log to view moment.js objects for date|time...
    let m = moment();
    console.log(m); //Moment objects displayed in console...
    var now = moment().format('MMMM Do YYYY');
    //Current date
    console.log(now);

    //Date Header for the calender
    var dateHeader = $("#currentDay");
    dateHeader.text(now);
    //Time of the day
    var currentHour = parseInt(moment().format('HH')); //Current time...
    console.log(currentHour);
    //background for current hour
    if (currentHour > 9) {
        $(".8am").css("background-color", "lightsalmon");
    } if (currentHour > 10) {
        $(".9am").css("background-color", "lightsalmon");
    } if (currentHour > 11) {
        $(".10am").css("background-color", "lightsalmon");
    } if (currentHour > 12) {
        $(".11am").css("background-color", "lightsalmon");
    } if (currentHour > 13) {
        $(".1pm").css("background-color", "lightsalmon");
    } if (currentHour > 14) {
        $(".2pm").css("background-color", "lightsalmon");
    } if (currentHour > 15) {
        $(".3pm").css("background-color", "lightsalmon");
    } if (currentHour > 16) {
        $(".4pm").css("background-color", "lightsalmon");
    } if (currentHour > 17) {
        $(".5pm").css("background-color", "lightsalmon");
    } 
    //Lunch Time Block...
    $(".12pm").css("background-color", "lightgreen");

    
    
    //Save time and input to local storage. Change the color when the save button is clicked. 
    $(".saveButton").on("click", function () {
        var hour = $(this).parent().attr("id");
            console.log(hour)
        var input = $(this).parent().siblings("#description").val();
            console.log(input)
        localStorage.setItem(hour, input);
        var color = $(this).parent().siblings("#description").css("background-color", "lightblue")
            //pull from local storage....
    })

        //When the user refreshes the entiries show up.  
            $(".textfield").each(function(){
                console.log($(this).attr("data-time"));
                var dataTime = $(this).attr("data-time");
                var task = localStorage.getItem(dataTime);
                $(this).val(task);

                
            });
          
});