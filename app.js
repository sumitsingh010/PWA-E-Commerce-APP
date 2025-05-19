if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(reg => {
    console.log('Service Worker registered:', reg);
  });
}

document.getElementById('subscribe').addEventListener('click', async () => {
  if ('Notification' in window && 'serviceWorker' in navigator) {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      navigator.serviceWorker.ready.then(reg => {
        reg.showNotification('Thanks for subscribing to ShopEasy!');
      });
    }
  }
});