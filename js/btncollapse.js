document.addEventListener('DOMContentLoaded', function() {
            var collapseElement = document.getElementById('featureDetails');
            var collapseButton = document.querySelector('[data-bs-target="#featureDetails"]');
            var buttonTextSpan = collapseButton.querySelector('.btn-text'); // Get the span for text

            // Set initial state of the button text
            if (collapseButton.getAttribute('aria-expanded') === 'true') {
                buttonTextSpan.textContent = 'Hide other journals';                
            } else {
                buttonTextSpan.textContent = 'Register with other journals';
                collapseButton.querySelector('.fa-xmark').style.display = 'none';
            }

            collapseElement.addEventListener('show.bs.collapse', function () {
                buttonTextSpan.textContent = 'Hide other journals';
                // If using two icons, manually toggle their display here:
                collapseButton.querySelector('.fa-plus').style.display = 'none';
                collapseButton.querySelector('.fa-xmark').style.display = 'inline-block';
            });

            collapseElement.addEventListener('hide.bs.collapse', function () {
                buttonTextSpan.textContent = 'Register with other journals';
                // If using two icons, manually toggle their display here:
                collapseButton.querySelector('.fa-plus').style.display = 'inline-block';
                collapseButton.querySelector('.fa-xmark').style.display = 'none';
            });
        });