document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    console.log(tabContents);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
       

            
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Show only the selected tab content
            document.getElementById(tabId).classList.add('active');

            // Mark the clicked tab as active
            tabs.forEach(t => {
                t.classList.remove('active');
            });
            tab.classList.add('active');
        });
    });
});
