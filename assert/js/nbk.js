 document.addEventListener('DOMContentLoaded', function () {
      const navLinks = document.querySelectorAll('#navbar-links .nav-link');
      const hideNavItems = ['Services', 'About Us', 'Contact Us'];
      const toggleNavItems = document.querySelectorAll('.toggle-nav');

      navLinks.forEach(link => {
        link.addEventListener('click', function () {
        


          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');

          const linkText = this.textContent.trim();

        
          if (hideNavItems.includes(linkText)) {
            toggleNavItems.forEach(item => item.classList.add('hidden'));
          } else {
            toggleNavItems.forEach(item => item.classList.remove('hidden'));
          }
        });
      });
    });
     function scrollLeft() {
    const container = document.getElementById('scrollRow');
    const scrollAmount = container.clientWidth;
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  function scrollRight() {
    const container = document.getElementById('scrollRow');
    const scrollAmount = container.clientWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

   document.querySelectorAll('.button-toggle').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.button-toggle').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
         });
    });

     // Set up event listeners on buttons to filter and toggle active class
    document.querySelectorAll('.button-toggle').forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.button-toggle').forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Get letter to filter (button text content)
        const letter = button.textContent.toUpperCase();

        // Filter images
        filterImages(letter);
      });
    });

    function filterImages(letter) {
  const items = document.querySelectorAll('.gallery .btn');
  items.forEach(btn => {
    const item = btn.querySelector('.figure-box');
    const name = item.getAttribute('data-name') || '';
    if (letter === 'ALL' || name.toUpperCase().startsWith(letter)) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });
}


    // Show all images by default on page load
    filterImages('ALL');
    const serviceData = {
      blouse: [
        { name: "Fancy - Dry Clean", rate: 135 },
        { name: "Fancy - Steam Press", rate: 17 },
        { name: "Fancy - Starching", rate: 23 },
      ],
      belt: [
        { name: "Big", rate: 94 },
        { name: "Small", rate: 30 },
        
      ],
      backpack: [
        { name: "Dry Clean", rate:413 },
      ],
      bedsheet: [
        { name: "Wash & Fold", rate:30 },
        { name: "Dry wash+ Iron", rate:42},
        { name: "Iron", rate:20 },
      ],
      bathrobe: [
        { name: "Wash & Fold", rate:30 },
        { name: "Dry wash+ Iron", rate:42},
      ],
       cap: [
        { name: "Dry Clean", rate:70},
      ],
      carpet: [
        { name: "Wash & Fold", rate:60 },
      ],
      cushion: [
        { name: "All", rate:413 },
        { name: "Cover", rate:53 },
      ],
      curtainpanel: [
        { name: "Wash & Fold", rate:40 },
        { name: "Dry wash+ Iron", rate:52},
        { name: "Iron", rate:30 },
      ],
      dhoti: [
        { name: "Dhoti/Lungi", rate:177 },
      ],
      dupatta: [
        { name: "Fancy", rate:135 },
      ],
       dress: [
        { name: "Long - Dry Clean", rate:118 },
        { name: "Long - Wash & Fold", rate:35 },
        { name: "Long - Wash & Iron", rate:47 },
        { name: "Long - Steam Press", rate:17 },
        { name: "Short - Dry Clean", rate:59 },
        { name: "Short - Wash & Fold", rate:29 },
        { name: "Short - Wash & Iron", rate:35 },
      ],
      dari: [
        { name: "Dari", rate:23 },
      ],
      frock: [
        { name: "Heavy", rate:200 },
        { name: "Light", rate:106 },
        { name: "Steam Press", rate:15 },
      ],
      gown: [
        { name: "Dry Clean", rate:1020 },
        { name: "Steam Press", rate:70 },
        { name: "Premium Steam Press", rate:118 },
      ],
       gloves: [
        { name: "Dry Clean", rate:53 },
      ],
      hood: [
        { name: "Heavy", rate:118 },
        { name: "Light", rate:82 },
      ],
      hat: [
        { name: "Dry Clean", rate:90 },
      ],
      jacket: [
        { name: "Full", rate:295 },
        { name: "Half", rate:177 },
      ],
      jeans: [
        { name: "Heavy", rate:110 },
        { name: "Light", rate:85 },
      ],
       kurta: [
        { name: "Fancy", rate:135 },
        { name: "Heavy", rate:188 },
        { name: "Plain", rate:118 },
        { name: "Anarkali", rate:590 },
      ],
       laundry: [
        { name: "Wash & Fold", rate:116 },
        { name: "Wash & Iron", rate:153 },
        { name: "Premium Laundry", rate:234 },
      ],
      lehenga: [
        { name: "Light", rate:342 },
        { name: "Bridal", rate:590 },
        { name: "BridalHeavy", rate:1003 },
      ],
      muffler: [
        { name: "Muffler", rate:94 },
      ],
      mat: [
        { name: "Wash & Fold", rate:22 },
        { name: "Dry Wash + Iron", rate: 40 },
      ],
      overcoat: [
        { name: "Kid", rate:135 },
        { name: "Heavy", rate:295 },
        { name: "Light", rate:236 },
        { name: "Waist", rate:141 },
        { name: "Overcoat", rate:230 },
        { name: "Overcoat Long", rate:342 },
      ],
      pajama: [
        { name: "Pajama", rate:106 },
        { name: "Wash & Iron", rate:47 },
        { name: "Steam press", rate:17 },
        { name: "Starching", rate:23 },
      ],
       purse: [
        { name: "Purse", rate:200 },
      ],
      pillow: [
        { name: "Wash & Fold", rate:15 },
        { name: "Dry wash+ Iron", rate:20},
        { name: "Iron", rate:6 },
      ],
      quilt: [
        { name: "Heavy", rate:531 },
        { name: "Double", rate:448 },
        { name: "Medium", rate:389 },
        { name: "Single", rate:330 },
        { name: "Cover Double", rate:472 },
        { name: "Cover Single", rate:472 },
      ],
      shirt: [
        { name: "Dry Clean", rate:82 },
        { name: "Wash & Fold", rate:35 },
        { name: "Wash & Iron", rate:47 },
        { name: "Steam Press", rate:17 },
        { name: "Premium Steam Press", rate:23 },
        { name: "Starching", rate:70 },
      ],
      sherwani: [
        { name: "Dry Clean", rate:1020 },
        { name: "Steam Press", rate:106},
        { name: "Premium Steam Press", rate:117 },
      ],
      sweater: [
        { name: "Heavy", rate:206 },
        { name: "Light", rate:118 },
        { name: "Medium", rate:147 },
      ],
      shorts: [
        { name: "Dry Clean", rate:70 },
        { name: "Wash & Fold", rate:29 },
        { name: "Wash & Iron", rate:35 },
        { name: "Steam Press", rate:17 },
        ],
        saree: [
        { name: "Fancy", rate:330 },
        { name: "Heavy", rate:295 },
        { name: "Plain", rate:117 },
        { name: "Medium", rate:206 },
      ],
       stole: [
        { name: "Stole", rate:94 },
      ],
      salwar: [
        { name: "Dry Clean", rate:118 },
        { name: "Wash & Iron", rate:88 },
        { name: "Premium Steam Press", rate:35 },
        ],
        skirt: [
        { name: "Long", rate:177 },
        { name: "Short", rate: 106 },
      ],
      shawl: [
        { name: "Heavy", rate:206 },
        { name: "Light", rate:112 },
        { name: "Pashmina", rate:324 },
      ],
       sandal: [
        { name: "Fancy", rate:330 },
        { name: "Normal", rate: 271 },
      ],
      shoes: [
        { name: "Boots", rate:590 },
        { name: "Suede", rate:590 },
      ],
      shirttrouser: [
        { name: "Shirt & Trouser", rate:177 },
      ],
       shirt5: [
        { name: "Shirt x 5", rate:413 },
      ],
       tshirt: [
        { name: "T-Shirt", rate:413 },
      ],
       trouser: [
        { name: "Trouser & Jeans", rate:177 },
      ],
      tops: [
        { name: "Top / Kurti", rate:106 },
        { name: "Steam Press", rate:17 },
      ],
      trolley: [
        { name: "Large", rate:1014 },
        { name: "Small", rate:472 },
        { name: "Medium", rate:743 },
      ],
      tie: [
        { name: "Tie", rate:118 },
      ],
      toy: [
        { name: "Large", rate:542 },
        { name: "Small", rate:141 },
        { name: "Medium", rate:271 },
        { name: "Extra Large", rate:1062 },
      ],
      towel: [
        { name: "Wash & Fold", rate:10 },
        { name: "Dry wash + Iron", rate:17 },
        ],
        tabelcloth: [
        { name: "Table Cloth", rate:118 },
      ],
       umberlla: [
        { name: "Umberlla", rate:118 },
      ],
       vest: [
        { name: "Cotton", rate:47 },
        { name: "Steam Press", rate:17 },
      ]
    };


    function openOffcanvas(type) {
      const offcanvas = document.getElementById('customOffcanvas');
      const tbody = document.getElementById('serviceTableBody');
      const title = document.getElementById('offcanvasTitle');
      const totalDisplay = document.getElementById('outsideTotal');
      const services = serviceData[type];

      title.innerText = type.charAt(0).toUpperCase() + type.slice(1);
      tbody.innerHTML = '';
      totalDisplay.innerText = "Grand Total: ₹0";

      services.forEach(service => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td style="text-align: start;">${service.name}<br>Rs.<span class="rate">${service.rate}</span></td>
          <td><input class="input-box qty" value="0"></td>
          <td style="text-align: end;" class="total">0</td>
        `;
        tbody.appendChild(row);
      });

      const inputs = tbody.querySelectorAll('.qty');
      const totals = tbody.querySelectorAll('.total');
      const rates = tbody.querySelectorAll('.rate');

      function calculateTotals() {
        let grandTotal = 0;
        inputs.forEach((input, i) => {
          const rate = parseFloat(rates[i].innerText);
          const qty = parseFloat(input.value) || 0;
          const total = rate * qty;
          totals[i].innerText = `₹${total}`;
          grandTotal += total;
        });
        totalDisplay.innerText = `Grand Total: ₹${grandTotal}`;
      }

      inputs.forEach(input => {
        input.addEventListener('input', calculateTotals);
      });

      offcanvas.style.display = 'block';
    }

    function closeOffcanvas() {
      document.getElementById('customOffcanvas').style.display = 'none';
    }
function sendToWhatsApp() {
    const name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const fullMessage = `Hi, I am ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappNumber = "919876543210"; // Replace with your number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;
    window.open(whatsappURL, "_blank");
  }

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message submitted locally (you can handle backend here)");
  });