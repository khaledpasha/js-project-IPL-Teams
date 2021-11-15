window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "dark2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Wins by Various Teams from 2008-2021"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 35.71, label: "Mumbai Indians" },
                { y: 21.43, label: "Chennai Super Kings" },
                { y: 14.29, label: "Kolkata Knight Riders" },
                { y: 7.14, label: "Rajasthan Royals" },
                { y: 14.29, label: "Sunrisers Hyderabad" },
                { y: 7.14, label: "Royal Challengers Bangalore" }
            ]
        }]
    });
    chart.render();
    
    }
$(document).ready(function(){
    var teamList=[{
        teamName:"KKR",
        teamIcon:"https://th.bing.com/th/id/R.c2d2d764904a8ece4b438a3c85eb8447?rik=nsXRkYzyPL6Org&riu=http%3a%2f%2f4.bp.blogspot.com%2f-1HvoKL0zEUs%2fUD793cbwEVI%2fAAAAAAAAAHc%2f1vMqckfsGds%2fs1600%2fKolkata+Knight+Riders+Logo+Wallpaper+89.jpg&ehk=k2UNiBZdH1fbDByRc1jMlPSJjztH1BRin2BkA0neuWY%3d&risl=&pid=ImgRaw&r=0",
        playerCount:17,
        topBatsman:"Shubman Gill",
        topBowler:"Varun Chakravarthy",
        winningStreak:2
    },
    {
        teamName:"CSK",
        teamIcon:"https://i.pinimg.com/originals/ea/40/fd/ea40fd13fa7d46618c5567146f07ba41.png",
        playerCount:25,
        topBatsman:"Suresh Raina",
        topBowler:"Dwayne Bravo",
        winningStreak:3
    },
    {
        teamName:"MI",
        teamIcon:"https://th.bing.com/th/id/R.354e03e0127358036082a9fd6166c6e9?rik=piIGU2XUBurikA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2017%2f04%2fMumbai-Indians-Logo-PNG.png&ehk=tmeZwa2lUNe89H8GizIxtxeDPGvQQHdSyH0Ayl3KXoo%3d&risl=&pid=ImgRaw",
        playerCount:14,
        topBatsman:"Rohit Sharma",
        topBowler:"Lasith Malinga",
        winningStreak:5
    },
    {
        teamName:"DC",
        teamIcon:"https://d1q6kvh8ntrf2h.cloudfront.net/s3fs-public/vendor/ipl_dclogo.png",
        playerCount:19,
        topBatsman:"Virender Sehwag",
        topBowler:"Kagiso Rabada",
        winningStreak:0
    },
    {
        teamName:"RCB",
        teamIcon:"https://th.bing.com/th/id/R.245d565e5fa3e4fed45bd04d2da6c082?rik=H6zA0PgwW0gw3w&riu=http%3a%2f%2fwww.freelogovectors.net%2fwp-content%2fuploads%2f2020%2f02%2froyal_challengers_bangalore_logo.png&ehk=Shn9XwpnaupWdKZ0vQ90IpiiECYu%2bnlEANzV%2fK%2fGWIE%3d&risl=&pid=ImgRaw",
        playerCount:12,
        topBatsman:"David Warner",
        topBowler:"Yuzvendra Chahal",
        winningStreak:1 
    },
    {
        teamName:"KXIP",
        teamIcon:"https://th.bing.com/th/id/OIP.clSKSkoGpEotIgSpPRriFgHaIX?pid=ImgDet&rs=1",
        playerCount:16,
        topBatsman:"Dawid Malan",
        topBowler:"Piyush Chawla",
        winningStreak:0
    },
    {
        teamName:"SH",
        teamIcon:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6cc9fc11853659.562536dbd97cf.jpg",
        playerCount:22,
        topBatsman:"David Warner",
        topBowler:"Rashid Khan",
        winningStreak:2
    },
    {
        teamName:"RR",
        teamIcon:"https://i.ytimg.com/vi/_CDxnRegcDw/maxresdefault.jpg",
        playerCount:17,
        topBatsman:"Shivam Dube",
        topBowler:"Jofra Archer",
        winningStreak:1
    }];
    $(".card").click(function(){
        for(var i=0;i<teamList.length;i++){
            if($(this).find(".card-title").html()==teamList[i].teamName){
                localStorage.setItem("teamDetails",JSON.stringify(teamList[i]));
                location.assign("teams.html");
            }
        }
    })
    $('.search-input-box').on("keyup", function() {
        var value = $(this).val().toUpperCase();
        $(".card").each(function(){
            var found="false";
            var title=$(this).children(".card-img-overlay").children(".card-title").html();
            if(title.indexOf(value)>=0)
            found="true";
            if(found=="true")
            $(this).show();
            else
            $(this).hide();
        });
      });
})
