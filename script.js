// document.getElementById("newsletter-form").addEventListener("submit", function(event) {
//     event.preventDefault(); 
//     // Prevent form from submitting normally
    
//     var userEmail = document.getElementById("user-email").value;
    
//     // Parameters for the email template
//     var templateParams = {
//         to_email: userEmail,
//         message: "Thank you for subscribing to our newsletter!"
//     };

//     emailjs.send('service_w8u9clg', 'template_u3b496l', templateParams)
//         .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);
//             alert("Newsletter subscription successful!");
//         }, function(error) {
//             console.log('FAILED...', error);
//             alert("Subscription failed. Please try again.");
//         });
// });


function sendMail(){
    let parms ={
        email : document.getElementById("user-email")

    }

    emailjs.send('service_w8u9clg' , 'template_u3b496l',parms).then(alert("Email Sent!!"))
}
