import sponsors from '../data/sponsors.json'
import SectionWrapper from './SectionWrapper'

export default function Sponsors() {
  return (
    <SectionWrapper
      pin='sponsors'
      title='Become A Sponsor'
      subtitle='Would you like to support a growing JS community in Tunisia and improve the visibility of your tech/employer brand?'
    >
      <div className='row mb-5 justify-content-center'>
        {
          sponsors.map((sponsor, key) => (
            <div className='col-md-2 mx-2' key={key}>
              <a href={sponsor.url} target='_blank' rel='noopener noreferrer'>
                <img src={sponsor.image} className='img-fluid' alt={sponsor.name} />
              </a>
            </div>
          ))
        }
        <div align='center' style={{ paddingTop: '1rem' }}>
          <a href='mailto:contact@js-community.tn' className='btn btn-primary'> Become A Sponsor </a>
        </div>
      </div>
    </SectionWrapper >
  )
}
