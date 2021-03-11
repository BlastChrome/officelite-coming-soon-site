function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds(); 
    const days = document.getElementById("days"); 
    const hours = document.getElementById("hours"); 
    const minutes = document.getElementById("minutes"); 
    const seconds = document.getElementById("seconds");  

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    days.innerText = 0; 
    hours.innerText = hour; 
    minutes.innerText = min; 
    seconds.innerText = sec;
      var t = setTimeout(function(){ currentTime() }, 1000); 
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime();