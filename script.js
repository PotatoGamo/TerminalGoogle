document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');

    inputElement.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            processCommand(inputElement.value);
            inputElement.value = '';
        }
    });

    function processCommand(command) {
        const output = executeCommand(command);
        outputElement.textContent += '> ' + command + '\n' + output + '\n';
        outputElement.scrollTop = outputElement.scrollHeight;
    }

    function executeCommand(command) {
        // You can implement your logic for command execution here
        // For example, a simple echo command
        return command;
    }
});
