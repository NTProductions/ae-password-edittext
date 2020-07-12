// Password EditText
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var originalString = "";
var displayString = "";

var window = new Window("palette", "Password", undefined);
window.orientation = "row";
var editText = window.add("edittext", undefined, "");
editText.characters = 30;
var clearButton = window.add("button", undefined, "Clear");
var originalButton = window.add("button", undefined, "Original");

window.center();
window.show();

editText.onChanging = function() {
    originalString+=editText.text.slice(0, 1);
    displayString+=characters[Math.floor(Math.random() * characters.length)];
    editText.text = displayString;
    }

clearButton.onClick = function () {
    editText.text = "";
    originalString = "";
    displayString = "";
    }

originalButton.onClick = function() {
        alert(originalString);
    }