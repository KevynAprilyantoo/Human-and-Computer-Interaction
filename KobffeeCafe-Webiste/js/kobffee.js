// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = () => {
  shoppingCart.classList.toggle("active");
};

// klik diluar elemen
const hm = document.querySelector("#hamburger-menu");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

function formValidation(a) {
  a.preventDefault();
  var username = document.getElementById("user");
  var email = document.getElementById("email");
  var phonenumber = document.getElementById("number");

  if (username.value.length < 6) {
    alert("Username must be more than 6 characters");
  } else if (!email.value.endsWith("@gmail.com")) {
    alert("Must ends with @gmail.com");
  } else if (phonenumber.value.length == 0) {
    alert("Phone number can't empty");
  } else {
    alert("berhasil");
  }
}

// desc

const itemDesc = document.querySelector("#detail-item");
const itemDescButton = document.querySelectorAll(".item-detail-button");

itemDescButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDesc.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".desc .close").onclick = (e) => {
  itemDesc.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target == itemDesc) {
    itemDesc.style.display = "none";
  }
};

const itemDesc2 = document.querySelector("#detail-item2");
const itemDescButton2 = document.querySelectorAll(".item-detail-button2");

itemDescButton2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDesc2.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".desc .close2").onclick = (e) => {
  itemDesc2.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target == itemDesc2) {
    itemDesc2.style.display = "none";
  }
};
