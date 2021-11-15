

var createTeamLogo = document.getElementById("logo")
createTeamLogo.addEventListener("submit",function(e){
    e.preventDefault();
    var teamLogo = {
        teamLogo:createTeamLogo?.teamLogo?.value,
        teamName:createTeamLogo.teamName?.value,
    }
    document.getElementById("logo").reset();
    console.log(teamLogo)
})
 
var createTeamForm = document.getElementById("team");

var playerData = JSON.parse(localStorage.getItem("allPlayers"));

createTeamForm.addEventListener("submit", function(e){
    e.preventDefault();
    var teamData= {
        
        Name:createTeamForm.playerName?.value,
        Role:createTeamForm.playerStatus?.value,
        photo:createTeamForm.playerImage?.value,
        Team:createTeamForm.playerTeam?.value,
        Price:createTeamForm.playerPrice?.value,

    }
    document.getElementById("team").reset();
    playerData.push(teamData)
    // localStorage.setItem("allPlayers",playerData)
    if(teamData != null){
    localStorage.setItem("allPlayers",JSON.stringify(playerData))

    }
    console.log(playerData)
})
// localStorage.setItem("allPlayers" , JSON.stringify(playerList));
