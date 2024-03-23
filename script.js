const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');



const checkValidInput = () => {
  if (userInput.value === '') {
    alert("Please provide a phone number")
  }
  else {
    checkValidUsNumber(userInput.value)
  }
}

const checkValidUsNumber = (input) => {
  const usNumRegex = /^1? ?((\(\d{3}\))|(\d{3}))[- ]?\d{3}[- ]?\d{4}/;
  showResult( usNumRegex.test(input) , input );
}

const showResult = (bool, input) => {
  resultsDiv.textContent = (bool ? 'Valid US number: ' : 'Invalid US number: ') + input;
  resultsDiv.classList.remove('hidden');
  resultsDiv.classList.add(`${bool ? '' : 'in'}valid`);

}

const reset = () => {
  userInput.value = '';
  resultsDiv.className = 'hidden';
  resultsDiv.textContent = '';
}


checkBtn.addEventListener('click', checkValidInput);



