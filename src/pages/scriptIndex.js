 function handleTeamChoice(team) {
    localStorage.setItem('team', team);
    window.location.href = `/pages/quiz.html`;
}
