// 서비스 워커 설치
self.addEventListener('install', (event) => {
  console.log('Service Worker Install')
  event.waitUntil(
    caches.open('sws').then((cache) => {
      // 캐싱할 static 웹 자원(js, img, css 등)
      return cache.addAll([
        '/',
        '/static/css',
        '/static/js'
      ])
    }).then(() => {
      console.log('success')
    }).catch((error) => {
      console.log('error', error)
    })
    // 모든 파일이 성공적으로 캐시되면 서비스 워커가 설치됩니다.
    // 어느 파일 하나라도 다운로드하지 못하면 설치 단계가 실패합니다.
  )
})

self.addEventListener('fetch', (event) => {
  // 서비스 워커를 설치하고 사용자가 다른 페이지로 이동하거나 새로 고친 후에
  // 서비스 워커가 fetch 이벤트를 수신하기 시작합니다.
  console.log('Service Worker Fetch')
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request)
        // 해당 request 에 상응하는 캐쉬가 있으면 리턴해주고 없으면 fetch 로 자원을 얻습니다.
      })
      .catch((error) => {
        return console.log(error)
      })
  )
})

self.addEventListener('activate', (event) => {
  // activate 콜백 단계에서 캐시 관리를 하는 이유는 설치 단계에서
  // 이전 캐시들을 모두 완전 삭제하면 모든 현재 페이지를 제어하는
  // 이전 서비스 워커가 갑자기 해당 캐시에서 파일을 제공하지 못하게 되기 때문입니다.
  var newCacheList = ['rc-with-lineworks']

  event.waitUntil(
    caches.keys().then((cacheList) => {
      return Promise.all(
        cacheList.map((cacheName) => {
          if (newCacheList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
          // 서비스 워커의 모든 캐시를 반복 탐색하고
          // 캐시 newCacheList 에 정의되지 않은 캐시를 삭제합니다.
        })
      )
    }).catch((error) => {
      return console.log(error)
    })
  )
})
