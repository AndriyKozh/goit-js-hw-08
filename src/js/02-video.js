import vimeoPlayer from '@vimeo/player';
// import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);
// console.log(player);
// console.log(player);
// let keceivedTime;

player.on('play', onPlay);

const onPlay = function (ev) {
  const currentTime = ev.seconds;
  //   data.preventDefault();
  localStorage.setItem('videoplayer-current-time', currentTime);
};

const savedTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(savedTime);
