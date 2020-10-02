const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  
  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];



let displayMsg = document.getElementById("display");

document.addEventListener("keypress", (event) => {
  
})


function playSound(track){
  let myAudio = new Audio(track);
  myAudio.play();
  let val = document.getElementById("vol-control").value;
  myAudio.volume = val/100;

}

function playBankOne(id){
  switch(id){
    case "Q":
      playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
      displayMsg.innerText = "Heater-1";
      break;
    case "W":
      playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3');
      displayMsg.innerText = "Heater-2";
      break;
    case "E":
      playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3');
      displayMsg.innerText = "Heater-3";
      break;
    case "A":
      playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3');
      displayMsg.innerText = "Heater-4_1";
      break;
    case "S":
      playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3');
      displayMsg.innerText = "Heater-6";
      break;
    case "D":
      playSound('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3');
      displayMsg.innerText = "Dsc_Oh";
      break;
    case "Z":
      playSound('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3');
      displayMsg.innerText = "Kick_n_Hat";
      break;
    case "X":
      playSound('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3');
      displayMsg.innerText = "RP4_KICK_1";
      break;
    case "C":
      playSound('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3');
      displayMsg.innerText = "Cev_H2";
      break;
  }
}

function playBankTwo(id){
    switch(id){
      case "Q":
        playSound('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3');
        displayMsg.innerText = "Chord_1";
        break;
      case "W":
        playSound('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3');
        displayMsg.innerText = "Chord_2";
        break;
      case "E":
        playSound('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3');
        displayMsg.innerText = "Chord_3";
        break;
      case "A":
        playSound('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3');
        displayMsg.innerText = "Give_us_a_light";
        break;
      case "S":
        playSound('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3');
        displayMsg.innerText = "Dry_Ohh";
        break;
      case "D":
        playSound('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3');
        displayMsg.innerText = "Bld_H1";
        break;
      case "Z":
        playSound('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3');
        displayMsg.innerText = "punchy_kick_1";
        break;
      case "X":
        playSound('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3');
        displayMsg.innerText = "side_stick_1";
        break;
      case "C":
        playSound('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3');
        displayMsg.innerText = "Brk_Snr";
        break;
    }
}


function bankOneTwo(){
  let drumPad = document.getElementsByClassName("drum-pad");
  for (let i = 0; i < drumPad.length; i++) {
    drumPad[i].addEventListener("click", () => {
      let bank = document.getElementById("bank-one-two");
      if(bank.checked){
        playBankTwo(drumPad[i].id);
      }else{
        playBankOne(drumPad[i].id);
      }
    })  
}
}

let power = document.getElementById("power");
power.addEventListener("change", () => {
  if(power.checked){
    bankOneTwo();
  }else{
    console.log(power.checked);
  }
})
