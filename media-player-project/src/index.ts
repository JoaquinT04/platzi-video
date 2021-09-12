import MediaPlayer from "./MediaPlayer";
import AutoPause from "./plugins/AutoPause";
import AutoPlay from "./plugins/AutoPlay";
import Ads from "./plugins/Ads";
/* trae todos los archivos de la carpeta, y la 
ventaja es no tener que importar cada archivo de la 
carpeta por separado, de hecho creo que todos los 
archivos que importamos en el index hubiese sido 
igual a una sola línea que importe toda la carpeta 
plugin (’./plugin’). Igualmente no se recomienda 
cargar librerías enteras porque ralentizan el 
proceso de carga de la web, por lo que lo ideal 
siempre es importar solamente lo que se va a 
utilizar, y en este caso sinceramente no entendí por 
qué no importó únicamente el index como lo venía 
haciendo. */

const video:HTMLMediaElement = document.querySelector('.video__movie');

const buttonPlay:HTMLElement = document.querySelector('.video__playButton');

const buttonMute:HTMLElement = document.querySelector('.video__muteButton');

const player = new MediaPlayer( 
	video,
	[
		new AutoPlay(),
		new AutoPause(),
		new Ads(),
	],
);

buttonPlay.onclick = () => player.playPause();

buttonMute.onclick = () => player.muteUnmute();


if ('serviceWorker' in navigator){
	navigator.serviceWorker.register('../sw.js').catch(error => {
		console.log(error.message);
	});
}