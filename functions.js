function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.style.overflow = "hidden";
}

function sluitModal(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}

document.querySelectorAll(".modal-bg").forEach(function (m) {
  m.addEventListener("click", function (e) {
    if (e.target === m) sluitModal(m.id);
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-bg.open").forEach(function (m) {
      sluitModal(m.id);
    });
  }
});

function toonTab(naam, knop) {
  document.querySelectorAll(".tab-inhoud").forEach(function (t) {
    t.classList.remove("actief");
  });
  document.querySelectorAll(".tab-knop").forEach(function (k) {
    k.classList.remove("actief");
  });
  document.getElementById("tab-" + naam).classList.add("actief");
  knop.classList.add("actief");
}

window.addEventListener("scroll", function () {
  document
    .getElementById("nav")
    .classList.toggle("scrolled", window.scrollY > 60);
});
function openImage(src) {
  const modal = document.getElementById("image-modal");
  const image = document.getElementById("fullscreen-image");

  image.src = src;
  modal.style.display = "flex";
}

function closeImage() {
  document.getElementById("image-modal").style.display = "none";
}
function openVideo(src) {
  const modal = document.getElementById("video-modal");
  const video = document.getElementById("fullscreen-video");

  video.src = src;
  modal.style.display = "flex";
  video.play();
}

function closeVideo() {
  const modal = document.getElementById("video-modal");
  const video = document.getElementById("fullscreen-video");

  video.pause();
  video.src = "";
  modal.style.display = "none";
}
