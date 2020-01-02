// Helpers
const toAssetString = asset => asset.url || asset

// Configuration
const staticCachePath = 'static-v1'
// const dynamicCachePath = 'dynamic-v1  '

const appStartAssets = self.__precacheManifest
const preDefinedAssets = ['/']
const listOfAssets = [...appStartAssets, ...preDefinedAssets]

const contentToCache = listOfAssets.map(toAssetString)

// const dynamicBlackList = ['/\.jpg$/igm']

// const cacheAssetOnTheFly = event => fetchedResponse => {
//   return caches.open(dynamicCachePath).then(cache => {
//     console.log(fetchedResponse.url)
//     cache.put(event.request.url, fetchedResponse.clone())
//     return fetchedResponse
//   })
// }

const clearPreviousCache = () => {
  caches.keys().then(keys => {
    return Promise.all(
      keys
        .filter(key => key !== staticCachePath && key !== dynamicCachePath)
        .map(keyToBeDeleted => caches.delete(keyToBeDeleted))
    )
  })
}

const cacheAssets = () => {
  return caches
    .open(staticCachePath)
    .then(cache => cache.addAll(contentToCache))
    .catch(error => console.log('-- Caching Assets Error --', error))
}

// Install Process
self.addEventListener('install', event => {
  event.waitUntil(cacheAssets())
})

// Activation Process
self.addEventListener('activate', event => {
  event.waitUntil(clearPreviousCache())
})

// Fetch Process
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  )
})
