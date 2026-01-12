
// function to create dynamically a new element in a desired container
function createElement(type, container, className, innerText) {
    const element = document.createElement(type);
    if (className) element.className = className;
    if (innerText) element.innerText = innerText;
    container.appendChild(element);
    return element;
}

// Load from body
document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    
    // Create a header
    createElement('header', body, 'main-header', 'Welcome to S ENG TRAINER');
    // Create a main section
    const mainSection = createElement('main', body, 'main-section');
    createElement('h2', mainSection, null, 'Train Your English Skills');
    createElement('p', mainSection, null, 'This is a simple trainer to help you improve your English skills.');

    //Create cards with exercises
    const exercises = [
        { title: 'Vocabulary Builder', description: 'Learn new words every day.' },
        { title: 'Grammar Practice', description: 'Improve your grammar skills.' },
        { title: 'Listening Exercises', description: 'Enhance your listening comprehension.' }
    ];

    const cardsContainer = createElement('div', mainSection, 'cards-container');
    exercises.forEach(exercise => {
        const card = createElement('div', cardsContainer, 'exercise-card');
        createElement('h3', card, null, exercise.title);
        createElement('p', card, null, exercise.description);
    });

    

    // Create a footer
    createElement('footer', body, 'main-footer', '© 2024 S ENG TRAINER');
});