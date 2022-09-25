import React from 'react'
import { faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faSlack, faTwitter, faYoutube, faMeetup } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getCurrentYear } from '../utils/date.util'

const platforms = [
  {
    url: 'https://www.facebook.com/TunisianJS',
    icon: faFacebook
  },
  {
    url: 'https://twitter.com/TunisianJS',
    icon: faTwitter
  },
  {
    url: 'https://js-communitytn.slack.com',
    icon: faSlack
  },
  {
    url: 'https://github.com/TunisianJS',
    icon: faGithub
  },
  {
    url: 'https://www.youtube.com/channel/UCeWHKEOX998dAebsYhI6gKw',
    icon: faYoutube
  },
  {
    url: 'https://www.meetup.com/tunisian-js-community/',
    icon: faMeetup
  }
];

export default function Footer() {
  return (
    <footer className='bg-light  footer'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-4'>
            <ul className='list-inline quicklinks'>
              <li className='list-inline-item'>
                From the community for the community with <FontAwesomeIcon icon={faHeart} />
              </li>
            </ul>
          </div>
          <div className='col-md-4'>
            <ul className='list-inline social-buttons'>
              {
                platforms.map(({ url, icon }) => (
                  <li className='list-inline-item'>
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='col-md-4'>
            <span className='copyright'>Copyright &copy; JS-Community.tn 2019-{getCurrentYear()}</span>
          </div>
        </div>
        <a className='js-top'>
          <FontAwesomeIcon icon={faArrowUp} /> JS
        </a>
      </div>
    </footer>
  )
}
