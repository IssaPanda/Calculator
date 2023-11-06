document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('#calculator button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const buttonText = button.textContent;
  
        if (buttonText === '=') {
          try {
            display.value = eval(display.value); // Evaluate and display the result
          } catch (error) {
            display.value = 'Error';
          }
        } else if (buttonText === 'C') {
          display.value = ''; // Clear the display
        } else {
          display.value += buttonText; // Append the clicked button's text to the display
        }
      });
    });
  });