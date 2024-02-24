var sidebarContent = "/Navbars/blogPosts.html"
localStorage.setItem("sidebarContent", sidebarContent);

function setSidebarScr() {
  sidebarContent = localStorage.getItem("sidebarContent")
  document.getElementById("sidebar").src = sidebarContent;
}

function setContent(newSrc) {
  document.getElementById("content").src = newSrc;
}

function setSidebar(newSrc){
  sidebarContent = newSrc;
  localStorage.setItem("sidebarContent", sidebarContent);
  setSideBarScr();
}

function setContentBlog(newSrc) {
  window.parent.document.getElementById("content").src = newSrc;
}