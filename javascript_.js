var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//$(document.getElementById("#prev")).keypress(function(e) {
  //check if enter is pressed
  //if (e.keyCode == 13) {
    //click your link
    //$(document.getElementsByClassName("#prev").click();
  //}
  //});
//$(document.getElementById("#next")).keypress(function(e) {
  //check if enter is pressed
  //if (e.keyCode == 13) {
    //click your link
    //$(document.getElementsByClassName("#next").click();
  //}
  //});

$(document.getElementsByClassName("dot")[0]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[0]).click();
  }
  });

$(document.getElementsByClassName("dot")[1]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[1]).click();
  }
  });

$(document.getElementsByClassName("dot")[2]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[2]).click();
  }
  });
   
$(document.getElementsByClassName("dot")[3]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[3]).click();
  }
  });
 
 $(document.getElementsByClassName("dot")[4]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[4]).click();
  }
  });
 
 $(document.getElementsByClassName("dot")[5]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[5]).click();
  }
  });
    
 $(document.getElementsByClassName("dot")[6]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[6]).click();
  }
  });
    
 $(document.getElementsByClassName("dot")[7]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[7]).click();
  }
  });
    
 $(document.getElementsByClassName("dot")[8]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[8]).click();
  }
  });
    
 $(document.getElementsByClassName("dot")[9]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[9]).click();
  }
  });
    
 $(document.getElementsByClassName("dot")[10]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[10]).click();
  }
  });
    
 $(document.getElementsByClassName("dot")[11]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[11]).click();
  }
  });
    
 $(document.getElementsByClassName("dot")[12]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[12]).click();
  }
  });
    
 $(document.getElementsByClassName("dot")[13]).keypress(function(e) {
   //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[13]).click();
  }
  });
    
 $(document.getElementsByClassName("dot")[14]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[14]).click();
  }
  });
    
 $(document.getElementsByClassName("dot")[15]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[15]).click();
  }
  });
    
  $(document.getElementsByClassName("dot")[16]).keypress(function(e) {
  //check if enter is pressed
  if (e.keyCode == 13) {
    //click your link
    $(document.getElementsByClassName("dot")[16]).click();
  }
  }); //
    
 
    
