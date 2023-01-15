//All Made By Neksha DeSilva
//All Images And Icons Of Roar™ is belongs to NekshaDeSilva
const trackDta = {
  name:'Monody - TheFatRat',
  artist:'TheFatRat x Laura Brehm',
  lyrics:'No Lyrics For This Song',
  imgBanner:'./cdn/desawanaMusic/mageHadeUpanLade/OIP.jpeg',
  track:'./cdn/desawanaMusic/mageHadeUpanLade/track.mp3',
  waveColor:'rgb(13, 12, 24)',
  songType:'inst',
  profileColor:'',
  artistV:'1'
}
const trackNowPlay = new Audio(trackDta.track);
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
const eventDiv = document.querySelector('.roar-event-div');
const eventSvg = document.querySelector('.btn-display');
const eventText = document.querySelector('.roar-event-h3');
const shufflePlay  = document.querySelector('.shuffle');
const star = document.querySelector('.star');
const effectsP = document.querySelector('.effects-pizzicato');
const settingPop  =document.querySelector('.pop-up-settings');
const adPop= document.querySelector('.pop-up-documentation');
const rzSetting = document.querySelector('.resetBtn-settings');
const effectPlayBtn  =document.querySelector('.playbtnE');
const trackName = document.querySelector('.trackN');
const trackAz= document.querySelector('.trackAz');
const trackBanner = document.querySelector('#waveform');
const lyrics = document.querySelector('.lyr3');
const addNewDiv = document.querySelector('.add-key-div-right');
const commonInvisDiv = document.querySelector('.add-key-div-right');
const commonInvisDiv2 = document.querySelector('.upload-offline-key-div-right');
const rightPLft= document.querySelector('.right-p-left');
const loadDiv = document.querySelector('.loadwheel-right-ops-common');
const msgBox_hero_big  = document.querySelector('#massage-box-cen');
const massageBox = document.querySelector('#promo-msg') || document.querySelector('#msg');
effectMuteStatus = 0;
prog.value =0;
effectPlayBtn.addEventListener('click', function(){
  if(effectMuteStatus== 0){
    effectMuteStatus=1;
    sineWave.pause();
    sineWave.connect
    effectPlayBtn.innerHTML = '<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>'
  }else{
    sineWave.play();
    effectMuteStatus = 0;
    effectPlayBtn.innerHTML = ' <path class="playcls" d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>';
  }
});

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
    wavesurfer.skipForward(10);
    wavesurfer.pause();
    eventSvg.innerHTML = '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM4.79 5.093 8 7.386V5.5a.5.5 0 0 1 .79-.407l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 8 10.5V8.614l-3.21 2.293A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .79-.407Z"/>';
})
play.addEventListener('click', function(){
    if(trackNowPlay.paused){
        localStorage.setItem('playing?', '1');
        trackNowPlay.play();
        wavesurfer.play();
        eventDiv.style.visibility = 'visible';
        eventText.innerHTML = 'Playing';
        eventSvg.innerHTML = '<path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>';
        play.innerHTML = '<path class="playcls" d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>';
    }
    else{
        localStorage.setItem('playing?', '0');
        trackNowPlay.pause();
        wavesurfer.pause()
        eventText.innerHTML = 'Paused';
    eventSvg.innerHTML = '<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>';
        play.innerHTML = '<path class="<path class="playcls" d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>';
    }
})
function eventClose(){
  eventDiv.style.visibility = 'hidden';

}
trackNowPlay.addEventListener('timeupdate', function(){
  localStorage.setItem('playC',(trackNowPlay.currentTime))
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
    prog.value =100 /  trackNowPlay.duration *trackNowPlay.currentTime ;
    if(trackNowPlay.paused){
      eventDiv.style.visibility = 'visible';
      wavesurfer.pause()
    /*eventText.innerHTML = 'Paused';
    eventSvg.innerHTML = '<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>';
        document.querySelector('.roar-monster-section').style.backgroundImage = ' url(roarmonster-classic.png)';*/
        play.innerHTML = '<path class="<path class="playcls" d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>';
    }else{
      /*eventDiv.style.visibility = 'visible';
      eventText.innerHTML = 'Playing';
      eventSvg.innerHTML = '<path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>';*/
      wavesurfer.play()
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
      gobtn.style.fill = 'rgb(40, 38, 70)';
    }else{
      gobtn.disabled = false;
      gobtn.style.fill = '';
      gobtn.style.cursor = '';
    }


})
prog.addEventListener('change', function(){
  
})
backward.addEventListener('click', function(){
    trackNowPlay.currentTime -= 10;
    eventDiv.style.visibility = 'visible';
    eventText.innerHTML = 'Backward';
    wavesurfer.skipBackward(10);
    wavesurfer.pause();
    eventSvg.innerHTML = ' <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.79-2.907L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.79-.407z"/>';
})
replay.addEventListener('click', function(){
        eventDiv.style.visibility = 'visible';
        wavesurfer.setCurrentTime(0);
        eventText.innerHTML = 'Replaying';
        eventSvg.innerHTML = '<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>';
        trackNowPlay.currentTime = 0;
        trackNowPlay.pause();
  
})
trackNowPlay.addEventListener('canplay', function(){

  prog.value =100 /  trackNowPlay.duration *trackNowPlay.currentTime ;
  trackName.innerHTML = trackDta.name;
  trackAz.innerHTML = trackDta.artist;
  trackBanner.style.backgroundImage = 'url(' + trackDta.imgBanner + ')';
  lyrics.innerHTML = trackDta.lyrics;
  lyrics.style.whiteSpace = 'pre-wrap';
  lyrics.style.lineHeight = '26px';
  document.querySelector('.playtrack').style.opacity = '';
  document.querySelector('.playtrack').disabled = false;
   loadDiv.style.visibility = '';
  msgBox_hero_big.style.visibility = '';
});
trackNowPlay.addEventListener('loadstart', function(){
  wavesurfer.pause();
  document.querySelector('.playtrack').disabled = true;
  document.querySelector('.playtrack').style.opacity = '60%';
  eventDiv.style.visibility = 'visible';
    eventText.innerHTML = 'Loading';
    eventSvg.innerHTML = ' <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/><path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>';
  trackNowPlay.pause();
  loadDiv.style.visibility = 'visible';
  msgBox_hero_big.style.visibility = 'visible';
})
let onpage = 0;
showMore.addEventListener('mouseup', function(){
  if(onpage == 0){
    document.querySelector('.right').style.width = '100%';
    document.querySelector('.beatmaax-svg-signIn').style.visibility = 'visible';
    document.querySelector('.beatmaax-svg-signIn').style.position = 'relative';
    commonInvisDiv.style.visibility =  'visible';
    commonInvisDiv.style.position = 'relative';
    commonInvisDiv2.style.visibility =  'visible';
    commonInvisDiv2.style.position = 'relative';
    rightPLft.style.paddingRight = '1rem';
    rightPLft.style.animation = 'right-outcome-fd 300ms 1';
    onpage = 1;
  }else{
    document.querySelector('.right').style.width = '0%';
    document.querySelector('.beatmaax-svg-signIn').style.visibility = 'hidden';
    document.querySelector('.beatmaax-svg-signIn').style.position = 'fixed';
    commonInvisDiv.style.visibility = 'hidden';
    commonInvisDiv.style.position =   'fixed';
    commonInvisDiv2.style.visibility ='hidden';
    commonInvisDiv2.style.position =  'fixed';
    rightPLft.style.paddingLeft = '';
    rightPLft.style.paddingRight = '';
    rightPLft.style.animation = 'right-income-fd 1s 1';
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
  document.querySelector('.email-feedbackDiv').addEventListener('click',function(){
    window.open("mailto:rohandesilvahotmail@gmail.com");
  })
  trackNowPlay.addEventListener('playing', function(){
  
  })
  gobtn.style.visibility = 'hidden';
  gobtn.style.position =   'fixed';
  closeTop.style.visibility = 'hidden';
  closeTop.style.position =   'fixed';
addNew,addNewDiv.addEventListener('click', function(){
  window.scrollTo(0, -200)
  document.querySelector('.top').style.height = '3rem';
  noneinWindow();
  inputLink.style.visibility = 'visible';
  inputLink.style.position =  'relative';
  gobtn.style.visibility = 'visible';
  gobtn.style.position =  'relative';
  closeTop.style.visibility = 'visible';
  closeTop.style.position =  'relative';
  commonInvisDiv.style.visibility =  'hidden';
  commonInvisDiv.style.position = 'fixed';
  commonInvisDiv.style.transition = '0';
  commonInvisDiv2.style.visibility ='hidden';
  commonInvisDiv2.style.position =  'fixed';
  rightPLft.style.paddingLeft = '';
  rightPLft.style.paddingRight = '';
  rightPLft.style.animation = 'right-income-fd 1s 1';
})
function noneinWindow(){
  document.querySelector('.right').style.width = '0%';
  onpage = 0;
  commonInvisDiv.style.visibility =  'hidden';
  commonInvisDiv.style.position = 'fixed';
  commonInvisDiv2.style.visibility ='hidden';
  commonInvisDiv2.style.position =  'fixed';
  rightPLft.style.paddingLeft = '';
  rightPLft.style.paddingRight = '';
  rightPLft.style.animation = 'right-income-fd 1s 1';
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

let effectBoxA=0;
document.querySelector('.roar-section-cen').style.backgroundImage = 'linear-gradient(65deg,rgb(6, 110, 180, 0.836),rgb(119, 7, 211, 0.836)50%,rgb(24,24,24)3%),' + 'url('+ trackDta.imgBanner + ')'; 


effectsP.addEventListener('click', function(){
  if(effectBoxA == 0){
    effectBoxA = 1;
    
      
    
    

    settingPop.style.visibility ='visible';
    settingPop.style.position = 'relative';
    document.querySelector('.trackD').style.animation = 'trackD-Top-anim 500ms 1';
    adPop.style.visibility ='visible';
    adPop.style.position = 'relative';
    document.querySelector('.display').style.visibility = 'hidden';
    document.querySelector('.display').style.position = 'fixed';;
    document.querySelector('.hidden-divFor-more-effects').appendChild(showMore);
    showMore.style.position = 'relative';
    document.querySelector('.hidden-divFor-more-effects').style.position = 'relative';
    document.querySelector('.hidden-divFor-more-effects').style.visibility = 'visible';

    document.querySelector('.popup-box-container-hidden-cen').style.animation = 'pop-up-in-come-anim 1s 1';
  }else if(effectBoxA == 1){
    effectBoxA = 0;
   

    document.querySelector('.trackD').style.animation = 'pop-up-in-come-anim 500ms 1';
    document.querySelector('body').appendChild(showMore);
    document.querySelector('.display').style.visibility = 'hidden';
    showMore.style.position = 'fixed';
    document.querySelector('.display').style.position = 'fixed';
    
    settingPop.style.visibility ='hidden';
    settingPop.style.position = 'fixed';
    adPop.style.visibility ='hidden';
    document.querySelector('.display').style.visibility = 'visible';
    document.querySelector('.display').style.position = 'relative';
    adPop.style.position = 'fixed';
    document.querySelector('.popup-box-container-hidden-cen').style.animation = '';
  }

})
rzSetting.addEventListener('mousedown', function(){
  rzSetting.style.backgroundColor = 'rgb(182, 36, 0)';
})
rzSetting.addEventListener('mouseup', function(){
  rzSetting.style.backgroundColor = '';
})
document.querySelector('body').addEventListener('dblclick' , function(){
  document.querySelector('#massage-box-cen').style.visibility = 'visible';
})
const passwordTxtInpt = document.querySelector('.password-input');
const passwordStatus =document.querySelector('.password-stts-spn');
passwordTxtInpt.addEventListener('input', function(){
    if(passwordTxtInpt.value.length >= 8){
        passwordStatus.innerHTML = 'Max Is 8 Chars.'
    }else if(passwordTxtInpt.value.length <= 7){
      passwordStatus.innerHTML = 'Type More.';
      pswrdlivechk()
    }
    function pswrdlivechk() { passwordStatus.innerHTML += ' 8 / ' + passwordTxtInpt.value.length}
    if(passwordTxtInpt.value.length == 8){
      return pswrdlivechk();
    }
    var ranges = [
      '\ud83c[\udf00-\udfff]',
      '\ud83d[\udc00-\ude4f]',
      '\ud83d[\ude80-\udeff]' 
    ];
    
    
   
      removeInvalidChars();
  
    
    function removeInvalidChars() {
      var str = passwordTxtInpt;
     
      str = str.replace(new RegExp(ranges.join('|'), 'g'), '');
    }
});
const nameTextInput = document.querySelector('.username-input');
nameTextInput.addEventListener('input', function(){
  /*Postponed
  const newDiv = document.createElement('div');
  document.querySelector('.common-right-p-div-toolbox-all').appendChild(newDiv);
  document.querySelector('div').className = 'common-right-p-div-toolbox';
  */
});

document.querySelector('body').addEventListener('DOMContentLoaded', function(){
  prog.value =100 /  trackNowPlay.duration *trackNowPlay.currentTime ;
  trackName.innerHTML = trackDta.name;
  trackAz.innerHTML = trackDta.artist;
  trackBanner.style.backgroundImage = 'url(' + trackDta.imgBanner + ')';
  lyrics.innerHTML = trackDta.lyrics;
  lyrics.style.whiteSpace = 'pre-wrap';
  lyrics.style.lineHeight = '26px';
})

//this is the starting of pizzicato Js
//this is the starting of pizzicato Js

const pannerInput = document.querySelector('.str-pan');
const pannerInputText = document.querySelector('.pan-value');
const pannerInputRight = document.querySelector('.str-pan1');
const flangerInput = document.querySelector('.str-fln');
const flangerInputText = document.querySelector('.fln-value');
const noiseInput  = document.querySelector('.str-noi');
const noiseInputText = document.querySelector('.noi-value');
const bassInput = document.querySelector('.str-bass');
const bassInputText = document.querySelector('.bass-value');
const picthInput = document.querySelector('.str-pch');
const pitchInputText = document.querySelector('.pch-value');


function pChk(){
  if(picthInput.checked == true){
    localStorage.setItem('pchNode', 1);
    pitchInputText.innerHTML = 'On';
    pitchInputText.innerHTML = (picthInput.value);
    sineWave.addEffect(
      highPassFilter
      
    );
  
    
  }else{
    localStorage.setItem('pchNode', 0);
    pitchInputText.innerHTML = 'None';
    sineWave.removeEffect(
      highPassFilter
    );
  }

 
}
function paChk(){
  if (pannerInput.checked == true) {
    localStorage.setItem('panNode', 1);
    sineWave.addEffect(
      sterioPanner
      
    );
   
    
  } else if(pannerInput.checked == false) {
    localStorage.setItem('panNode', 0);
    sineWave.removeEffect(
      sterioPanner
    )
  }
  
  
}
function paOChk(){
  if (pannerInputRight.checked == true) {
    localStorage.setItem('panRightNode', 1);
    sineWave.addEffect(
      sterioPannerRight
    );
   
  } else if(pannerInputRight.checked == false) {
    localStorage.setItem('panRightNode', 0);
    sineWave.removeEffect(
      sterioPannerRight
    )
  }
  
}
function fChk(){
  if(flangerInput.checked == true){
    flangerInputText.innerHTML = 'On';
    localStorage.setItem('flngerNode', 1);
    sineWave.addEffect(
      flanger
    );
   
  }else{
    flangerInputText.innerHTML = 'None';
    localStorage.setItem('flngerNode', 0);
    sineWave.removeEffect(
      flanger
    );
  }
}
function nChk(){
  if(noiseInput.checked == true){
    noiseInputText.innerHTML = 'On';
    localStorage.setItem('noiseNode', 1);
    sineWave.addEffect(
      noise,
      delay,
      convolver
    );
    
  }else{
    noiseInputText.innerHTML = 'None';
    localStorage.setItem('noiseNode', 0);
    sineWave.removeEffect(
      noise,
      delay,
      convolver
    );
  }
}
function bChk(){
  if(bassInput.checked == true){
    bassInputText.innerHTML = 'On';
    localStorage.setItem('bassNode', 1);
    sineWave.addEffect(
    lowPassFilter
    );
    
  }else{
    bassInputText.innerHTML = 'None';
    localStorage.setItem('bassNode', 0);
    sineWave.removeEffect(
     lowPassFilter
    );
  }
}
rzSetting.addEventListener('click',function(){
  localStorage.removeItem('flngerNode');
  localStorage.removeItem('pchNode');
  localStorage.removeItem('panNode');
  localStorage.removeItem('panRightNode');
  localStorage.removeItem('flngerNode');
})
var sineWave  = new Pizzicato.Sound({
  source:'file',
  options:{
    path: trackDta.track
  },function() {
    console.log('sound file loaded!');
}

});
var highPassFilter = new Pizzicato.Effects.HighPassFilter({
  frequency:15,
  peak: 10
 });

var sterioPanner = new Pizzicato.Effects.StereoPanner({
  pan:-1
});
var sterioPannerRight = new Pizzicato.Effects.StereoPanner({
  pan:+1
});
var noise = new Pizzicato.Effects.PingPongDelay({
  feedback: 0.1,
  time: 1,
  mix: -0.5
});
var delay = new Pizzicato.Effects.Delay({
  feedback: 0.6,
  time: 1,
  mix: +1
});
var flanger = new Pizzicato.Effects.Flanger({
  time: 0.45,
  speed: 0.2,
  depth: 0.3,
  feedback: 0.1,
  mix: 0.5
 });
 var convolver = new Pizzicato.Effects.Convolver({
  impulse:'./compressor-Beat.mp3',
  mix: 0.5
}); 
var lowPassFilter = new Pizzicato.Effects.LowPassFilter({
  frequency: 440,
  peak: 3
});
window.addEventListener('load', function(){
  if(localStorage.getItem('noiseNode') == 1){
    noiseInput.value = true;

  }else if(!localStorage.getItem('noiseNode')){
    noiseInput.value = false;
  }
})

//WaveSurfer Js

var wavesurfer = WaveSurfer.create({
  container: '.roar-monster-section',
  waveColor: 'rgb(6, 110, 180)',
  progressColor: trackDta.waveColor,
  responsive:true,
  hideScrollbar: true,
  height:200,
  barGap: 3,
  barHeight: 1,
  barMinHeight: .1,
  barRadius: 6,
  barWidth: 4

});
wavesurfer.load(trackDta.track);
trackNowPlay.addEventListener('canplay', function(){
  wavesurfer.setVolume(0)
})
wavesurfer.on('ready', function(){
  document.querySelector('.fireshell-load').style.visibility = 'hidden';
  document.querySelector('.fireshell-load').style.position = 'absolute';
});
wavesurfer.on('error', function(){
  massageBox.style.visibility = 'visible';
  msgBox_hero_big.style.visibility = 'visible';
})