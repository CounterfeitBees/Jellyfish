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

function setNavScience(){
  document.getElementById("sidebar").src = "Navbars/science.html";
}

function setNavNone() {
  document.getElementById("sidebar").src = " ";
}

function setContentBlog(newSrc) {
  window.parent.document.getElementById("content").src = newSrc;
}

function giveRandomColor() {
  return(Math.floor(Math.random() * 256)-1);
}

function funColors() {

}