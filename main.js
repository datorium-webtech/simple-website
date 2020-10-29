document.querySelector(".signup form").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Submit was pressed!");
});

function goToSignUpForm() {
    document.querySelector(".signup").scrollIntoView();
}
