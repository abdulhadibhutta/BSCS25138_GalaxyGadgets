window.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname.includes('Home')){
        alert('Welcome to Galaxy Gadgets!');
    }
    const yearSpan = document.getElementById('year');
    if(yearSpan){
        yearSpan.textContent = new Date().getFullYear();
    }
})

function checkstock(productId){
    const product = document.getElementById(productId);
    if(!product) return;
    const availabilityText = product.querySelector('p:nth-of-type(2)').textContent;
    alert(availabilityText);
}

function isValidEmail(email){
    if(!email.includes('@')){
        alert("Email must contain '@'");
        return false;
    }
    if(!email.includes('.')){
        alert("Email must contain '.'");
        return false;
    }
    if(email.indexOf('@') > email.lastIndexOf('.')){
        alert("'@' must come before '.' in email");
        return false;
    }
    if(email.includes(' ')){
        alert("Email must not contain spaces");
        return false;
    }
    if(email.legth < 5){
        alert("Email is too short");
        return false;
    }
    return true;
}

function validateForm(){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     document.getElementById("user-input").addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            sendMessage();
        }
    });

    if(!isValidEmail(email)){
        return false;
    }

    if(!name || !email || !message){
        alert('Please fill in all fields.');
        return false;
    }

    if(!emailRegex.test(email)){
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}

function sendMessage(){
    const inputField = document.getElementById("user-input");
    let input = inputField.value.trim().toLowerCase();

    if(!input) return;

    const chatlog = document.getElementById("chat-log");
    
    let userMSG = document.getElementById("p")
    userMSG.textContent = "You: " + inputField.value.trim();
    userMSG.style.fontWeight = "bold";
    chatLog.appendChild(userMSG);

    let botReply = getBotResponse(input);

    let botMSG = document.createElement("p");
    botMSG.textContent = "Bot: " + botReply;
    botMSG.style.color = "#f39c12";
    chatLog.appendChild(botMSG);

    chatLog.scrollTop = chatLog.scrollHeight;

    inputField.value = "";

     document.getElementById("user-input").addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            sendMessage();
        }
    });
}

function getBotResponse(input){
    if(input.includes("hello") || input.includes("hi")){
        return "Hello! How can I assist you today?";
    }
    else if(input.includes("products")){
        return "We offer a variety of gadgets including laptops, smartphones, smartwatches and speakers.";
    } 
    else if(input.includes("price")){
        return "Our prices range from Rs 35,000 to Rs 350,000 depending on the product."; 
    }
    else if(input.includes("stock") || input.includes("available")){
        return "Most of our products are currently in stock. You cam check the availability on the products page.";
    }
    else if(input.includes("contact")){
        return "You can contact us at +92 326 1302737 or email us at bscs25138@itu.edu.k.";
    }
    else if(input.includes("location") || input.includes("where")){
        return "We are located in Lahore, Pakistan.";
    }

    else if(input.includes("thank")){
        return "You're welcome! If you have any more questions, feel free to ask.";
    }
    else{
        return "Sorry! I didn't understand that. Could you please rephrase your question?";
    }
}