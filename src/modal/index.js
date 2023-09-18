export const modalListener = event => {
  event.preventDefault()
  event.stopPropagation()
  const image = event.target
  const idYoutube = image.parentElement.dataset.videoid
  console.log(idYoutube)
}
