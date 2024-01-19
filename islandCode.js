function setContent(newSrc) {
  document.getElementById("content").src = newSrc;
}

function setNavAll(){
  document.getElementById("sidebar").src = "Navbars/sidebar.html";
}

function setNavBlog(){
  document.getElementById("sidebar").src = "Navbars/blogPosts.html";
}

function setNavDONE(){
  document.getElementById("sidebar").src = "Navbars/projects.html";
}

function setNavJournal(){
  document.getElementById("sidebar").src = "Navbars/journal.html";
}

function setNavNone() {
  document.getElementById("sidebar").src = " ";
}

function setContentBlog() {
  document.getElementById("link").innerHTML = "projects.html";
  parent.document.getElementById('yourdiv').src = "projects.html";
}