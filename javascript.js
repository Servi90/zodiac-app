function scrollToTop() {
  window.scrollTo(0, 0);
}

function findOut() {
  let name = prompt("What is your name?");
  let day = prompt("What day of the month were you born?");
  let month = prompt("What month were you born in?");

  month = month.toLowerCase().trim();

  if (month === "december" && day < 22) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Sagittarius";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Optimistic - Honest - Intellectual";
  }
  if (month === "december" && day >= 22) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Capricorn";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Ambitious - Persistent - Disciplined";
  }
  if (month === "january" && day < 20) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Capricorn";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Ambitious - Persistent - Disciplined";
  }
  if (month === "january" && day >= 20) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are an Aquarius";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Clever - Exceptional - Self-reliant";
  }
  if (month === "february" && day < 19) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are an Aquarius";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Clever - Exceptional - Self-reliant";
  }
  if (month === "february" && day >= 19) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Pisces";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Creative - Generous - Empathetic";
  }
  if (month === "march" && day < 21) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Pisces";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Creative - Generous - Empathetic";
  }
  if (month === "march" && day >= 21) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are an Aries";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Ambitious - Honest - Assertive";
  }
  if (month === "april" && day < 20) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are an Aries";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Ambitious - Honest - Assertive";
  }
  if (month === "april" && day >= 20) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Taurus";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Intelligent - Hard-working - Dedicated";
  }
  if (month === "may" && day < 21) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Taurus";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Intelligent - Hard-working - Dedicated";
  }
  if (month === "may" && day >= 21) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Gemini";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Adaptable - Outgoing - Impulsive";
  }
  if (month === "june" && day < 21) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Gemini";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Adaptable - Outgoing - Impulsive";
  }
  if (month === "june" && day >= 21) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Cancer";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Loyal - Protective - Intuitive";
  }
  if (month === "july" && day < 23) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Cancer";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Loyal - Protective - Intuitive";
  }
  if (month === "july" && day >= 23) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Leo";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Compassion - Drive - Generosity";
  }
  if (month === "august" && day < 23) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Leo";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Compassion - Drive - Generosity";
  }
  if (month === "august" && day >= 23) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Virgo";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Humble - Industrious - Practical";
  }
  if (month === "september" && day < 23) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Virgo";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Humble - Industrious - Practical";
  }
  if (month === "september" && day >= 23) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Libra";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Charming - Intelligent - Persuasive";
  }
  if (month === "october" && day < 23) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Libra";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Charming - Intelligent - Persuasive";
  }
  if (month === "october" && day >= 23) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Scorpio";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Mysterious - Secretive - Passionate";
  }
  if (month === "november" && day < 22) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Scorpio";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Mysterious - Secretive - Passionate";
  }
  if (month === "november" && day >= 22) {
    let replaceable = document.querySelector(".replaceable");
    replaceable.innerHTML = name + ", you are a Sagittarius";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Optimistic - Honest - Intellectual";
  }
}

let findOutButton = document.querySelector("button");
findOutButton.addEventListener("click", findOut);

function subscribe() {
  let name = prompt("What is your name?");
  let correo = prompt("What is your email address?");
  let age = prompt("How old are you?");

  if (age < 18) {
    alert(
      "Sorry " +
        name +
        ", you must be 18 or older in order to subscribe to our services"
    );
  } else {
    alert("Thank you " + name + ", we will be in touch shortly");
  }
}
let subscribeButton = document.querySelector(".buttonContact");
subscribeButton.addEventListener("click", subscribe);
