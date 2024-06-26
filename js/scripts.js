// load a websites.html template on startup
document.addEventListener('DOMContentLoaded', () => {
    fetch('projects.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('contentContainer').innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
});

// load a specified template
function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('contentContainer').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Activate '+' and '-' buttons in experience section
document.addEventListener('DOMContentLoaded', () => {
const jobItems = document.querySelectorAll('.job-item');
jobItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        });
    });
});
