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

	// actualizar el cache
	event.waitUntil(updateCache(request));
})

async function precache() {
	const cache = await caches.open(VERSION);
	return cache.addAll([
		'./',
		'./media-player-project/index.html',
		'./CSS/index.css',
		'./media-player-project/dist/index.js',
		'./media-player-project/dist/MediaPlayer.js',
		'./media-player-project/dist/plugins/AutoPause.js',
		'./media-player-project/dist/plugins/AutoPlay.js',
		'./Assets/BigBuckBunny.mp4',
	])
}

async function cachedResponse(request) {
	const cache = await caches.open(VERSION)	
	const response = await cache.match(request)
	return response || fetch(request);
}

async function updateCache(request) {
	const cache = await caches.open(VERSION);	
	const response = await fetch(request);
	return cache.put(request, response);
}