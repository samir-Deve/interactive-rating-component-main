const formValues = document.querySelectorAll("form .btn");
const ratingCount = document.querySelector(".submit_message .submit_rating_count");
const submitMessageCont = document.querySelector(".submit_message");
const formCont = document.querySelector(".form_cont");
const submitBtn = document.querySelector(".form_controle .submit");

formValues.forEach((each) => {
	each.addEventListener("click", (e)=> {
		removeActiveClass()
		getInputValue(e)
	})
});

submitBtn.addEventListener("click", (e) => {
	displaySubmitMessage(e)
})

function getInputValue (e) {
	let value = e.target.value;
	e.target.classList.add("active");

	switch (value) {
		case "1":
			ratingCount.innerHTML = `You selected 1 out of 5`;
			break;
		case "2":
			ratingCount.innerHTML = `You selected 2 out of 5`;
			break;
		case "3":
			ratingCount.innerHTML = `You selected 3 out of 5`;
			break;
		case "4":
			ratingCount.innerHTML = `You selected 4 out of 5`;
			break;
		case "5":
			ratingCount.innerHTML = `You selected 5 out of 5`;
			break;
	}
}

function removeActiveClass() {
	formValues.forEach((each) => {
		each.classList.remove("active")
	})
}

function displaySubmitMessage(e) {
	e.preventDefault();
	submitMessageCont.classList.remove("hide");
	formCont.classList.add("hide")
}