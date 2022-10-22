const images = [
  'alps.jpg',
  'caucasus_mountains.jpg',
  'london.jpg',
  'santorini.jpg',
  'scandinavia.jpg',
  'venice.jpg',
]

const todaysImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement('img')
bgImage.src = `./img/${todaysImage}`

document.body.appendChild(bgImage)
