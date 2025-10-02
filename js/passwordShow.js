 document.addEventListener('DOMContentLoaded', function() {
            // Get references to the password input and its toggle icon
            const togglePassword = document.getElementById('togglePassword');
            const password = document.getElementById('password');

            // Add click event listener to the main password toggle icon
            togglePassword.addEventListener('click', function() {
                // Toggle the type attribute between 'password' and 'text'
                const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                password.setAttribute('type', type);

                // Toggle the Font Awesome eye icons (fa-eye and fa-eye-slash)
                // This makes the icon visually change
                this.querySelector('i').classList.toggle('fa-eye');
                this.querySelector('i').classList.toggle('fa-eye-slash');
            });

            // Get references to the confirm password input and its toggle icon
            const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
            const confirmPassword = document.getElementById('confirmPassword');

            // Add click event listener to the confirm password toggle icon
            toggleConfirmPassword.addEventListener('click', function() {
                // Toggle the type attribute between 'password' and 'text'
                const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
                confirmPassword.setAttribute('type', type);

                // Toggle the Font Awesome eye icons (fa-eye and fa-eye-slash)
                // This makes the icon visually change
                this.querySelector('i').classList.toggle('fa-eye');
                this.querySelector('i').classList.toggle('fa-eye-slash');
            });
        });