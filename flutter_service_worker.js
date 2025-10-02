'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "476599d00e36640373df231c6cdd9ae6",
".git/config": "8ea499ec7236e2c0318ce180951fd2a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a3219359c56002b2e09d9ad32b8d222f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "375c477733bb2642dd6efd6e305836e0",
".git/logs/refs/heads/main": "586ec54bc74d9f71afb842690cd64770",
".git/logs/refs/remotes/origin/main": "23bb4cdffd9812494f5c5e12884383ad",
".git/objects/01/b92b2a60c5454cfd1ca4dc5241b15dcd3a81eb": "3a356fa3f83dd9de45e2a5a3e940dd9e",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/05/b64adbf1f40053fb2e5621c3b04c91efe26fb3": "0e4db99a51597dcad89a95edf96d7a0c",
".git/objects/06/a1324c20704a2d3daf4958833f9fcdc3ea9668": "14fcb1409ad5b31ca77c3e18266597fb",
".git/objects/07/94c0925daf1975a15f8adb07f638ffba54078b": "6d1e9b85e9a21ea66efee39ccca30483",
".git/objects/19/d9efa3df2d23a56f670a813f81166cb71ac2b7": "3ccc52b9239645a899469a6ccd837958",
".git/objects/1c/1064123080358843620426e7f37a0ff006a2fd": "2a535ae6241724cdc3a83034ef052a2d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/25/b10147825510043f5fcdba3964b98f44d65fbf": "bc2f88c00486779ccd3cde2dac8c969e",
".git/objects/28/3152cdcc55e6709f1a55366890e97a6f0e57fb": "8db50e1016d30efd31de394b42eb67dc",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/51d43da2f18a363136b5d2e8ee766efbc16e5b": "608a154816205d39fd88261bb25880e0",
".git/objects/2d/067ae3cef174f252f7b4dbba9259c541f0de78": "aeeb54244292dbccc1626761ea2e0b5d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/951facb9573203396b57d4d8ff5c3bf0dae259": "98c74ff151bbbb8ef655b66e1c3d62d6",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/55/77b14d38ba68d4f7c6b1d694c7e87c33c455e1": "94ff322bb13d0ba9e8bec4f4ac8d41ab",
".git/objects/63/b1f104d1e7caa129e178443251554502064a37": "58c398aa06a3f59fa0e40a339f05698e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/a22b9c417e31275b75bc1eea33061cae207a3b": "4aae762c92ff2b5a34af13d7e0888e19",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7e/051c67076a223b8611502d96f31fd334f120f6": "ebacf97b706d3243edfe96809fab3fad",
".git/objects/88/4431ab0c258eef0345b1fb72f1b7b123484f11": "c704f48059382807f38e9a4df66822e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/8ca232133625f19159b3bd84f016538ecd484e": "ee9a7617ff46b4356461a712fc93abcc",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9a/0951352577b7cad70e1b403ab73fb808eba3e4": "2275823d83260aa7174214386bb94e9e",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a9/6d0cea3a899b75da3498c17a410010dd12211b": "24e811468eaecaeb3a198763adecb9c0",
".git/objects/aa/3662133efb33a4a4f6b0ab5a1f8ed209a5511f": "a596d5a9a448e5989dfe058ab6221107",
".git/objects/b0/74b724a49ffbea2dd56fd029637eceb8a8a4c4": "415bbf1bfa78e0c26254330c0e824c85",
".git/objects/b4/610acd89cf370fb1676d9c379775e57ec84fb6": "3f060249dfa19bd3cfac7101fb5aff81",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/766369222c0fbcbfc672134389affb1713c98d": "ef81c4bc5fba906f0b95d0b0d5937188",
".git/objects/bf/63cae80f98a8348cb3b33e810bda2a5f616c92": "92249b7823b9c5b32faad2ec94b539c6",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d0/031c4d038deb1c2a26a0aaffa23889c6fe228b": "000c11f4114b58af2b63192bf8e7b6e0",
".git/objects/d1/63f815c1ac5002fc75db83770520b4d1656d36": "46faaf420e8b3be496b0e9225dbd8ffc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/c1722814cbce1090e1bd20f2eb5c7a0317392a": "2348ab436fc288ab4f4cc26e317f468c",
".git/objects/de/e71e226974de57720d2c8f76739b7e409c5931": "e1bce664c882744c25b3679d4333517b",
".git/objects/e0/4c9f4b1dffaeed01b618f25ba5621a38559c9b": "08c612f016b0ed55b62957f8becb6a0a",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e7/40319d2ca73125f6bab4225bb52c138572c789": "bdbb4cdbceec3ed4ebac7fd86a474c28",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/99b4e8c73bd2737119073109da9cec72dc4d95": "852e0f10ffe4c9ed6f75c7f1e4e48b2a",
".git/objects/ed/2b7602c10177363d250f07f3b864123c6af2b5": "211a54cdd41887ac1c3c665a5ea97ed3",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f1/ebe27a7bfb0eb6f5831275dfb65570b12615e5": "461fdc0616da79304c6506aae81a4664",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/fb2fb4aa4ecdf51b81ff1d67491b0a584bf41d": "a4520e81407574d0ef00f263c22cdd4a",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/5ad8de318dba549caa753af029fe25bd1b701f": "3157fd0a0ade34d22b3600deb78d2070",
".git/objects/fa/b0846d28dc43782c7dd7cbef11fa0334762c43": "0785001ffa52b52de0107f27d1df3d28",
".git/objects/fd/8ed0544dca6e9ed998120ffdb9900831d80136": "0e05ec999a25404bf2a64535b56c5e75",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "dee15e1855f9a29f32d4c31de527de71",
".git/refs/remotes/origin/main": "dee15e1855f9a29f32d4c31de527de71",
"assets/AssetManifest.bin": "06153765e40e31c9d8b22e20932ead5f",
"assets/AssetManifest.bin.json": "cb90dd2a2f9d8aaf5f5cb39e003b0e1f",
"assets/AssetManifest.json": "208adc1968228130f2f068748bcd3ef0",
"assets/assets/images/login_background.jpg": "07580966526efab1dc61302dc36f56d2",
"assets/assets/images/logo.png": "a3d02a76af3d3309e3377e6539ab9d65",
"assets/assets/tables/oval_table_with_4_chairs.svg": "f76bd792b0bbfd97aa40c84cc2ddba92",
"assets/assets/tables/oval_table_with_6_chairs.svg": "47f170d7fb6504ac32d4f6e40bc20054",
"assets/assets/tables/oval_table_with_8_chairs.svg": "b930ecd3ece2280971fd83abf636a6c7",
"assets/assets/tables/rectangle_table_with_4_chairs.svg": "6e8e36d21bdd881dacd337a4dcf89f39",
"assets/assets/tables/rectangle_table_with_6_chairs.svg": "b7c5990617113b9d38b252691f958ee2",
"assets/assets/tables/rectangle_table_with_8_chairs.svg": "e6c0eb857eae97b0071804bc01463368",
"assets/assets/tables/round_table_with_2_chairs.svg": "5c5fe22ac59e6d545bbf2d3cb539c41e",
"assets/assets/tables/round_table_with_4_chairs.svg": "6a2a21b8c71d8786d447c17976a70592",
"assets/assets/tables/round_table_with_5_chairs.svg": "992af03e6aa699f580a1eb34b76c9612",
"assets/assets/tables/round_table_with_6_chairs.svg": "f25e4ead3b47c755d6133f3267d01d84",
"assets/assets/tables/round_table_with_8_chairs.svg": "832afd5751fea3166b58a1a368aba4ce",
"assets/assets/tables/square_table_with_2_chairs.svg": "866bf22c20d683838f28cef931700baa",
"assets/assets/tables/square_table_with_4_chairs.svg": "ec2edabb41cc0165e3c51d392847af60",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b01ef2eeee2d56f358cd7cea11b614dd",
"assets/NOTICES": "fc5ed1134b1e267894aeaa18ffc57e4b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "b120c8aef2dd602ed7715e53ec884cb1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "76ba9915f10a1f0e93bc1cb25698c578",
"/": "76ba9915f10a1f0e93bc1cb25698c578",
"main.dart.js": "08fde9cd39af25500f9b60d0990b3ebc",
"manifest.json": "70cb8edb7f8f4ee3afb1299fa76a4103",
"version.json": "ed9731a168c7e7bccdc0f750d4df1b40"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
