window.addEventListener("scroll", function(){
  document.querySelector(".navbar").classList.toggle("shadow", window.scrollY > 50);
});

// GitHub Pages: Contact form submission
// Note: This requires a backend service to handle emails
// Options: Use Formspree, Netlify Forms, AWS Lambda, or similar service

const form = document.getElementById("contactForm");

if (form) {
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

    alert("Thank you for your message! We will contact you soon.");
    form.reset();
  });
}

// Social link tracking
document.querySelectorAll('.social-icons a').forEach(link => {
    link.addEventListener('click', function(e) {
        console.log("Social link clicked:", this.title);
    });
});

// Social links - Update these directly in your HTML
// For GitHub Pages, hardcode your social media links in the HTML instead of fetching from an API

