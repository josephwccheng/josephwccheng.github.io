// this function runs when the DOM is ready, i.e. when the document has been parsed
document.addEventListener("DOMContentLoaded", function() {
  
  const menuToggle = document.getElementById('navbarSupportedContent');
  const bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false
  });
  // navbar-expand-lg collapse on 992px
  const navbarExpandLgToggle = 992;
  const navbar = document.querySelector('.navbar');

  const navLinks = document.querySelectorAll('.nav-link');
  const navDropdownItems = document.querySelectorAll('.dropdown-item');
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
  // (TODO) - This function doesn't seem to work on my end
  // Highlight navbar item of current page
  // $(function () {
  //   $('a').each(function () {
  //     if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
  //       $(this).toggleClass("hovered");
  //     }
  //   });
  // });

});