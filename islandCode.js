localStorage.setItem("sidebarContent", '/Jellyfish/Navbars/blogPosts.html');

function setSidebarScr() {
  sidebarContent = localStorage.getItem("sidebarContent")
  document.getElementById("sidebar").src = sidebarContent;
}

function setContent(newSrc) {
  document.getElementById("content").src = newSrc;
}

function setSidebar(newSrc){
  localStorage.setItem("sidebarContent", newSrc);
  setSideBarScr();
}

function setContentBlog(newSrc) {
  window.parent.document.getElementById("content").src = newSrc;
}