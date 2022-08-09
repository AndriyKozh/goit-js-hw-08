import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
// console.log(player);
// console.log(player);
// let keceivedTime;

player.on('timeupdate', onPlay);

const onPlay = function (ev) {
  const currentTime = ev.seconds;
  //   data.preventDefault();
  localStorage.setItem('videoplayer-current-time', currentTime);
};

const savedTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(savedTime);
