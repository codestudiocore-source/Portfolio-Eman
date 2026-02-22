window.addEventListener("scroll", function(){
  document.querySelector(".navbar").classList.toggle("shadow", window.scrollY > 50);
});

// Detect if HTTPS or HTTP and set API endpoint accordingly
const apiURL = window.location.protocol === 'https:' 
  ? 'https://localhost:5000' 
  : 'http://localhost:5000';

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Client-side validation
  if (!name || !email || !message) {
    alert("Please fill in all fields");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email");
    return;
  }

  try {
    const response = await fetch(`${apiURL}/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        name: name.substring(0, 100), 
        email: email.substring(0, 100), 
        message: message.substring(0, 5000) 
      })
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message || "Message sent successfully!");
      form.reset();
    } else {
      alert(data.message || "Error sending message");
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Error sending message. Please try again later.");
  }
});

// Social link tracking
document.querySelectorAll('.social-icons a').forEach(link => {
    link.addEventListener('click', function(e) {
        console.log("Social link clicked:", this.title);
    });
});

// Fetch social links from API
fetch(`${apiURL}/api/social`)
  .then(res => {
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
  })
  .then(data => {
    if (data.linkedin) document.querySelector('.fa-linkedin')?.parentElement?.setAttribute('href', data.linkedin);
    if (data.github) document.querySelector('.fa-github')?.parentElement?.setAttribute('href', data.github);
    if (data.whatsapp) document.querySelector('.fa-whatsapp')?.parentElement?.setAttribute('href', data.whatsapp);
  })
  .catch(error => console.error('Error fetching social links:', error));

