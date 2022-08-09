import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
const player = new Player('vimeo-player');
const TIME_VIDEO = 'videoplayer-current-time';
player.on(
  'timeupdate',
  throttle(function (ev) {
    localStorage.setItem(TIME_VIDEO, JSON.stringify(ev.seconds));
  }, 1000)
);

if (localStorage.getItem(TIME_VIDEO)) {
  player.setCurrentTime(JSON.parse(localStorage.getItem(TIME_VIDEO)));
}
