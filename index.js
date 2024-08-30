let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const navLinks = document.querySelectorAll('.sidebar a');

  function loadContent(page) {
      content.innerHTML = `<h1>${page.charAt(0).toUpperCase() + page.slice(1)}</h1>`;
      content.innerHTML += `<p>This is the ${page} page content.</p>`;
  }

  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const page = link.getAttribute('data-page');
          loadContent(page);
          
          // Update active link
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
      });
  });

  // Load dashboard by default
  loadContent('dashboard');
  navLinks[0].classList.add('active');
});


function navigateTo(page) {
    
    switch (page) {
      case 'dashboard':
        window.location.href = 'dashboard.html';
        break;
      case 'Profile':
        window.location.href = 'Profile.html';
        break;
      case 'InOut Time':
         window.location.href = 'InOutTime.html';
         break;
      case 'Apply Loan':
         window.location.href = 'ApplyLoan.html';
         break;
      case 'Reimbursement':
        window.location.href = 'Reimbursement.html';
        break;
      case 'Query':
        window.location.href = 'Query.html';
        break;
      case 'Income Tax':
        window.location.href = 'IncomeTax.html';
        break;
       case 'Off-Boarding':
        window.location.href = 'Off-Boarding.html';
        break;
        case 'Leave':
        window.location.href = 'Leave.html';
        break;
        case 'Logout':
        window.location.href = 'logout.html';
        break;

      default:
        console.error('Invalid page:', page);
    }
  }