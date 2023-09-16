'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8b60d12c0e6b3175a718053e1e1b4881",
"assets/AssetManifest.json": "1cd30a818490bca90a941e4b08985442",
"assets/font/Aleo-Bold.otf": "bc3c545b14191c62487f04af2ed6a58f",
"assets/font/Aleo-Bolditalic.otf": "5affcc1f345dc224dc4925448517c7a0",
"assets/font/Aleo-LightItalic.otf": "b9588fdf0b83d9f297883aeecea54b24",
"assets/font/Aleo-Regular.otf": "8e10b51a8e7f62a45d230aefe9b55f44",
"assets/font/DaysOne-Regular.ttf": "2ee3184faa4447038f4e0645cc0ca73a",
"assets/font/Game_Of_Squids.ttf": "5b8de4df6e77a901a99b3a5928891433",
"assets/font/GeraldinePersonalUseItalic-PK12m.ttf": "f54f980c88361538e9f438bddf5eb509",
"assets/font/Gray_Skin.otf": "0fea42a0874e5be10d1039e728d138fc",
"assets/font/NeueHaasDisplayLight.ttf": "cedb0be9ae2bd1fd529d9003a5ddae34",
"assets/font/red.ttf": "a95f78842615261913a4fd822397af82",
"assets/font/Squares%2520Bold%2520Free.otf": "3469b4855459f886539c5ac862938a88",
"assets/font/UnmaskedBB_bold.ttf": "5d2ebcbd3ac63b7c6f414614830ddf32",
"assets/FontManifest.json": "3d85cce56a6841b93ab2c21c46404c63",
"assets/fonts/MaterialIcons-Regular.otf": "42c617746f9d5577a6d9c34bd76f7971",
"assets/image/arrow.gif": "bc8510e5a24288abf7fcd02a1cfa2c47",
"assets/image/bg.gif": "cb9a8878f21d4d5b21a08309d43d4042",
"assets/image/calendar.gif": "9ca4044fcbe4ace75e42d4b6dd84abed",
"assets/image/coin.gif": "961114170ee01f077dcc223dd3637c8f",
"assets/image/distance.gif": "576d105affc6204274b059580e261b94",
"assets/image/driver_license.png": "2d79dcd8942b0a5ee94d04d9296ba08c",
"assets/image/driver_license1.png": "103678457e37fe194da39087c9282383",
"assets/image/facebook1.png": "d802c247deba3f4331e338be72e51220",
"assets/image/forgot_page_image-removebg-preview%2520(1).png": "1bfd3d7eeb57b2594bf046b0956195fd",
"assets/image/Google%2520icon1.png": "0f6aab8662aff94700f19dff03fe3d52",
"assets/image/Home.java": "1dc7d2a26850cb6612a8c4c1e7925496",
"assets/image/image-5.png": "56ecddb42662168d05afe03e7bd55471",
"assets/image/img%25203.png": "4609fb6d333a6a9eff7e721c0e779fbe",
"assets/image/img.png": "b6e1f93995796ccdfcc57a58c928e532",
"assets/image/img4.png": "203fd311b4d455fc14cf6d701107dae6",
"assets/image/loca.jpg": "27830ffb14836a2d3143ba06d93717e7",
"assets/image/location_gif.gif": "fad5d2cd42cc87282f5a4cc8f15bf2c4",
"assets/image/location_icon.jpg": "6802c754e001fa5e1cec8e682f7d360b",
"assets/image/login_1.png": "7e2ab33ae23a699670f993c12b1d56f2",
"assets/image/logo1.png": "1a94d8a9d63cfd5615d93bbc5580e37f",
"assets/image/o-d.jpg": "2abd827189e6d1243b27e7171692720a",
"assets/image/o-d1.png": "14de965a828865a91f7a7f5c74587859",
"assets/image/or-de.png": "47aead98ed0fd438109588f153c68841",
"assets/image/Otp_image.png": "bcbc854a20986b73a3dc7c7ebb26a874",
"assets/image/purse.gif": "13711d9c198a5419245fa37b40df7a62",
"assets/image/reset_pass.png": "fb919833bec2224ad509e97ab5a05277",
"assets/image/sign1.png": "4eaa1b44732f20a02d93018ebc00a430",
"assets/image/stop_locate.gif": "5056f903d993ff7ac3c2f84d8af95d8c",
"assets/image/trucklahlogo_blue.png": "38bc84ad3426e59cc5a33c257925d2e1",
"assets/image/trucklahlogo_white.png": "bfc69d08fe5649e793fbd1d3115c9bdf",
"assets/image/van_gif.gif": "9ddf6bcc7ef3f11e87375b67b8bc4145",
"assets/image/wallet.gif": "afbcdb04fc5c6db9905bd5800353bc4f",
"assets/NOTICES": "42852ad4c6b13996ed6d95a6f3877e75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eedd16643c93cccb211fc97ee226adbc",
"/": "eedd16643c93cccb211fc97ee226adbc",
"main.dart.js": "c068464f768a5048d310490af7880dd2",
"manifest.json": "207ea94ae4da7b8bfa79afab5ec6442a",
"version.json": "eaa77539797b0914ba677cd21347827b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
