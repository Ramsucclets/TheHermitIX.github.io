// Add some interactivity
document.getElementById('discord-button').addEventListener('mouseover', function() {
    this.innerText = 'Click to join!';
});

document.getElementById('discord-button').addEventListener('mouseout', function() {
    this.innerText = 'Join our Discord server';
});

document.getElementById('discord-button').addEventListener('click', function() {
    window.location.href = 'YOUR_DISCORD_INVITE_LINK';
});

