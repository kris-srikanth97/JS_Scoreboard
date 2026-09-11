let scoreElHome = document.getElementById("score-home")
let scoreElGuest = document.getElementById("score-guest")
let sum = 0
let sumOpp = 0
function addOne(){
    sum+=1
    scoreElHome.textContent = sum
    console.log(sum)
}
function addTwo(){
    sum+=2
    scoreElHome.textContent = sum
}
function addThree(){
    sum+=3
    scoreElHome.textContent = sum
}
function addOneOpp(){
    sumOpp+=1
    scoreElGuest.textContent = sumOpp
}
function addTwoOpp(){
    sumOpp+=2
    scoreElGuest.textContent = sumOpp
}
function addThreeOpp(){
    sumOpp+=3
    scoreElGuest.textContent = sumOpp
}