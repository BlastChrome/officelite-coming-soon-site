// function currentTime() {   
//     var date = new Date();
//     var hour = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds(); 
//     const days = document.getElementById("days"); 
//     const hours = document.getElementById("hours"); 
//     const minutes = document.getElementById("minutes"); 
//     const seconds = document.getElementById("seconds");  

//     hour = updateTime(hour);
//     min = updateTime(min);
//     sec = updateTime(sec);
//     days.innerText = 0; 
//     hours.innerText = hour; 
//     minutes.innerText = min; 
//     seconds.innerText = sec;
//       var t = setTimeout(function(){ currentTime() }, 1000); 
//   }
  
//   function updateTime(k) {
//     if (k < 10) {
//       return "0" + k;
//     }
//     else {
//       return k;
//     }
//   }
  
//   currentTime(); 

const deadline = "2021-11-04"; 

function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
} 
function initializeClock(endtime) {
  const days = document.getElementById("days"); 
  const hours = document.getElementById("hours"); 
  const minutes = document.getElementById("minutes"); 
  const seconds = document.getElementById("seconds");   
  
  const timeinterval = setInterval(() => {
    const t = getTimeRemaining(endtime); 
    days.innerText = t.days;
    hours.innerText = t.hours; 
    minutes.innerText = t.minutes; 
    seconds.innerText = t.seconds;
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  },1000);
} 

initializeClock(deadline);