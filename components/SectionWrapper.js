import SectionHeader from './SectionHeader'

export default function SectionWrapper({ title, subtitle, pin, children }) {
  return (
    <section className='bg-light page-section' id={pin}>
      <div className='container'>
        <SectionHeader title={title} subtitle={subtitle} />
        {children}
      </div>
    </section>
  )
}
