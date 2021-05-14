export function meetupTitleFactory(index) {
  let infix
  if (index === 1) infix = 'st'
  else if (index === 2) infix = 'nd'
  else if (index === 3) infix = 'rd'
  else infix = 'th'

  return `${index}${infix} Meetup`
}
