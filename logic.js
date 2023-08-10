function show_clock(){

    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];

    let date = new Date(); 
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


//     Hour hand rotation 
// Total Hours 12 Rotation of 360 deg So in 1 hour 
// It will rotate 30 deg but the minute hand also impact the rotation of the hour hand so if in 60 min it rotates 30 deg then in 1 min it will rotate half deg so we will add this to the total turn 
    h.style.transform = `rotate(${30 * hours + minutes/2}deg)`;



//     Minute hand rotation 
// Total Min in Hour is 60 with rotation of 360 deg so per min will rotate 6 deg 

    m.style.transform = `rotate(${6* minutes}deg)`;



//     Second-Hand rotation 
// Total sec in Min is 60 with rotation of 360 deg so per sec will rotate 6 deg 
    s.style.transform = `rotate(${6 * seconds}deg)`;

  

    let sound = new Audio('sound3.mp3');
    sound.play();

  
}


setInterval(show_clock, 1000);
