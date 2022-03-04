// this function runs when the DOM is ready, i.e. when the document has been parsed
document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById('navbarSupportedContent');
  const bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false
  });
  // navbar-expand-lg collapse on 992px
  const navbarExpandLgToggle = 992;
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const navDropdownItems = document.querySelectorAll('.dropdown-link');
  if (navbar.offsetWidth < navbarExpandLgToggle) {
    // This function toggles the menu bar for phone devices to hide once a topic is selected.
    navLinks.forEach((l) => {
      var reference = l.href;
      if (reference.includes('#services') == false) {
        l.addEventListener('click', () => {
          bsCollapse.toggle()
        })
      };
      // This function toggles the drop down items for phone devices to hide once a topic is selected.
    });
    if (navbar.offsetWidth < navbarExpandLgToggle) {
      navDropdownItems.forEach((l) => {
        l.addEventListener('click', () => {
          bsCollapse.toggle()
        })
      });
    }
  };

  // Highlight navbar menu item of current section when scrolling through page
  const divLink = document.querySelectorAll('.anchor');
  window.addEventListener('scroll', () => {
    let current = '';
    divLink.forEach(div => {
      const divLinkTop = div.offsetTop;
      const divLinkHeight = div.clientHeight;
      if (scrollY > divLinkTop - divLinkHeight / 4) {
        current = div.getAttribute('id');
      }
    })
    navLinks.forEach(a => {
      a.classList.remove('hovered');
      if (current == null) {
        document.getElementById('home-nav-link').classList.add('hovered')
      } else {
        document.querySelector("a[href*=" + current + "]").classList.add('hovered')
      }
    })
  })
});