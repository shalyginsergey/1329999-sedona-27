var link = document.querySelector(".button-brown");

    var popup = document.querySelector(".form");


    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.toggle("modal-close");
      
    });


