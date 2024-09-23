let userName = prompt("Lütfen isminizi giriniz:")

let myName = document.querySelector("#myName")

let myClock = document.querySelector("#myClock")

let now = new Date()

let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()

hours = hours > 10 ? hours : "0" + hours
minutes = minutes > 10 ? minutes : "0" + minutes
seconds = seconds > 10 ? seconds : "0" + seconds

let daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
let day = daysOfWeek[now.getDay()]

myName.innerHTML = userName
myClock.innerHTML = `${hours} ${":"} ${minutes} ${":"} ${seconds} ${day}`