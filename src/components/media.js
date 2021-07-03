import { Link } from 'react-scroll'
function Media() {
  return (
    <>
      <footer className='container container-media'>
        <div className='d-flex justify-content-start gap-5 flex-wrap contact-container'>
          <span className='behance'>
            <span className='tag'>&#47;&#42;</span>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.behance.net/alejandromiguel'
            >
              {' '}
              bēhance
            </a>
          </span>
          <span className='linked'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/alejandro-miguel-iii-6801a2215/'
            >
              linkedin{' '}
            </a>
            <span className='tag'>&#42;&#47;</span>
          </span>
          <span style={{ cursor: 'pointer' }}>
            <Link to='home' spy={true}>
              <span className='color__blue'>gotoTop</span>
              <span className='color__yellow'>()</span>
            </Link>
          </span>
          <br></br>
        </div>
      </footer>
    </>
  )
}
export default Media
