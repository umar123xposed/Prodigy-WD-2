const text= document.querySelector(".developer");
const words=["DESIGNER","DEVELOPER"];
let currentWordIndex=0;
function changeWord(){
    text.classList.add("slide-up");
    setTimeout(() => {
        text.textContent=words[currentWordIndex];
        currentWordIndex=(currentWordIndex + 1) % 2;
        text.classList.remove("slide-up");
    },1000);
}
setInterval(changeWord, 2000);

// ***********************
// script for navbar toggle
// ***********************
document.getElementById("toggle-menu").addEventListener("click", function(){
  var menu= document.querySelector(".dropdown");
   menu.classList.toggle("open");

});


// ***********************
// middle section left to right moving script
// ***********************
const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});
const hiddenelement= document.querySelectorAll(".hidden");
hiddenelement.forEach( (el)=> observer.observe(el));


const observerr = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("active");
        }
        else{
            entry.target.classList.remove("active");
        }
    });
});
const hiddenelements= document.querySelectorAll(".last");
hiddenelements.forEach( (el)=> observerr.observe(el));



// ***********************
// prices section moving up on scroll script
// ***********************
const observerrr = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        
        if (entry.isIntersecting){
            entry.target.classList.add("move");
        }
        else{
            entry.target.classList.remove("move");
        }
    });
});
const hiddenelementss= document.querySelectorAll(".anime");
hiddenelementss.forEach( (el)=> observerrr.observe(el));




// ***********************
// number auto increasing script
// ***********************
const nums = document.querySelectorAll(".rev .work");

const observerrrr = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nums.forEach((work) => {
        
        if (!work.classList.contains("counting")) {
          startCount(work);
        }
      });
    }
  });
});

nums.forEach((el) => observerrrr.observe(el));

function startCount(el) {
  el.classList.add("counting");
  const goal = el.getAttribute("data-goal");
  let count = 0;
  const increment = goal/100;

  const updateText = () => {
    el.textContent = Math.floor(count);
    count += increment;

    if (count <= goal) {
      requestAnimationFrame(updateText);
    } else {
      el.textContent = goal;
    }
  };

  requestAnimationFrame(updateText);
}



const skills = document.querySelectorAll(".meter .meters");

const observerrrrr = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      skills.forEach((meters) => {
        if (!meters.classList.contains("counting")) {
          skillmeter(meters);
        }
      });
    }
  });
});

skills.forEach((el) => observerrrrr.observe(el));

function skillmeter(el) {
  el.classList.add("counting");
  const goal = el.getAttribute("data-target");
  let currentWidth = 0;

  const increment = 2;

  const updateMeter = () => {
    if (currentWidth < goal) {
      currentWidth += increment;
      el.style.width = currentWidth + "%";
      requestAnimationFrame(updateMeter);
    }
  };

  updateMeter();
}
