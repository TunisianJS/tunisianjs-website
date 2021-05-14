import SectionWrapper from './SectionWrapper'
import { meetupTitleFactory } from '../utils/meetup-factory.util'
import events from '../data/events.json'

function Event({
  date = 'Date Not Found',
  time = 'Time Not Found',
  url = '',
  title = 'Title Not Found',
  palce = 'Place Not Found',
  city = 'City Not Found'
}) {
  return (
    <>
      <div className='timeline-image'>
        <h4 className='end'>{date}</h4>
      </div>
      <div className='timeline-panel'>
        <div className='timeline-heading'>
          <h4>
            <a href={url} target='_blank'> {time} </a>
          </h4>
          <h4 className='subheading'>
            <a href={url} target='_blank'> {title} </a>
          </h4>
        </div>
        <div className='timeline-body'>
          <p className='text-muted'>@{palce}<br /><small>{city}</small></p>
        </div>
      </div>
    </>
  )
}

export default function Events() {
  return (
    <SectionWrapper pin='events' title='Events' subtitle=''>
      <div className='row'>
        <div className='col-lg-12'>
          <ul className='timeline'>
            {
              events.map((event, index) => (
                <li>
                  <Event
                    date={event.date}
                    time={event.time}
                    url={event.url}
                    title={meetupTitleFactory(index + 1)}
                    palce={event.palce}
                    city={event.city}
                  />
                </li>
              ))
            }
            <li className='timeline-inverted'>
              <div className='timeline-image'>
                <h4>Next Event</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
