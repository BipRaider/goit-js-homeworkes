//и когда они в ходят в на странице в пределы видимсти возвращает target на тот элемент закоторым надо было следить
// первый параметр передаёться callback функция
// вторым пораметром
//https://developer.mozilla.org/ru/docs/Web/API/IntersectionObserver

// observer для картинок
const lazyLoad = target => {
  const imgOptions = {
    rootMargin: '120px',
    threshold: 0.01,
  };
  // const imgOnEntry = (entries) => {
  // 	entries.forEach((elem) => {});
  // };
  const imgObserver = new IntersectionObserver((entries, obserevr) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const rrsrc = img.dataset.img;
        img.setAttribute('src', rrsrc);
        console.log(img);
        obserevr.disconnect();
      }
    });
  }, imgOptions);
  imgObserver.observe(target);
};

const images = document.querySelectorAll('.box-section section img');
images.forEach(image => {
  lazyLoad(image);
});
