//document.getElementById('count-el').innerText=5;

// let firstBatch = 5
// let secondBatch = 7
// let count= firstBatch + secondBatch

// function jump() {
//   console.log(42)
// }

// jump()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTime() {
//   let totalTime = lap1 + lap2 + lap3
//   console.log(totalTime)
// }

// logLapTime()

// let hit1 = 40
// let hit2 = 42
// let hit3 = 44

// function hitDamage() {
//   let totalDamage = hit1 + hit2 + hit3
//   console.log(totalDamage)
// }

// hitDamage()

// let score1 = 82
// let score2 = 80
// let score3 = 84

// function totalScore() {
//   let allScore = score1 + score2 + score3
//   console.log(allScore)
// }

// totalScore()

// let count1 = 20
// let count2 = 30
// let count3 = 35
// let count4 = 21

// function completeCount() {
//   let totalCount = count1 + count2 + count3 + count4
//   console.log(totalCount)
// }

// completeCount()

// let lapsCompleted = 0
 
// function incrementLap() {
//      lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count = count + 1
  countEl.textContent = count
}
  
function save() {
  let countStr = count + " - "
  saveEl.textContent = saveEl.textContent + countStr
  countEl.textContent = 0
  count = 0
}

// let username = "Maliwan"

// let message = "You have 3 new notifications"



// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser)

// let name = " Alucard"

// let greeting = "Hi, my name is"

// let myGreeting = greeting + name

// console.log(myGreeting)

// console.log(4 + 5)
// console.log("2" + "4")
// console.log("5" + 1)
// console.log(100 + "100")

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Alucard"

// let greeting = "Hello " 

// welcomeEl.innerText = greeting + name

// let username = "Bones"
// let message ="You have three new notifications, "
// let alert = message + username

// document.getElementById('message-el').innerText = alert;

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Boris"
// let greetings = "Hello and good morning, "

// welcomeEl.innerText = greetings + name

// console.log(welcomeEl.innerText)

