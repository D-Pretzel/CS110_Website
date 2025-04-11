// Show the corresponding leaderboard based on the selected game
function showLeaderboard() {
    // Hide all leaderboards
    document.querySelectorAll('.game-leaderboard').forEach(table => {
        table.style.display = 'none';
    });

    // Get selected game from the dropdown
    const selectedGame = document.getElementById('gameSelect').value;

    // Show the selected game's leaderboard
    document.getElementById(selectedGame).style.display = 'table';
}

// Initial display of Game 1 leaderboard on page load
window.onload = function () {
    showLeaderboard();
}