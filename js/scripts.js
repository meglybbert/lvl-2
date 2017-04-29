// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

console.log('Hello, World!');

  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setAnalogDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;

        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

    function setDigitalDate() {
        var now = new Date()
        var hour = now.getHours()
        var min = now.getMinutes()
        var sec = now.getSeconds()
        var suffix = "AM";

        //to add AM or PM after time

        if(hour>11) suffix = "PM";
        if(hour>12) hour = hour-12;
        if(hour==0) hour = 12;

        //to add a placeholder 0 for one digit times

        min=checkTime(min)
        sec=checkTime(sec)

        $('.digital').text(hour+":"+min+":"+sec+" "+suffix);
        t=setTimeout('startTime()', 500)
     }

    function checkTime(i) {
        if (i<10)
        { i="0" + i}
        return i
    }

    setInterval(setAnalogDate, 1000);
    setInterval(setDigitalDate, 1000);

    setAnalogDate();
    setDigitalDate();