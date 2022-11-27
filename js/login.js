

document.getElementById('submit-button').addEventListener('click', function () {

    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;

    if (userEmail == 'ashik98@gmail.com' && userPassword == 654321) {
        window.location.href = "banking.html";
    }
})