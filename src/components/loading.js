function Loading() {
  return (
    <div
      className='container d-flex align-items-center'
      style={{ height: '100vh' }}
    >
      <p className='loading-content break-word'>
        <div className='hero-inner'>
          <div className='hero-content'>
            <div className='hero-content-inner' ref={(el) => (content = el)}>
              <div className='hero-content-line'>
                <div className='hero-content-line-inner'>
                  Relieving the burden
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className='color__violet'>const </span>
        <span className='color__yellow'>dThird </span>
        <span className='color__blue'>&#61; </span>
        <span className='color__green'>'Alejandro Miguel III'</span>
        <br></br>
        <span className='color__violet'>const </span>
        <span className='color__blue'>develop </span>
        <span className='color__blue'>&#61; </span>
        <span className='color__yellow'>&#40; </span>
        <span className='color__red'>frontEnd</span>,
        <span className='color__red'> UI </span>
        <span className='color__yellow'>&#41; </span>
        <span className='color__violet'>&#61;&#62; </span>
        <span className='color__yellow'>&#123; </span>
        <br></br>
        <span className='color__grey p-3'>//loading...</span>
        <br></br>
        <span className='color__yellow'>&#125; </span>
      </p>
    </div>
  )
}
export default Loading
