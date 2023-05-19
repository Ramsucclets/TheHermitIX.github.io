// You can use JavaScript to dynamically update the link or perform other actions
// For example:
// document.getElementById('discord-link').href = 'YOUR_DYNAMIC_DISCORD_INVITE_LINK';

// Add some interactivity
document.getElementById('discord-link').addEventListener('mouseover', function() {
    this.innerText = 'Click to join!';
});

document.getElementById('discord-link').addEventListener('mouseout', function() {
    this.innerText = 'Join our Discord server';
});

document.getElementById('discord-button').addEventListener('click', function() {
    window.location.href = 'YOUR_DISCORD_INVITE_LINK';
});
