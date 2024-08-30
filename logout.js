document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout.html');
    const modal = document.getElementById('logoutModal');
    const stayInBtn = document.getElementById('stayInBtn');
    const confirmLogoutBtn = document.getElementById('confirmLogoutBtn');

    logoutBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });


    stayInBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    confirmLogoutBtn.addEventListener('click', function() {
        // Perform logout action here
        alert('Logging out...');
        // Redirect to login page or perform other logout actions
        window.location.href = 'index.html';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});