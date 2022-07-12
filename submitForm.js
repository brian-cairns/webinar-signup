let submit = document.getElementById('submit')
console.log(submit)
const formName = 'webinarSingup'
console.log('form: ' + formName)
let newForm = {}
let submitted = 0
let additional = 0

let email = document.querySelector('input#email')
email.addEventListener('change', (e) => {
	console.log('changed')
	newForm.email = e.target.value;
  console.log(newForm.email);
})

let caregiverName = document.querySelector('input#caregiverName')
caregiverName.addEventListener('change', (e) => {
	console.log('changed')
	newForm.caregiverName = e.target.value;
  console.log(newForm.caregiverName);
})
  
let topicInterested = document.querySelector('input#topicInterested')
topicInterested.addEventListener('change', (e) => {
	console.log('changed')
	newForm.topicInterested = e.target.value;
  console.log(newForm.topicInterested);
})

let topicMostNeeded = document.querySelector('input#topicMostNeeded')
topicMostNeeded.addEventListener('change', (e) => {
	console.log('changed')
	newForm.topicMostNeeded = e.target.value;
  console.log(newForm.topicMostNeeded);
})

let question = document.querySelector('input#question')
question.addEventListener('change', (e) => {
	console.log('changed')
	newForm.question = e.target.value;
  console.log(newForm.date);
})
  
document.getElementById('submit').addEventListener("click", async (event) => {
    submitForm(newForm, formName)
})

async function submitForm(data, form) {
  const document = {
    'form': form,
    'data': data
  }
  console.log(document)
  fetch('https://pffm.azurewebsites.net/form', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(document)
  })
    .then((response) => {
      if (response.status == 200) {
      showSuccess()
      } else {
        showError(response.body)
      }
    })
    .catch((err) => showError(err))
}


function showSuccess() {
    document.getElementById('returnMessage').innerHTML = 'Form has been successfully submitted'
}

function showError(err) {
    console.error
    document.getElementById('returnMessage').innerHTML = `An error occurred when submitting this form, which was ${err}. Please contact the administrator for help.`
}