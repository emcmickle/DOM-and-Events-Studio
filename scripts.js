// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() { 

   function setShuttleHeight(newShuttleHeight) {
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    shuttleHeight.innerHTML = newShuttleHeight;
   }

    takeoffButton = document.getElementById("takeoff");

    takeoffButton.addEventListener("click", function() {
       if (confirm("Confirm that the shuttle is ready for takeoff.")) {
           document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
           document.getElementById("shuttleBackground").style.background = "blue";
           setShuttleHeight(10000); 
       }
    });

    landButton = document.getElementById("landing");

    landButton.addEventListener("click", function() {
        confirm("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.background = "green";
        setShuttleHeight(0);
    });

    abortMissionButton = document.getElementById("missionAbort");

    abortMissionButton.addEventListener("click", function() {
        if (confirm("Confirm that you want to abort the mission.")) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.background = "green";
            setShuttleHeight(0);
        }
    });

    document.getElementById("down").addEventListener("click", function() {
        let tempHeight = window.getComputedStyle(document.getElementById('rocket')).top;
        document.getElementById('rocket').style.top = 'calc(' + tempHeight + ' + 10px)';
        setShuttleHeight(Number(document.getElementById("spaceShuttleHeight").innerHTML) - 10000);
    });

    document.getElementById("up").addEventListener("click", function() {
        let tempHeight = window.getComputedStyle(document.getElementById('rocket')).top;
        document.getElementById('rocket').style.top = 'calc(' + tempHeight + ' - 10px)';
        setShuttleHeight(Number(document.getElementById("spaceShuttleHeight").innerHTML) + 10000);
    });

    document.getElementById("right").addEventListener("click", function() {
        let tempLeft = window.getComputedStyle(document.getElementById('rocket')).left;
        document.getElementById('rocket').style.left = 'calc(' + tempLeft + ' + 10px)';
    });

    document.getElementById("left").addEventListener("click", function() {
        let tempLeft = window.getComputedStyle(document.getElementById('rocket')).left;
        document.getElementById('rocket').style.left = 'calc(' + tempLeft + ' - 10px)';
    });
    

});