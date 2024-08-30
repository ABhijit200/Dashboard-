document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const timeElement = document.getElementById('time');
        const dateElement = document.getElementById('day');
        const now = new Date();
        
        // Get hours, minutes, seconds
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        
        // Format time string
        const strTime = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds) + ' ' + ampm;
        
        // Format date string
        const day = now.getDate();
        const month = now.getMonth() + 1; // Months are 0-based
        const year = now.getFullYear();
        const strDate = day + '-' + month + '-' + year;
        
        // Update DOM elements
        timeElement.textContent = strTime;
        dateElement.textContent = strDate;
    }

    // Update time every second fire
    setInterval(updateTime, 1000);
    
    // Initial call to display time immediately
    updateTime();
});   
