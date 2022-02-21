// this function runs when the DOM is ready, i.e. when the document has been parsed
document.addEventListener("DOMContentLoaded", function() {
  // This function toggles the menu bar for phone devices to hide once a topic is selected.
  const navLinks = document.querySelectorAll('.nav-item')
  const menuToggle = document.getElementById('navbarSupportedContent')
  const bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false
  })
  navLinks.forEach((l) => {
    l.addEventListener('click', () => {
      bsCollapse.toggle()
    })
  })

  // (TODO) - This function doesn't seem to work on my end
  // Highlight navbar item of current page
  $(function () {
    $('a').each(function () {
      if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
        $(this).toggleClass("hovered");
      }
    });
  });

});