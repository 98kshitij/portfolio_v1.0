const terminalContent = document.getElementById('terminal-content');
const commandInput = document.getElementById('command-input');

// Terminal commands
const commands = {
    help: 'Available commands: about, skills, projects, contact, linkedin, github, clear',
    about: 'Hi, I\'m Kshitij, a passionate software developer with experience in HTML, CSS, JavaScript, Java, and Python',
    skills: 'Skills: HTML, CSS, JavaScript, Java, Spring, SpringBoot, and AWS',
    projects: `
1. Portfolio Website - A personal portfolio to showcase my projects.`,
    contact: 'You can reach me via kmr.kshitij@gmail.com or check out my profiles on LinkedIn and GitHub.',
    linkedin: 'LinkedIn profile: https://www.linkedin.com/in/98kshitij',
    github: 'GitHub profile: https://github.com/98kshitij',
    clear: ''
};

// Command input handler
commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = commandInput.value.trim().toLowerCase();

        // Print typed command
        terminalContent.innerHTML += `<div><span class="prompt">[kshitij@portfolio]$</span> ${input}</div>`;

        // Check if command exists and display result
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

        // Clear input field
        commandInput.value = '';
    }
});
