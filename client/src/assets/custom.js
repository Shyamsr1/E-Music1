
// For window optimization menu options in the home page

document.addEventListener("DOMContentLoaded", function () {
  var instances = M.AutoInit();

  // Initialize Top Navbar as side navbar in small screens
  var mobileElems = document.querySelectorAll("#mobileSideNav");
  var mobileElems1 = document.querySelectorAll("collapsible-header");
  var mobileSideNavInstances = M.Sidenav.init(mobileElems, {
    closeOnClick: true,
    menuWidth: 200,
    edge: "left",
    draggable: true,
  });

  var mobileSideNavInstances1 = M.Sidenav.init(mobileElems1, {
    closeOnClick: true,
    menuWidth: 200,
    edge: "left",
    draggable: true,
  });


  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {alignment:'center'});


  // Initialize Carousel
  M.AutoInit();
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, 200);

  
  // Initialize FAB
  var fabElems = document.querySelectorAll(".fixed-action-btn");
  var fabInstances = M.FloatingActionButton.init(fabElems, {
    direction: "top",
    hoverEnabled: false,
  });
  // Initialize Scrollspy
  var scrollspyElems = document.querySelectorAll(".scrollspy");
  var scrollspyInstances = M.ScrollSpy.init(scrollspyElems);
  // Initialize Parallax
  var parallaxElems = document.querySelectorAll(".parallax");
  var parallaxInstances = M.Parallax.init(parallaxElems);
  
  
});

