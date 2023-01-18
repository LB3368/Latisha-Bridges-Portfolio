const links = document.querySelector('.link');
const sections = document.querySelector('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i) {
            links[activeLink].classList.remove('active');
            link.classList.add('active')
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })

})

function createFooter() {
    // Create the main footer container
    let footerContainer = document.createElement('footer');
    
    // Create the copyright container
    let copyrightContainer = document.createElement('div');
    copyrightContainer.innerHTML = 'Copyright ©2023 Latisha Bridges | Software Engineer';
    
    // Create the contact container
    let contactContainer = document.createElement('div');
    contactContainer.innerHTML = '<h5>Contact</h5><p>Email: <a href="mailto:msbridges3368@gmail.com.com">latisha2801@gmail.com</a></p><p>Phone: 555-555-5555</p><p>Address: Atlanta, Georgia</p>';
    
    // Create the social media container
    let socialContainer = document.createElement('div');
    socialContainer.innerHTML = '<h5>Social Media</h5><ul><li><a href="https://www.linkedin.com/in/lb3368">LinkedIn</a></li><li><a href="https://www.github.com/lb3368">Github</a></li></ul>';
    
    // Append the containers to the main footer container
    footerContainer.appendChild(copyrightContainer);
    footerContainer.appendChild(contactContainer);
    footerContainer.appendChild(socialContainer);
    
    // Append the main footer container to the body
    document.body.appendChild(footerContainer);
  }

  document.addEventListener("DOMContentLoaded", function() {
    createFooter();
});