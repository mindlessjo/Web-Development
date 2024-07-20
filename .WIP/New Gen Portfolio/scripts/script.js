document.addEventListener("DOMContentLoaded", function() {
    const projectContainer = document.getElementById('project-container');
    const contentBox = document.getElementById('content-box');

    projectContainer.addEventListener('mouseover', function() {
        contentBox.style.height = '100%';
        contentBox.style.width = '100%';
    });

    projectContainer.addEventListener('mouseout', function() {
        contentBox.style.height = '';  // Reset or specify another height
        contentBox.style.width = '0px';
    });
});