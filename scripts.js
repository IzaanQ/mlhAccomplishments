//Dropdown 1

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //Dropdown 2

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show2')) {
          openDropdown.classList.remove('show2');
        }
      }
    }
  }

//Dropdown 3

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show3");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn3')) {
      var dropdowns = document.getElementsByClassName("dropdown-content3");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show3')) {
          openDropdown.classList.remove('show3');
        }
      }
    }
  }

  //Dropdown 4

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show4");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn4')) {
      var dropdowns = document.getElementsByClassName("dropdown-content4");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show4')) {
          openDropdown.classList.remove('show4');
        }
      }
    }
  }

  //Dropdown 5

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show5");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn5')) {
      var dropdowns = document.getElementsByClassName("dropdown-content5");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show5')) {
          openDropdown.classList.remove('show5');
        }
      }
    }
  }
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const dropdownlinks = document.getElementsByClassName('dropdown-links')[0]

toggleButton.addEventListener('click', () => {
  dropdownlinks.classList.toggle('active')
})
