async function load(id, file) {
  const res = await fetch(file);
  if (res.ok) {
    document.getElementById(id).innerHTML = await res.text();
  }
}

load("head", "partials/head.html");
load("sidebar", "partials/sidebar.html");
load("navbar", "partials/navbar.html");
load("footer-scripts", "partials/footer-scripts.html");

Promise.all([
  fetch("sections/about.html").then(r => r.text()),
  fetch("sections/education.html").then(r => r.text()),
  fetch("sections/experiences.html").then(r => r.text()),
  fetch("sections/portfolio.html").then(r => r.text()),
  fetch("sections/courses.html").then(r => r.text()),
  fetch("sections/blog.html").then(r => r.text()),
  fetch("sections/contact.html").then(r => r.text())
]).then(pages => {
  document.getElementById("pages").innerHTML = pages.join("");
});
