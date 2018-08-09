// set your variables for later use
let sections = document.getElementsByTagName("section")
let firstSection = sections[0]
let secondSection = sections[1]
let thirdSection = sections[2]
let lastSection = sections[3]

// run this code on window scroll
window.addEventListener("scroll", event => {
  // when the page scrolls 100px down then do the following
  if(window.scrollY > 30) {
    firstSection.classList.add("fadeIn")
  }
  
  // when the page scrolls 800px down then do the following
  if(window.scrollY > 430) {
    secondSection.classList.add("fadeIn")
  }

  // when the page scrolls 1600px down then do the following
  if(window.scrollY > 830) {
    thirdSection.classList.add("fadeIn")
  }

  // when the page scrolls 2400px down then do the following
  if(window.scrollY > 1230) {
    lastSection.classList.add("fadeIn")
  }
})