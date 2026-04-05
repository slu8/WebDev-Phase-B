// var declarations and console output
var x = 5
var y = 7
var z = x + y
console.log(z)

A = "Hello "
B = "world!"
var C = A + B
console.log(C)

// basic function
function sumnPrint(x1, x2) {
    console.log(x1 + x2)
}

sumnPrint(x, y)
sumnPrint(A, B)

// conditional statement
if (C.length > z) {
    console.log(C)
    if (C.length < z) {
        console.log(z)
    }
} else {
    console.log("good job!")
}

// arrays and loops
L1 = ["Watermelon","Pineapple","Pear","Banana"]
L2 = ["Apple","Banana","Kiwi","Orange"]

// function findTheBanana(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "Banana") {
//             alert("Banana Found!")
//         }
//     }
// }

// function findTheBanana(arr) {
//     arr.forEach(function(item) {
//         if (item == "Banana") {
//             alert("Banana Found!")
//         }
//     })
// }

// findTheBanana(L1)
// findTheBanana(L2)





// Part 3
var now = new Date()
var hour = now.getHours()

function greeting(h) {
    let timedGreeting = ""
    if (h < 5 || h >= 20) {
        timedGreeting = "Good Night"
    } else if (h < 12) {
        timedGreeting = "Good Morning"
    } else if (h < 18) {
        timedGreeting = "Good Afternoon"
    } else {
        timedGreeting = "Good Evening"
    }

    elem = document.getElementById("greeting")
    if (elem != null) {
        elem.innerHTML = timedGreeting + ", and Welcome to the MonoMuse Museum";
    }
}
    

greeting(hour)



// Part 4
function addYear() {
    document.getElementById("copyYear").innerHTML = new Date().getFullYear()
}

