document.getElementById('myForm').addEventListener('submit', function(event) {
    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.classList.add('hidden'));

    let isValid = true;

    // Username validation
    let username = document.getElementById('username').value;
    if (username.length < 4) {
        document.getElementById('usernameError').classList.remove('hidden');
        isValid = false;
    }

    // Password validation
    let password = document.getElementById('password').value;
    if (!/^[a-zA-Z].*#$/.test(password)) {
        document.getElementById('passwordError').classList.remove('hidden');
        isValid = false;
    }

    // Country validation
    let country = document.getElementById('country').value;
    console.log(country)
    if (!country) {
        document.getElementById('countryError').classList.remove('hidden');
        isValid = false;
    }

    // Gender validation
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').classList.remove('hidden');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
