let homeS = 0
let guestS = 0

function increment(num,side){
    if(side == "home"){
        let target = document.getElementById("homeScore")
        homeS += num
        target.textContent = homeS
    }
    if(side == "guest"){
        let target = document.getElementById("guestScore")
        guestS += num
        target.textContent = guestS
    }
    
}