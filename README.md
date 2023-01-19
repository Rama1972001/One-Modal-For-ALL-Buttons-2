# One-Modal-For-ALL-Buttons-2 (Modal Window)

This is a simple JavaScript UI component that creates a modal window that can be triggered by clicking any of three buttons. The modal window includes a close button, and can also be closed by clicking outside of the window or by pressing the 'Escape' key on the keyboard. The modal window is built using HTML, CSS, and JavaScript.

## How to use
* Add the HTML code for the modal window, overlay, and buttons to your HTML file.
* Include the CSS file for styling the modal window, overlay, and buttons.
* Import the JavaScript file for the modal window functionality.
* Add the class "show-modal" to any buttons that you want to trigger the modal window when clicked.
* The modal window can be closed by clicking the "close-modal" button, clicking outside of the window, or by pressing the 'Escape' key on the keyboard.

##  details about the code:

This code creates a modal window that can be opened by clicking on any of the buttons with the class "show-modal". The modal window contains a close button, and can also be closed by clicking on the overlay or by pressing the 'Escape' key on the keyboard.

The first step is to select the elements that will be used in the script. ele1 is a Node List containing all of the buttons with the class "show-modal", ele2 is the modal window itself, ele3 is the close button within the modal, and ele4 is the overlay.

The function openModal is then defined, which is called when any of the buttons with the class "show-modal" are clicked. This function removes the class "hidden" from both the modal window and the overlay, making them visible on the screen.

A for loop is then used to attach the openModal function to the click event of each button in the ele1 Node List.

The function closeModal is then defined, which is called when the close button within the modal, or the overlay is clicked, or the 'Escape' key is pressed. This function adds the class "hidden" to both the modal window and the overlay, making them invisible on the screen.

The closeModal function is then attached to the click event of both the close button and the overlay.

Finally, a global event listener is added to the document to listen for the 'keydown' event, specifically checking for the 'Escape' key. If the 'Escape' key is pressed and the modal window is not hidden, the closeModal function is called to hide the modal window.


