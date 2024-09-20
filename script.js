const terminalContent = document.getElementById('terminal-content');
const commandInput = document.getElementById('command-input');

// Fake terminal commands
const commands = {
    help: 'Available commands: about, skills, projects, contact, clear',
    about: 'Hi, I\'m Kshitij, a passionate web developer with experience in HTML, CSS, and JavaScript.',
    skills: 'Skills: HTML, CSS, JavaScript, React, Node.js',
    projects: 'Projects:\n1. Portfolio Website\n2. E-commerce Application\n3. To-Do List',
    contact: 'You can reach me via email at kshitijinfo@example.com or follow me on LinkedIn: https://linkedin.com/in/kshitij',
    clear: ''
};

// Handle the command input
commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = commandInput.value.trim().toLowerCase();
        
        // Create a new line with the typed command
        terminalContent.innerHTML += `<div><span class="prompt">[portfolio@kshitij]$</span> ${input}</div>`;

        // Check if the command exists and display the result
        if (commands[input]) {
            if (input === 'clear') {
                terminalContent.innerHTML = ''; // Clear terminal content
            } else {
                terminalContent.innerHTML += `<div>${commands[input]}</div>`;
            }
        } else {
            terminalContent.innerHTML += `<div>Command not found: ${input}</div>`;
        }
        
        // Scroll to the bottom
        terminalContent.scrollTop = terminalContent.scrollHeight;
        
        // Clear the input field
        commandInput.value = '';
    }
});
