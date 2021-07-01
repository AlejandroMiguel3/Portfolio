function Works() {
  return (
    <section className='container container-works'>
      <h1>
        <span className='color__orange'>.works</span>
        <span className='color__yellow'> &#123;</span>
      </h1>
      <div className='works-container'>
        <div className='row'>
          <div className='col order-left'>
            <div className='col-md-0 offset-md-2'>
              <h1>
                <span>klase: </span>
              </h1>
            </div>
            <div className='col-md-0 offset-md-2'>
              <br></br>
              <p>
                <span className='color__grey'>
                  &#47;&#42; e-learning web application &#42;&#47;
                </span>
              </p>
            </div>
          </div>
          <div className='project-container col-md-7 offset-md-0'>
            <div className='klase-tumbnail tumbnail-size tumbnail-top'>
              &nbsp;
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='project-container col-md-7 offset-md-0'>
            <div className='encryptee-tumbnail tumbnail-size'>&nbsp;</div>
          </div>
          <div className='col'>
            <div className='col-md-0 offset-md-2'>
              <br></br>
              <h1>
                <span>encryptee: </span>
              </h1>
            </div>
            <div className='col-md-0 offset-md-2'>
              <p>
                <span className='color__grey'>
                  &#47;&#42; e-commerse web application &#42;&#47;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col order-left tumbnail-bottom'>
            <div className='col-md-0 offset-md-2'>
              <h1>
                <span>anydo: </span>
              </h1>
            </div>
            <div className='col-md-0 offset-md-4'>
              <br></br>
              <p>
                <span className='color__grey'>
                  &#47;&#42;simple task management &#42;&#47;{' '}
                </span>
              </p>
            </div>
          </div>
          <div className='project-container col-md-7 offset-md-0'>
            <div className='anydo-tumbnail tumbnail-size'>&nbsp;</div>
          </div>
        </div>
      </div>
      <br />
      <h1 className='color__yellow col-md-1 offset-md-0'> &#125;</h1>
    </section>
  )
}
export default Works
