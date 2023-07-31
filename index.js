const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");
const homeScoreBtnOne = document.getElementById("hm-add-one");
const homeScoreBtnTwo = document.getElementById("hm-add-two");
const homeScoreBtnThree = document.getElementById("hm-add-three");
let homeScore = 0
let guestScore = 0


function addHomeScore(score) {
    homeScore += score
    homeScoreEl.textContent = homeScore
}


function addGuestScore(score) {
    guestScore += score
    guestScoreEl.textContent = guestScore
}
