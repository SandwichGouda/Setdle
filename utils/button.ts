const button = document.getElementById('replay-button') as HTMLElement ;

function updateButtonState(hue1: string, hue2 : string) : void {
    button.style.setProperty('--hue-1', hue1);
    button.style.setProperty('--hue-2', hue2);
}

button.addEventListener('mouseenter', () => updateButtonState("230", "290"));
button.addEventListener('mouseleave', () => updateButtonState("200", "260"));
button.addEventListener('mousedown', () => updateButtonState("260", "320"));
button.addEventListener('mouseup', () => updateButtonState("230", "290"));

// Touch events for mobile devices
button.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent default touch behavior
    updateButtonState("260", "320");
});

button.addEventListener('touchend', () => {
    updateButtonState("200", "260");
});