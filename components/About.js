import SectionWrapper from "./SectionWrapper"
import { description } from "../data/about"

export default function About() {
  return (
    <SectionWrapper pin='about' title='ABOUT' subtitle=''>
      <div className='row'>
        <div className='mx-auto col-md-9'>
          {
            description.map((desc, index) => (<p key={index} className='text-muted'>{desc}</p>))
          }
        </div>
      </div>
    </SectionWrapper>
  )
}
