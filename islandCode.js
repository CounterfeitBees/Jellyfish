localStorage.setItem("sidebarContent", '/Jellyfish/Navbars/blogPosts.html');

function setSidebarSrc(newSrc) {
  document.getElementById("sidebar").src = newSrc;
}

function setContent(newSrc) {
  document.getElementById("content").src = newSrc;
}

function setSidebar(newSrc){
  localStorage.setItem("sidebarContent", newSrc);
  setSidebarSrc(localStorage.getItem("sidebarContent"));
}

function setContentBlog(newSrc) {
  window.parent.document.getElementById("content").src = newSrc;
}