const fields = ['fname', 'email', 'password', 'confirm-password'];
        let completion = 0;

        fields.forEach(field => {
            document.getElementById(field).addEventListener('input', updateProgress);
        });

        function updateProgress() {
            let filled = fields.filter(id => document.getElementById(id).value.trim() !== '').length;
            completion = (filled / fields.length) * 100;
            document.getElementById('progress-text').textContent = `${completion}%`;
            document.getElementById('progress-circle').style.borderColor = `hsl(${completion}, 100%, 50%)`;
            updateCompleteness();
        }

        function togglePassword(id) {
            let input = document.getElementById(id);
            input.type = input.type === 'password' ? 'text' : 'password';
        }

        function updateCompleteness() {
            updateStatus('fname', 'name-status');
            updateStatus('email', 'roadmap-status');
            updateStatus('password', 'public-profile-status');
            updateStatus('confirm-password', 'project-status');
        }

        function updateStatus(inputId, statusId) {
            let input = document.getElementById(inputId).value.trim();
            let statusElement = document.getElementById(statusId);
            if (input !== '') {
                statusElement.innerHTML = statusElement.innerHTML.split(' ')[0] + ' <span class="tick">✔</span>';
            } else {
                statusElement.innerHTML = statusElement.innerHTML.split(' ')[0] + ' <span class="cross">✖</span>';
            }
        }
        document.getElementById('update-profile').addEventListener('click', function() {
            let password = document.getElementById('password').value;
            let confirmPassword = document.getElementById('confirm-password').value;
            if (password !== confirmPassword) {
                document.getElementById('password-error').style.display = 'block';
            } else {
                document.getElementById('password-error').style.display = 'none';
                alert('Profile Updated');
            }
        });