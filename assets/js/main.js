// ----===================show menu===============-----------

const navMune = document.getElementById("nav_menu");
const toggleBtn = document.getElementById("toggle_nav");
const closeBtn = document.getElementById("nav_close");

// ---===================if constant==================-----

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navMune.classList.add("show-menu");
  });
}
// ----if constant---------
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMune.classList.remove("show-menu");
  });
}

$(document).ready(function() {
  $("#light-slider").lightSlider();
});
// ----====================click menu item remove nav menu====================---------

const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav_menu");

  // ===============click nav_livk remove show-menu-======================
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// ==============scroll header color change-=================

const scrollHeader = () => {
  const header = document.getElementById("header");
  //when the scroll is greater then 60 viewport heigth add the scroll header class

  this.scrollY >= 60
    ? header.classList.add("change_header_bg")
    : header.classList.remove("change_header_bg");
};

window.addEventListener("scroll", scrollHeader);

//==================register popup ==========================
document.querySelector(".button").addEventListener("click", function () {
  document.querySelector(".register_popup").style.display = "flex";
});
document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".register_popup").style.display = "none";
});


//==================login popup ==========================
document.querySelector(".login").addEventListener("click", function () {
  document.querySelector(".login_popup").style.display = "flex";
});
document.getElementById("login_close").addEventListener("click", function () {
  document.querySelector(".login_popup").style.display = "none";
});

// ===================== video popup ==========================
document.querySelector(".video_play").addEventListener("click", function () {
  document.querySelector(".video_player").style.display = "flex";
});
document.getElementById("cencelBtn").addEventListener("click", function () {
  document.querySelector(".video_player").style.display = "none";
});

// ============== food gallery ================

let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".item_box");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");

      if (
        itemBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}

// ================== email js news letter -- footer =======================
const newsForm = document.getElementById("news_form"),
  newsMessage = document.getElementById("footer_message"),
  newsUser = document.getElementById("footer_input");

const sendEmail = (e) => {
  e.preventDefault();

  // check if the field has a value

  if (newsUser.value === "") {
    // Add and remove color
    newsMessage.classList.remove("success");
    newsMessage.classList.add("wrong");

    // show messag
    newsMessage.textContent = "Please Enter Your Email☝️";
    // remove message two seconds
    setTimeout(() => {
      newsMessage.textContent = "";
    }, 2000);
  } else {
    //serviceID -templateID- form id -publicKey
    emailjs
      .sendForm(
        "service_5oxjy9e",
        "o9oj1c4m-krZ0hXDI",
        "template_yaiiavs",
        "#news_form"
      )
      .then(
        () => {
          // show message and color
          newsMessage.classList.add("success");
          newsMessage.textContent = "Your Email Send Successfully🤗";
          setTimeout(() => {
            newsMessage.textContent = "";
          }, 2000);
        },
        // mail sending error
        (error) => {
          alert("OOPS! something has wrong...", error);
        }
      );
    // to clear the input field
    newsUser.value = "";
  }
};
newsForm.addEventListener("submit", sendEmail);

// ==================contact form---email js ====================== 
const contact_form = document.getElementById("contact_form");
const contactForm = {
  from_name: document.getElementById("fullName").value,
  email_id: document.getElementById("email_id").value,
  number: document.getElementById("number").value,
  message: document.getElementById("contact_message"),
};

const sendMail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_5oxjy9e",
      "template_77zvfrp",
      "o9oj1c4m-krZ0hXDI",
      "#contact_form"
    )
    .then(function (response) {
      alert("SUCCESS!", response.status, response.text);
    });
  // to clear the input field
};
contact_form.addEventListener("submit", sendMail);

/*==================scroll section then active link ================================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

//==============scroll up-========================
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll_up");
  // when the scroll button is higher then 400 viewport heigth, add the show-scroll--

  this.scrollY >= 500
    ? scrollUp.classList.add("show_scroll")
    : scrollUp.classList.remove("show_scroll");
};

window.addEventListener("scroll", scrollUp);

// ================= scrollup button====================

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home_data, .footer_container, .footer_copy, .new-food-data`);
sr.reveal(
  `.food, .area_data, .menu_card, .single_chefs, .gallery_item, .item_box, .person`,
  { interval: 90 }
);
sr.reveal(`.feature_img, .form, .about-img`, { origin: "left" });
sr.reveal(`.video_data, .contact-img-box, .about-text`, { origin: "right" });
