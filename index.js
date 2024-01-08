  // ----------------------------------------- cursor-js---------------------------------- 

  const cursorDOt = document.querySelector("[data-cursor-dot]")
  const cursorOL = document.querySelector("[data-cursor-outline]")

  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDOt.style.left = `${posX}px`;
    cursorDOt.style.top = `${posY}px`;

    cursorOL.style.left = `${posX}px`;
    cursorOL.style.top = `${posY}px`;

    cursorOL.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 400, fill: "forwards" });

    // ---------------------------------------- counters ------------------------------------- 

    let valueDisplays = document.querySelectorAll(".num");
    let interval = 2500;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });

    let valueDisplays2 = document.querySelectorAll(".num2");
    let interval2 = 1000;

    valueDisplays2.forEach((valueDisplay2) => {
      let startValue = 45550;
      let endValue = parseInt(valueDisplay2.getAttribute("data-val"));
      let duration = Math.floor(interval2 / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay2.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });

    let valueDisplays3 = document.querySelectorAll(".num3");
    let interval3 = 500;

    valueDisplays3.forEach((valueDisplay3) => {
      let startValue = 500;
      let endValue = parseInt(valueDisplay3.getAttribute("data-val"));
      let duration = Math.floor(interval3 / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay3.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });


  })

  // Replace 'your-animation.json' with the path to your exported JSON file
  const animationPath = './Assets/Backgrounds/Flow 9.json';
   
  // Replace 'animation-container' with the ID of your container element
  const container = document.getElementById('animation-container');

  lottie.loadAnimation({
     container: container,
     renderer: 'canvas', // or 'canvas'
     loop: true, // or false
     autoplay: true,
     path: animationPath,
  });