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


// ----------Increment 4----------
// active nav bar
function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}
ActiveNav();


// When the "Read Less" button is clicked
$("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });



// show form when buy now button is clicked, get and prefill date
$(".buy_button").click(function() {

    var selectedDate = $(this).data("date");
    $("#visit_date").val(selectedDate);

    $("#purchase_form").show();

});



// ----------Increment 5----------
function toggleMenu() {
    const nav = document.querySelector(".nav_bar");
    nav.classList.toggle("responsive");
}


if (typeof L !== "undefined" && document.getElementById("map")) {
    // Initialize the Leaflet map
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Add a marker
    var marker = L.marker([51.5, -0.09]).addTo(map);
}





const ticketPrices = { "Adult": 18, "Student": 10, "Member": 15 };

function updateTotal() {
    const type = $('#ticket_type').val() || "Adult";
    const qty = parseInt($('#quantity').val()) || 1;
    const price = ticketPrices[type] || 18;
    $('#total_price').text(price * qty);
}

$('#ticket_type, #quantity').on('change keyup', updateTotal);

$('#purchase_form').submit(function(e){
    e.preventDefault();
    let valid = true;

    // Clear previous error styles
    $('.error').remove();

    // Validate required fields
    if(!$('#ticket_type').val()) {
        $('#ticket_type').after('<span class="error">Please select a ticket type.</span>');
        valid = false;
    }
    if(!$('#quantity').val() || $('#quantity').val() < 1 || $('#quantity').val() > 10) {
        $('#quantity').after('<span class="error">Quantity must be 1–10.</span>');
        valid = false;
    }
    if(!$('#visit_date').val()) {
        $('#visit_date').after('<span class="error">Please select a visit date.</span>');
        valid = false;
    }
    if(!$('#email').val() || !/\S+@\S+\.\S+/.test($('#email').val())) {
        $('#email').after('<span class="error">Please enter a valid email.</span>');
        valid = false;
    }
    if($('#zip').val() && !/^\d{5}$/.test($('#zip').val())) {
        $('#zip').after('<span class="error">Zip must be 5 digits.</span>');
        valid = false;
    }

    if(!valid) return;

    // Redirect to confirmation page with query params
    const total = $('#total_price').text();
    const params = $.param({
        ticket: $('#ticket_type').val(),
        quantity: $('#quantity').val(),
        date: $('#visit_date').val(),
        email: $('#email').val(),
        zip: $('#zip').val(),
        mailing: $('#mailing_list').is(':checked') ? 'Yes' : 'No',
        total: total
    });
    window.location.href = 'confirmation.html?' + params;
});

updateTotal();

