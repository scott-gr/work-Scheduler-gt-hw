$(document).ready(function () {
  //VARIABLES
  // var saveBtnEl = document.querySelector('saveBtn');
  // var RowEl = document.querySelector('row');
  // var hourEl = document.querySelector('hour');
  var workHours = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  //moment testing
  console.log(moment.duration(8, 'hours').hours());
  var a = moment().format('hh[:00]');
  console.log(a);
  var nowHour = now.hour();
  console.log(nowHour)
  ///FUNCTIONS

  function makeRows() {

    var i = 0;
    while (i < workHours.length) {
      rowEl = $('<div>').addClass('row');
      timeBlockEl = $('<div>').addClass('timeBlock');
      hourCol = $('<div>').addClass('col-2 hour');
      descriptionEl = $('<div>').addClass('col-9 description');
      var hourText = workHours[i];
      // var textCol = // generate text area
      // var btnCol = // generate button

    if workHours[i] == 
    
    }
  }
  
});
//function saveNote
//when save button is clicked, save contents and hour to localstorage
// if there is already a note in local storage for that hour, update it or clear it before saving

//function colorize
//if hour = currenttime, description is red
//if past, description grey
//if future, description green
// //for loop or does if, else with Moment do enough?

// //EVENT LISTENERS
// $('saveBtn').on('click', function () {
//   // function to save text area to localstorage
// });
