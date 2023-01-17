const changePage = (new_page) => {
  document.getElementById("frameContent").height = 1;
  let page_name = new_page.slice(-10, -5);
  document.querySelectorAll("[id^='page']").forEach(element => {
    element.classList.remove("active");
  });
  document.getElementById(page_name).classList.add("active");
  console.log(document.getElementById(page_name.slice(0, 5)));
  document.getElementById("frameContent").src = new_page;
}

const resizeFrame = (frame) => {
  frame.height = frame.contentWindow.document.documentElement.scrollHeight;
}

document.getElementById("frameContent").src = HTML_Files/page1.html;
