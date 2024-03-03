document.addEventListener("DOMContentLoaded", function() {
    // Array of learning activities
    const learningActivities = [
        { week: 'Week 1', activity: 'Layout | Media Query | JS Pen' },
        { week: 'Week 2', activity: '' }, // Placeholder for Week 2
        { week: 'Week 3', activity: '' }, // Placeholder for Week 3
        { week: 'Week 4', activity: '' }, // Placeholder for Week 4
        { week: 'Week 5', activity: '' }, // Placeholder for Week 5
        { week: 'Week 6', activity: '' }  // Placeholder for Week 6
    ];

    // Get the ul element to populate
    const learningList = document.getElementById('learningActivities');

    // Loop through the learning activities array and create list items
    learningActivities.forEach(activity => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = '#'; // Placeholder link
        anchor.textContent = `${activity.week}: ${activity.activity}`;
        listItem.appendChild(anchor);
        learningList.appendChild(listItem);
    });
    
    // Get last modified date
    const lastModifiedDate = document.lastModified;

    // Get the element with id "lastModified"
    const lastModifiedElement = document.getElementById('lastModified');

    // Set the text content of the element to the last modified date
    lastModifiedElement.textContent = "Last Modified: " + lastModifiedDate;
});