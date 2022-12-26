//All Made By Neksha DeSilva
//All Images And Icons Of Roar™ is belongs to NekshaDeSilva
const trackNowPlay = new Audio("Spice-Go-Down-Deh-Ft-Sean-Paul-And-Shaggy-(TrendyBeatz.com).mp3");
const play = document.querySelector('.playbtn');
const forward = document.querySelector('.forward');
const backward = document.querySelector('.backward');
const prog = document.querySelector('.media-progress');
const imgplay = document.querySelector('.playcls');
const volume = document.querySelector('.volume');
const replay = document.querySelector('.replay');
const lyr = document.querySelector('.lyrics');
const trackDur = document.querySelector('.duration');
const song = document.querySelector('.title');
const showMore= document.querySelector('.more-effects');
const keyCommon = document.querySelector('.keys');
const browserMode = document.querySelector('.browser');
const addNew = document.querySelector('.add');
const gobtn = document.querySelector('.go');
const bottomLink1= document.querySelector('.store-elm-div');
const bottomLink2= document.querySelector('.devs-elm-div');
const bottomLink3= document.querySelector('.policy-elm-div');
const bottomLink4= document.querySelector('.donate-elm-div');
const inputLink = document.querySelector('.newSong');
const closeTop= document.querySelector('.close-top');
let trackC = document.querySelector('trackChange');
const track1 = document.querySelector('.track1');
const track2 = document.querySelector('.track2');
const track3 = document.querySelector('.track3');
const track4 = document.querySelector('.track4');
const track5 = document.querySelector('.track5');
const eventDiv = document.querySelector('.roar-event-div');
const eventSvg = document.querySelector('.btn-display');
const eventText = document.querySelector('.roar-event-h3');
const shufflePlay  = document.querySelector('.shuffle');
const star = document.querySelector('.star');
const effectsP = document.querySelector('.effects-pizzicato');
const settingPop  =document.querySelector('.pop-up-settings');
const adPop= document.querySelector('.pop-up-documentation');
const svSetting = document.querySelector('.saveBtn-settings');
const rzSetting = document.querySelector('.resetBtn-settings');
let starred = 0;
document.querySelector('body'). onselectstart = function (){
  return false; 
 }
star.addEventListener('click', function(){
  if(starred== 0){
    star.innerHTML = '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
  star.style.fill = 'hotpink';
  addEffect01();
  starred = 1;
  eventDiv.style.visibility = 'visible';
    eventText.innerHTML = 'Starred';
    eventSvg.innerHTML = '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>';
  }else{
    star.innerHTML = '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>'
    star.style.fill = '';
    star.style.animation  = 'star-rmv 500ms 1';
    starred = 0;
    eventDiv.style.visibility = 'visible';
    eventText.innerHTML = 'Star Removed';
    eventSvg.innerHTML = '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>';
  }
function addEffect01(){
  star.style.animation = 'star-add 500ms 1';
}
})
bottomLink1.addEventListener('mousedown', function(){
  bottomLink1.style.backgroundColor = 'rgb(2,91,217)';

})
bottomLink1.addEventListener('mouseup', function(){
  bottomLink1.style.backgroundColor = '';
  
})
bottomLink1.addEventListener('mouseout', function(){
  bottomLink1.style.backgroundColor = '';
  
})

bottomLink2.addEventListener('mousedown', function(){
  bottomLink2.style.backgroundColor = 'rgb(2,91,217)';
  

})
bottomLink2.addEventListener('mouseup', function(){
  bottomLink2.style.backgroundColor = '';
  
})
bottomLink2.addEventListener('mouseout', function(){
  bottomLink2.style.backgroundColor = '';
  
})

bottomLink3.addEventListener('mousedown', function(){
  bottomLink3.style.backgroundColor = 'rgb(2,91,217)';

})
bottomLink3.addEventListener('mouseup', function(){
  bottomLink3.style.backgroundColor = '';
  
})
bottomLink3.addEventListener('mouseout', function(){
  bottomLink3.style.backgroundColor = '';
  
})

bottomLink4.addEventListener('mousedown', function(){
  bottomLink4.style.backgroundColor = 'rgb(2,91,217)';

})
bottomLink4.addEventListener('mouseup', function(){
  bottomLink4.style.backgroundColor = '';
  
})
bottomLink4.addEventListener('mouseout', function(){
  bottomLink4.style.backgroundColor = '';
  
})
forward.addEventListener('click', function(){
    trackNowPlay.currentTime += 10;
    eventDiv.style.visibility = 'visible';
    eventText.innerHTML = 'Forward';
    eventSvg.innerHTML = '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM4.79 5.093 8 7.386V5.5a.5.5 0 0 1 .79-.407l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 8 10.5V8.614l-3.21 2.293A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .79-.407Z"/>';
})
play.addEventListener('click', function(){
    if(trackNowPlay.paused){
        localStorage.setItem('playing?', '1');
        trackNowPlay.play();
        eventDiv.style.visibility = 'visible';
        eventText.innerHTML = 'Playing';
        eventSvg.innerHTML = '<path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>';
        play.innerHTML = '<path class="playcls" d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>';
    }
    else{
        localStorage.setItem('playing?', '0');
        trackNowPlay.pause();
        eventText.innerHTML = 'Paused';
    eventSvg.innerHTML = '<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>';
        document.querySelector('.roar-monster-section').style.backgroundImage = ' url(roarmonster-classic.png)';
        play.innerHTML = '<path class="<path class="playcls" d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>';
    }
})
function eventClose(){
  eventDiv.style.visibility = 'hidden';

}
trackNowPlay.addEventListener('timeupdate', function(){
  trackNowPlay.addEventListener('pauseed', function(){
    eventDiv.style.visibility = 'visible';
    eventText.innerHTML = 'Paused';
    eventSvg.innerHTML = '<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>';
  })
    lyr.scrollBy(0,(trackNowPlay.currentTime)/20);
    document.querySelector('.tracks').addEventListener('mouseover', function(){
      setTimeout(eventClose, 1000);
    
    })
    document.querySelector('.display').addEventListener('mouseover', function(){
      eventDiv.style.visibility = 'visible';
    })
    
    prog.style.width= Math.floor(trackNowPlay.currentTime)+"%";
    console.log(prog.style.width);
    if(trackNowPlay.paused){
      eventDiv.style.visibility = 'visible';
    /*eventText.innerHTML = 'Paused';
    eventSvg.innerHTML = '<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>';
        document.querySelector('.roar-monster-section').style.backgroundImage = ' url(roarmonster-classic.png)';*/
        play.innerHTML = '<path class="<path class="playcls" d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>';
    }else{
      /*eventDiv.style.visibility = 'visible';
      eventText.innerHTML = 'Playing';
      eventSvg.innerHTML = '<path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>';*/
      document.querySelector('.roar-monster-section').style.backgroundImage = '';
        play.innerHTML = '<path class="playcls" d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>';
    }
    trackDur.innerHTML = Math.floor((trackNowPlay.currentTime*60)/60);
    if(trackDur.innerHTML > 59){
        trackDur.innerHTML = Math.round(Math.floor((trackNowPlay.currentTime*60)/60)/60) + 'm+';
    }else if(10> trackDur.innerHTML){
        trackDur.innerHTML = '0.0'+Math.floor((trackNowPlay.currentTime*60)/60)
    }else if(10<=trackDur.innerHTML){
        trackDur.innerHTML = '0.'+Math.floor((trackNowPlay.currentTime*60)/60)
    }
  
    if(!inputLink.value){
      gobtn.disabled = true;
      gobtn.style.cursor = 'default';
      gobtn.style.fill = 'rgb(119, 7, 211)';
    }else{
      gobtn.disabled = false;
      gobtn.style.fill = '';
      gobtn.style.cursor = '';
    }
})

backward.addEventListener('click', function(){
    trackNowPlay.currentTime -= 10;
    eventDiv.style.visibility = 'visible';
    eventText.innerHTML = 'Backward';
    eventSvg.innerHTML = ' <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.79-2.907L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.79-.407z"/>';
})
replay.addEventListener('click', function(){
        eventDiv.style.visibility = 'visible';
        eventText.innerHTML = 'Replaying';
        eventSvg.innerHTML = '<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>';
        trackNowPlay.currentTime = 0;
        trackNowPlay.pause();
  
})
trackNowPlay.addEventListener('canplay', function(){
  document.querySelector('.playtrack').style.opacity = '';
  document.querySelector('.playtrack').disabled = false;
   document.querySelector('.fireshell-load').style.visibility = 'hidden';
   document.querySelector('.fireshell-load').style.position = 'absolute';
   document.querySelector('.roar-monster-section').style.visibility = 'visible';
   document.querySelector('.roar-monster-section').style.position = 'relative';
   document.querySelector('.roar-monster-section').style.animation = 'fade-in 1s 1';
   
})
trackNowPlay.addEventListener('loadstart', function(){
  document.querySelector('.playtrack').disabled = true;
  document.querySelector('.playtrack').style.opacity = '60%';
  eventDiv.style.visibility = 'visible';
    eventText.innerHTML = 'Loading';
    eventSvg.innerHTML = ' <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/><path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>';
  trackNowPlay.pause();
  document.querySelector('.fireshell-load').style.visibility = 'visible';
   document.querySelector('.fireshell-load').style.position =    'absolute';
})
let onpage = 0;
showMore.addEventListener('mouseup', function(){
    document.querySelector('.right').style.width = '10%';
    showMore.style.position = 'fixed';
  
    if(onpage == 0){
        document.querySelector('.right').style.width = '10rem';
        track1.style.visibility = 'visible';
        track2.style.visibility = 'visible';
        track3.style.visibility = 'visible';
        track4.style.visibility = 'visible';
        track5.style.visibility = 'visible';
        onpage = 1;
    }else if(onpage == 1){
      track1.style.visibility = 'hidden';
      track2.style.visibility = 'hidden';
      track3.style.visibility = 'hidden';
      track4.style.visibility = 'hidden';
      track5.style.visibility = 'hidden';
        document.querySelector('.right').style.width = '0%';
        onpage = 0;
    }
})
if(localStorage.getItem('playing?') == '1' ){
    trackNowPlay.play();
    
}else{
    trackNowPlay.pause();
}

  if(navigator.userAgent.match(/android/i)){
    browserMode.innerHTML= '<path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.94 8.94 0 0 1 8 5a8.94 8.94 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>';

  }
  if(navigator.userAgent.match(/iPad|iPhone|iPod/i)){
    browserMode.innerHTML= '<path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/><path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>';
  }else{
    browserMode.innerHTML= '<path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>';
  }

  trackNowPlay.addEventListener('ended', function(){
    setTimeout(afterReplay ,3000 );
    trackDur.innerHTML = 'Replaying In 3 seconds'; 
  })
  function afterReplay(){
    trackNowPlay.play();
    
  }
  document.querySelector('.developer').addEventListener('click',function(){
    window.open("https://github.com/NekshaDeSilva");
  })
  document.querySelector('.emailus').addEventListener('click',function(){
    window.open("mailto:rohandesilvahotmail@gmail.com");
  })
  trackNowPlay.addEventListener('playing', function(){
    document.querySelector('.roar-monster-section').style.animation = 'roarplay-anim 10s infinite linear';
  })
  gobtn.style.visibility = 'hidden';
  gobtn.style.position =   'fixed';
  closeTop.style.visibility = 'hidden';
  closeTop.style.position =   'fixed';
addNew.addEventListener('click', function(){
  document.querySelector('.top').style.height = '3rem';
  noneinWindow();
  inputLink.style.visibility = 'visible';
  inputLink.style.position =  'relative';
  gobtn.style.visibility = 'visible';
  gobtn.style.position =  'relative';
  closeTop.style.visibility = 'visible';
  closeTop.style.position =  'relative';
})
function noneinWindow(){
  document.querySelector('.right').style.width = '0%';
  onpage = 0;
  track1.style.visibility = 'hidden';
      track2.style.visibility = 'hidden';
      track3.style.visibility = 'hidden';
      track4.style.visibility = 'hidden';
      track5.style.visibility = 'hidden';
}
closeTop.addEventListener('click', function(){
  document.querySelector('.top').style.height = '0rem';
  noneinWindow();
  gobtn.style.visibility = 'hidden';
  gobtn.style.position =   'fixed';
  closeTop.style.visibility = 'hidden';
  closeTop.style.position =   'fixed';
  inputLink.style.visibility = 'hidden';
  inputLink.style.position =   'fixed';
})
gobtn.addEventListener('click', function(){
  let inputLinkValue = inputLink.value;
  closetopF();
  trackNowPlay.src = inputLinkValue;
  console.log(trackNowPlay);
  trackNowPlay.load();
  
  trackNowPlay.play();
})
function closetopF(){
  document.querySelector('.top').style.height = '0rem';
  noneinWindow();
  gobtn.style.visibility = 'hidden';
  gobtn.style.position =   'fixed';
  closeTop.style.visibility = 'hidden';
  closeTop.style.position =   'fixed';
  inputLink.style.visibility = 'hidden';
  inputLink.style.position =   'fixed';
}
track1.addEventListener('click', function(){
  let inputLinkValue = 'https://www.in2unemusic.com/featuredartists/despacito/luis_fonsi_daddy_yankee_feat_bieber_despacito_remix.mp3';
  closetopF();
  trackNowPlay.src = inputLinkValue;
  console.log(trackNowPlay);
  trackNowPlay.load();
  
  trackNowPlay.play();
})
track2.addEventListener('click', function(){
   let inputLinkValue ='https://sv2.mybia2music.com/s2/Music/1399/03/29/Jason%20Derulo/Jason%20Derulo%20-%20Savage%20Love.mp3';
  closetopF();
  trackNowPlay.src = inputLinkValue;
  console.log(trackNowPlay);
  trackNowPlay.load();
  
  trackNowPlay.play();
})
track3.addEventListener('click', function(){
 let inputLinkValue = 'https://dl3.wapkizfile.info/filedownload/G8cEsvIWYdgsEfZKt81zGSr_p_uuaeci1_s_vt38ypUM4xPf_p_JxLDF4TaaizZPrK3JNycUv4ur3MwLvU4poMn9O2pyOFVAPLNhD925nNMUxkdaaPI0HSP1SaE_s_adtHlqOCUMzm3ziw2uYTsoFg9jYBYA_s_w_p_EyA/TheFatRat-Monody-feat-Laura-Brehm-(englishsongs.fun).mp3';
  closetopF();
  trackNowPlay.src = inputLinkValue;
  console.log(trackNowPlay);
  trackNowPlay.load();
  
  trackNowPlay.play();
})
track4.addEventListener('click', function(){
  let inputLinkValue = 'https://sinhanada.net/files/Your%20Request%20Mp3/I%20Want%20It%20That%20Way%20-%20Backstreet%20Boys.mp3';
  closetopF();
  trackNowPlay.src = inputLinkValue;
  console.log(trackNowPlay);
  trackNowPlay.load();
  
  trackNowPlay.play();
})
track5.addEventListener('click',  function(){
  let inputLinkValue ='https://cdn.trendybeatz.com/audio/Spice-Go-Down-Deh-Ft-Sean-Paul-And-Shaggy-(TrendyBeatz.com).mp3'
  closetopF();
  trackNowPlay.src = inputLinkValue;
  console.log(trackNowPlay);
  trackNowPlay.load();
  
  trackNowPlay.play();
})
let effectBoxA=0;
effectsP.addEventListener('click', function(){
  if(effectBoxA == 0){
    effectBoxA = 1;
    settingPop.style.visibility ='visible';
    settingPop.style.position = 'relative';
    adPop.style.visibility ='visible';
    adPop.style.position = 'relative';
    document.querySelector('.popup-box-container-hidden-cen').style.animation = 'pop-up-in-come-anim 1s 1';
  }else if(effectBoxA == 1){
    effectBoxA = 0;
    settingPop.style.visibility ='hidden';
    settingPop.style.position = 'fixed';
    adPop.style.visibility ='hidden';
    adPop.style.position = 'fixed';
    document.querySelector('.popup-box-container-hidden-cen').style.animation = '';
  }

})
svSetting.addEventListener('mousedown', function(){
  svSetting.style.backgroundColor = 'rgb(6, 110, 180)';
})
svSetting.addEventListener('mouseup', function(){
  svSetting.style.backgroundColor = '';
})