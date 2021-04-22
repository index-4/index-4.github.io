'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "b796bca7954ea2795514e8a8f158cd8d",
".git/logs/HEAD": "38ba1665695ba4ddd421ad4d3f115441",
".git/logs/refs/heads/master": "8ec7267277116850a5897163a11032cd",
".git/logs/refs/heads/develop": "3941c7fd64c1250690f8d554251180f4",
".git/logs/refs/remotes/origin/master": "7b493f14cada962524ae17441397ac90",
".git/logs/refs/remotes/origin/develop": "c5d9bdec20c10cea2737e00523601aa7",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/bc/0c42e9f46a6667c9d60d13f12f333bb747438d": "5e013b650314aaa370cf8e9c760631f6",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/34/51eb056a74eec344f7238b71f87b1cb74d723c": "361f27f36837c6cdce7a05266b7bdcee",
".git/objects/2c/3810b25272d6b004cdf3df0b9c3e9d73573413": "6e1774753c0071308483a7e3d997d246",
".git/objects/b6/e4c4fb340825b7568bdb8e1d0904c047b2c944": "9485b1b9a42d143cd9f847784c77cda3",
".git/objects/73/3f9ea0a8765bec224c984a492c678f269fe56e": "d38f668d412b1cd392c91f1f7261e664",
".git/objects/54/5f6b7a8f96f75a445a5f3492b0e683c6bf0cb9": "187cf9dd032bbb6ded543301e1896a42",
".git/objects/1c/36a3130169a436dc5970ba9becbd0637e1ddae": "70193e14b34db1218bef29d1395f819a",
".git/objects/a2/fdd3e488ad31665024dd5a8484d7b06449de22": "6323fc07939c7f407edf63639e075253",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/2879b15fe45711cbe7fdf03b1402cb04940fa4": "aa8f2599e691c7cdecc6b591a2d2dec9",
".git/objects/03/c0c289e7191bf7367f442887a173389303fe20": "fd3fecc80ff3387d178cd64aa15f4ac8",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ea/d51a4606b3ce579976666b0199e09f9ac4f1bd": "b414f7ad9d3a984bdaff03f692304256",
".git/objects/f8/866eeabeff90c415079882271d0dad39ff0222": "39bb225f6f4b6e2ff321c6cbd1d178fd",
".git/objects/b0/019f90bde37f5c60a474fb4021c283a5bf1551": "d975f1dd2ac6891cf963e6711c7752ae",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/07/c4fb1121a0a2010b5fd5239d5816f2f0ddc44e": "1cf6e624743704d0374961283d002454",
".git/objects/5b/75c5befff8629be2f0f46c3a77fae6d5782298": "1faad486a4a770734db034fbee574b60",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/36/615f65937cb2cb86dcf4e64759d909d82cffb9": "893583d044f6732f8a6282093ff168ba",
".git/objects/f2/7fca413d93d5f2cba32b81bbc800d9a82a99a0": "75c16fb89ce36815d115e45d211b0acd",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/3f/8bdfb73a7fa47eff7906d72140d666fd0a1555": "19ce863f20035862e7430d6a46d51460",
".git/objects/04/43a408576f22b860c5443f7f619c298f35c0a9": "8c3b1483aa1915f2ba811b7200db859f",
".git/objects/9a/0fa85f5a3215ca98845fc57aa42309f874683c": "25f1811cd2f0db87e68d4c9c42f0eac6",
".git/objects/cb/7554b43fed1eb1a6806b8e2cba6dc5b6b2b81c": "63c19c1ae36db28fc2823760e5e76b9c",
".git/objects/80/e8d9fa421d6424ecf83593edb32fd4edc5c25d": "4429fa0ff3286cc5f5534c804a1e3807",
".git/objects/14/4cc4c4ac3ae59c6ed7515dcdb6dbf873674dda": "86316cc2cd6608d552de581e95a7ce50",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/master": "f24ad72cee691b828daf0ad6f48728ad",
".git/refs/heads/develop": "f24ad72cee691b828daf0ad6f48728ad",
".git/refs/remotes/origin/master": "f24ad72cee691b828daf0ad6f48728ad",
".git/refs/remotes/origin/develop": "f24ad72cee691b828daf0ad6f48728ad",
".git/index": "a926edc57a13890d4b4b67601e8edaa2",
".git/ORIG_HEAD": "01a6e0007ca6c7dc2b1871c304ca1598",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "76949bbee6021ca3d19d4dbe8af30634",
".git/config": "8b6d3c02245d06aed2934824f85d5b3d",
"assets/NOTICES": "0501e892e7c8d46055b69b9f16a407a8",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/cup.png": "c12f80143ef0cc79501b1d98f4a8f1f7",
"assets/assets/images/hop.png": "07bf19fa1cb01da8ced703703a20fb74",
"assets/AssetManifest.json": "9492bbe8128b20826b94d5cd35335fd2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"README.md": "e3ba31c2e10732f791edb97cc6a1477c",
"index.html": "1cd300e6a0ac79d0a56651cb86fe3dd7",
"/": "1cd300e6a0ac79d0a56651cb86fe3dd7",
"version.json": "ee9a2a13aaea9c22c7caa6bf66e7b5bc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"js/qr-scanner-worker.min.js": "6aa584a2de9d2c59e701a0879ae93973",
"js/qr-scanner.umd.min.js": "56585c72fa67697f9a7a6a3a8ee30b41",
"manifest.json": "6470adfc2f982cc5f9f5aa928058f124",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
