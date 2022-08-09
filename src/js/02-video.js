import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(player);

let keceivedTime;

player.on('play', onPlay);

const onPlay = function (data) {
  //   data.preventDefault();
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  keceivedTime = localStorage.getItem('videoplayer-current-time');
};
console.log(keceivedTime);
