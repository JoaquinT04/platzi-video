const VERSION = "v1";

self.addEventListener('install', event =>{
	event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
	const request = event.request;
	// get

	if (request.method !== "GET"){
		return;
	}

	// buscar en cache

	event.respondWith(cachedResponse(request))
})

async function precache() {
	const cache = await caches.open(VERSION);
	return cache.addAll([
		'./',
		'./ejercicios/index.html',
		'./CSS/index.css',
		'./js/index.js',
		'./js/MediaPlayer.js',
		'./js/plugins/AutoPause.js',
		'./js/plugins/AutoPlay.js',
		'./Assets/BigBuckBunny.mp4',
	])
}

async function cachedResponse(request) {
	const cache = await caches.open(VERSION)	
	const response = await cache.match(request)
	return response || fetch(request);
}