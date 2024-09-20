const terminalContent = document.getElementById('terminal-content');
const commandInput = document.getElementById('command-input');

// Terminal commands
const commands = {
    help: 'Available commands: about, skills, projects, contact, linkedin, github, email, clear',
    about: 'Hi, I\'m Kshitij, a passionate software developer with experience in HTML, CSS, JavaScript, Java and Python.',
    skills: 'Skills: HTML, CSS, JavaScript, Java, Spring, SpringBoot, AWS, Docker, Git',
    projects: `
1. Portfolio Website - A personal portfolio to showcase my projects.`,
    contact: 'You can reach me via email or check out my profiles on LinkedIn and GitHub.',
    linkedin: 'LinkedIn profile: https://www.linkedin.com/in/98kshitij',
    github: 'GitHub profile: https://github.com/98kshitij',
    email: 'Email: kmr.kshitij@gmail.com',
    clear: ''
};

// Typing effect function
function typeEffect(text, element, callback) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text[index];
            index++;
            setTimeout(type, 50);
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Command handler
function handleCommand(input) {
    const outputElement = document.createElement('div');
    const promptElement = document.createElement('span');
    promptElement.classList.add('prompt');
    promptElement.innerHTML = '[kshitij@ubuntu:~]$ ';
    outputElement.appendChild(promptElement);
    
    outputElement.innerHTML += input;
    terminalContent.appendChild(outputElement);

    const responseElement = document.createElement('div');

    if (commands[input]) {
        if (input === 'clear') {
            terminalContent.innerHTML = ''; // Clear the terminal content
        } else {
            typeEffect(commands[input], responseElement, () => {
                // Open external links
                if (input === 'linkedin') window.open('https://www.linkedin.com/in/98kshitij', '_blank');
                if (input === 'github') window.open('https://github.com/98kshitij', '_blank');
                if (input === 'email') window.open('mailto:kmr.kshitij@gmail.com');
            });
        }
    } else {
        typeEffect(`Command not found: ${input}`, responseElement);
    }

    terminalContent.appendChild(responseElement);
    terminalContent.scrollTop = terminalContent.scrollHeight;
}

// Event listener for input
commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = commandInput.value.trim().toLowerCase();
        handleCommand(input);
        commandInput.value = ''; // Clear input
    }
});