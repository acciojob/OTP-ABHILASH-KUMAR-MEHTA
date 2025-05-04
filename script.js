//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener('keydown', (e) => {
    const key = e.key;

    if (key >= 0 && key <= 9) {
      input.value = '';
      setTimeout(() => {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }, 10);
    } else if (key === 'Backspace') {
      input.value = '';
      setTimeout(() => {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }, 10);
    } else {
      e.preventDefault(); // prevent non-numeric input
    }
  });
});
