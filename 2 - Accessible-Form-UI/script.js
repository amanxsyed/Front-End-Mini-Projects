const fields = ['fullname', 'email', 'password', 'confirm-password'];
let completion = 0;

// Add event listeners to all input fields
fields.forEach(field => {
    document.getElementById(field).addEventListener('input', updateProgress);
});

function updateProgress() {
    let filled = fields.filter(id => document.getElementById(id).value.trim() !== '').length;
    completion = (filled / fields.length) * 100;

    // Update progress text
    document.getElementById('progress-text').textContent = `${completion}%`;

    // Change circle border color based on progress
    document.querySelector('.progress-circle').style.borderColor = `hsl(${completion}, 100%, 50%)`;

    // Update completeness section
    updateCompleteness();
}

function updateCompleteness() {
    updateStatus('fullname', 'name-status');
    updateStatus('email', 'roadmap-status');
    updateStatus('password', 'public-profile-status');
    updateStatus('confirm-password', 'project-status');
}

function updateStatus(inputId, statusId) {
    let input = document.getElementById(inputId).value.trim();
    let statusElement = document.getElementById(statusId);

    if (!statusElement) {
        console.error(`Element with ID '${statusId}' not found`);
        return;
    }

    if (input !== '') {
        statusElement.innerHTML = `${statusElement.getAttribute('data-label')} <span class="tick">✔</span>`;
    } else {
        statusElement.innerHTML = `${statusElement.getAttribute('data-label')} <span class="cross">✖</span>`;
    }
}

// Password validation
document.getElementById('update-profile').addEventListener('click', function() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('password-error').style.display = 'block';
    } else {
        document.getElementById('password-error').style.display = 'none';
        alert('Profile Updated Successfully!');
    }
});

function togglePassword(id) {
    let input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

