let startTime;
let passed=0;
let interval;
let isRunning=false;
let display=document.getElementById('time');
let startBtn=document.getElementById('startBtn');
let lapsContainer=document.getElementById('laps');
function start(){
    startTime=Date.now()-passed;
    interval=setInterval(newt, 100);
    startBtn.innerHTML='Pause';
    isRunning=true;
}
function reset(){
    clearInterval(interval);
    passed=0;
    isRunning=false;
    display.innerHTML='00:00:00.0';
    startBtn.innerHTML='Start';
    lapsContainer.innerHTML='';
}function toggle(){
    if (isRunning){
        pause();
    } else {
        start();
    }
}
function pause(){
    clearInterval(interval);
    passed=Date.now()-startTime;
    startBtn.innerHTML='Start';
    isRunning=false;
}
function lap(){
    if (isRunning){
        let lapTime=display.innerHTML;
        let lapElement=document.createElement('div');
        lapElement.innerHTML=lapTime;
        lapElement.classList.add('lap');
        lapsContainer.appendChild(lapElement);
    }
}
function newt(){
    passed=Date.now()-startTime;
    display.innerHTML=form(passed);
}
function form(time){
    let milsec=parseInt((time%1000)/100);
    let sec=Math.floor((time/1000)%60);
    let minutes=Math.floor((time/(1000*60))%60);
    let hours=Math.floor((time/(1000*60*60))%24);

    return pad(hours)+':'+pad(minutes)+':'+pad(sec)+ '.'+milsec;
}

function pad(number){
    return number.toString().padStart(2,'0');
}
