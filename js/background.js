const images = [
  'alps.jpg',
  'caucasus_mountains.jpg',
  'london.jpg',
  'scandinavia.jpg',
]

const todaysImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.querySelector('div.body-background-div')
bgImage.style.backgroundImage = `url(./img/${todaysImage})`
