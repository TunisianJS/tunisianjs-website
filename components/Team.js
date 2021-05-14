import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import founders from '../data/founders.json'
import staff from '../data/staffs.json'
import SectionHeader from './SectionHeader'
import SectionWrapper from './SectionWrapper'


function Organizers({ data = [], iconSize = '1x' }) {
  return (
    <div className='row justify-content-center'>
      {
        data.map((profile, key) => (
          <div className='col-sm-3' key={key}>
            <div className='team-member'>
              <img
                className='mx-auto rounded-circle'
                src={profile.avatar}
                alt=''
              />
              <h4>{profile.name}</h4>
              <p className='text-muted'>Co-organizer</p>
              <ul className='list-inline social-buttons'>
                {
                  profile.twitter.length > 0 && (
                    <li className='list-inline-item'>
                      <a
                        href={profile.twitter}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FontAwesomeIcon icon={faTwitter} size={iconSize} />
                      </a>
                    </li>
                  )
                }
                {
                  profile.linkedin.length > 0 && (
                    <li className='list-inline-item'>
                      <a
                        href={profile.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
                      </a>
                    </li>
                  )
                }
                {
                  profile.github.length > 0 && (
                    <li className='list-inline-item'>
                      <a
                        href={profile.github}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FontAwesomeIcon icon={faGithub} size={iconSize} />
                      </a>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>))
      }
    </div>
  )
}

export default function Teams() {
  return (
    <SectionWrapper
      pin='team'
      title='Our Amazing Team'
      subtitle='The organizers who put these events together.'
    >
      <Organizers data={founders} />
      <SectionHeader title='Our Stuff' subtitle='The Stuff who put these events together.' />
      <Organizers data={staff} />
      <div className='row'>
        <div className='col-lg-8 mx-auto text-center'>
          <p className='large text-muted'>
            Need help? In case of any question or suggestion, please contact
            one of the organizers or staff in the event, or reach us by e-mail
              at <br />
            <a href='mailto:contact@js-community.tn'>
              contact@js-community.tn
              </a>
              .
            </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
