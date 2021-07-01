function Contact() {
  return (
    <>
      <section className='container'>
        <h1>
          <span className='color__orange'>.contact</span>
          <span className='color__yellow'> &#123;</span>
        </h1>
      </section>

      <div className='menu'>
        <div class='menu__item'>
          <div class='marquee'>
            <div class='marquee__inner' aria-hidden='true'>
              <span>LET'S TALK</span>
              <span>LET'S TALK</span>
              <span>LET'S TALK</span>
              <span>LET'S TALK</span>
            </div>
          </div>
        </div>
      </div>
      <section className='container'>
        <div className='row'>
          <div className='col-md-9 offset-md-1'>
            <br></br>
            <h1 className='d-flex flex-column'>
              <span>
                I'm always interested <br />
                about cool stuff.
              </span>
              <span>Are you minding a project?</span>
            </h1>
            <br></br>
          </div>
        </div>
        <h1 className='color__yellow col-md-1 offset-md-0'> &#125;</h1>
      </section>
    </>
  )
}
export default Contact
