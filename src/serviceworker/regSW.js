import { mainversion } from "../data/releasedata.json";

if ("serviceWorker" in navigator) {
  const lastVersion = localStorage.getItem("version");

  if (lastVersion !== mainversion) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      Promise.allSettled(
        registrations.map((registration) => registration.unregister())
      ).then(() => {
        localStorage.setItem("version", mainversion);
        location.reload();
      });
    });
  } else {
    registerSw();
  }
}

function registerSw() {
  navigator.serviceWorker.register("/sw.js", {
    scope: '/~uv/'
  });
}