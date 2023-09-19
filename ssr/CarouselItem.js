import h from 'hyperscript'

const relativeDate = dateStr => {
  const date = new Date(dateStr)
  const now = new Date()
  const diff = now - date

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  if (years > 0) {
    return `${years} año${years > 1 ? 's' : ''}`
  } else if (months > 0) {
    return `${months} mes${months > 1 ? 'es' : ''}`
  } else if (days > 0) {
    return `${days} día${days > 1 ? 's' : ''}`
  } else if (hours > 0) {
    return `${hours} hora${hours > 1 ? 's' : ''}`
  } else if (minutes > 0) {
    return `${minutes} minuto${minutes > 1 ? 's' : ''}`
  } else {
    return `${seconds} segundo${seconds > 1 ? 's' : ''}`
  }
}

const Controls = ({ slug, youtubeVideoId }) =>
  h(
    'div',
    h(
      'a',
      {
        href: `https://www.youtube.com/watch?v=${youtubeVideoId}`,
        title: 'Watch trailer',
        target: '_blank',
        rel: 'noreferrer',
        'data-videoId': youtubeVideoId,
      },
      h('img', {
        src: 'public/assets/play-icon.png',
        alt: 'Play',
        className: 'carousel-item__play',
      })
    ),
    h(
      'a',
      {
        href: `https://kitsu.io/explore/anime/${slug}`,
        title: 'See more',
        target: '_blank',
        rel: 'noreferrer',
      },
      h('img', {
        src: 'public/assets/plus-icon.png',
        alt: 'More info',
      })
    )
  )

const CarouselItem = ({
  imageUrl,
  title,
  subtitle,
  slug,
  youtubeVideoId,
  startDate,
}) =>
  h(
    'div.carousel-item',
    h('img', {
      src: imageUrl,
      alt: '',
      loading: 'lazy',
      width: '100px',
      height: '100px',
    }),
    h(
      'div',
      Controls({ slug, youtubeVideoId }),
      h('p', { class: 'carousel-item__title' }, title),
      h('p', { class: 'carousel-item__subtitle' }, subtitle),
      h(
        'p',
        {
          class: 'carousel-item__date',
        },
        `Released: ${relativeDate(startDate)}`
      )
    )
  )

export default CarouselItem
