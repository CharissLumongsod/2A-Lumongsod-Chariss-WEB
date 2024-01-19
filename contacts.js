// contacts.js

function submitForm() {
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var comment = document.getElementsByName("text")[0].value;

    if (name.trim() === '' || comment.trim() === '') {
        alert("Please fill in both name and comment fields.");
        return;
    }


    // Display success message
    alert("Comment successfully submitted");

}
