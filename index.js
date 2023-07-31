let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeScoreBtnOne = document.getElementById("hm-add-one");
let homeScoreBtnTwo = document.getElementById("hm-add-two");
let homeScoreBtnThree = document.getElementById("hm-add-three");
let homeScore = 0
let guestScore = 0

function addHmScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addHmScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addHmScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}