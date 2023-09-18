import ModalVideo from 'modal-video'
import 'modal-video/css/modal-video.min.css'
const openModal = idYoutube => {
  const button = document.createElement('button')
  button.dataset.videoId = idYoutube
  new ModalVideo([button])
  button.click()
}
export const modalListener = event => {
  event.preventDefault()
  event.stopPropagation()
  const image = event.target
  const idYoutube = image.parentElement.dataset.videoid

  openModal(idYoutube)
}
