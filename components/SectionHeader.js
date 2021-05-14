export default function SectionHeader({ title = 'Title Not Found', subtitle = 'SubTitle Not Found' }) {
  return (
    <div className='row'>
      <div className='col-lg-12 text-center'>
        <h2 className='section-heading text-uppercase'>{title}</h2>
        <h3 className='section-subheading text-muted'>{subtitle}</h3>
      </div>
    </div>
  )
}