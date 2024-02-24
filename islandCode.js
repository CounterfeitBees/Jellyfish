var sideBarContent = "Navbars/blogPosts.html"

function setSideBarScr() {
  document.getElementById("sidebar").src = sideBarContent;
}

function setContent(newSrc) {
  document.getElementById("content").src = newSrc;
}

function setSidebar(newSrc){
  sideBarContent = newSrc;
  setSideBarScr();
}

function setContentBlog(newSrc) {
  window.parent.document.getElementById("content").src = newSrc;
}