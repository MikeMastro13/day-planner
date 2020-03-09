var plannerContainer = $('.container');
var hoursDisplayed = 12;
var hoursBefore = 3;

// var test = moment().format('hA');
// test = moment().add(1,'h').format('hA');
// var textPar = $('<p>').text(test);
// plannerContainer.append(textPar);

function generateTime() {
    var jumboContainer = $("<div>");
    jumboContainer.addClass('jumbotron');
    plannerContainer.append(jumboContainer);
    for (var i = 0; i < hoursDisplayed; i++) {
        if (hoursBefore > 0) {
            var hourName = $('<p>').text(moment().subtract(hoursBefore,'h').format('hA')).addClass('hour');
            hoursBefore--;
        } else {
            var hourName = $('<p>').text(moment().add(i-3,'h').format('hA')).addClass('hour');
        }
        if (i === 3) {
            var hourTextArea = $('<textarea>').addClass('present');
        } else if( i > 3) {
            var hourTextArea = $('<textarea>').addClass('future');
        } else {
            var hourTextArea = $('<textarea>').addClass('past');
        }
        var saveIcon = $('<i>').addClass('far fa-save');
        var saveBtn = $('<button>').addClass('saveBtn').append(saveIcon).on("click", saveEvent);
        var hourRow = $('<div>').addClass('row').append(hourName, hourTextArea, saveBtn);
        jumboContainer.append(hourRow);
    }
}

function saveEvent() {
    alert('Your schedule has been saved!');
}

generateTime();
