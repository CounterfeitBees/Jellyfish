var sidebarContent = "/Navbars/blogPosts.html"
console.log(sidebarContent)

function setSidebarScr() {
  console.log(sidebarContent)
  document.getElementById("sidebar").src = sidebarContent;
}

function setContent(newSrc) {
  document.getElementById("content").src = newSrc;
}

function setSidebar(newSrc){
  console.log(sidebarContent)
  sidebarContent = newSrc;
  console.log(sidebarContent)
  setSideBarScr();
}

function setContentBlog(newSrc) {
  window.parent.document.getElementById("content").src = newSrc;
}