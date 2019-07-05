const testOutput = document.querySelector('#test-output');

document.querySelector('#class-select').addEventListener('change', function (e) {
  console.log(this.value);
  testOutput.textContent = e.target.value;
});