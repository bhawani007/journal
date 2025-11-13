
    function goToStep(stepNumber) {
        const totalSteps = 5;
        const progressBar = document.querySelector('.progress-bar');
        const percentage = (stepNumber / totalSteps) * 100;
        progressBar.style.width = percentage + '%';
        progressBar.setAttribute('aria-valuenow', percentage);
        progressBar.textContent = percentage + '%';

        // Activate the new tab
        const newTabId = `#step${stepNumber}`;
        const newTabLink = document.querySelector(`.progress-tab-link[href="${newTabId}"]`);
        const tab = new bootstrap.Tab(newTabLink);
        tab.show();

        // Update active/completed classes for visual progress
        document.querySelectorAll('.progress-tab-link').forEach((link, index) => {
            link.classList.remove('active', 'completed');
            if (index + 1 < stepNumber) {
                link.classList.add('completed');
            } else if (index + 1 === stepNumber) {
                link.classList.add('active');
            }
            // Enable/disable navigation based on current step
            if (index + 1 <= stepNumber) {
                link.classList.remove('disabled');
            } else {
                link.classList.add('disabled');
            }
        });

        // For the last step, change icon to checkmark if completed
        if (stepNumber === totalSteps) {
             const lastStepIconWrapper = document.querySelector('#step5 .progress-tab-icon-wrapper');
             lastStepIconWrapper.innerHTML = '<i class="bi bi-check-lg"></i>';
        } else if (stepNumber < totalSteps) {
            // Reset icon if navigating back from completion
            const lastStepIconWrapper = document.querySelector('#step5 .progress-tab-icon-wrapper');
             lastStepIconWrapper.innerHTML = '5';
        }
    }

    // Initialize with current step (e.g., if page reloads)
    document.addEventListener('DOMContentLoaded', () => {
        // You might want to get the current step from a URL parameter or local storage
        // For this example, we start at step 1
        goToStep(1);
        
    });
