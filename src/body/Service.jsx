import '../App.css'

const Service = () => {
  return (
    <div className="service-container">
        <div className='service-content'>
            <h2>What i offer</h2>
            <h1>My services</h1>
            <p>I am a frontend developer from Pune Maharashtra.</p>
        </div>
        <div className="service-cards"> 

            <div className="card">
                <i className="fa-solid fa-globe"></i>
                <h1>Web design</h1>
                <p>Web development is the process of building,programming...</p>
                <a href="">Read more ➡️</a>
            </div>
            <div className="card">
                <i className="fa-brands fa-android"></i>
                <h1>Mobile app</h1>
                <p>Web development is the process of building,programming...</p>
                <a href="">Read more ➡️</a>
            </div>
            <div className="card">
                <i className="fa-solid fa-mobile"></i>
                <h1>Front-end design</h1>
                <p>Web development is the process of building,programming...</p>
                <a href="">Read more ➡️</a>
            </div>

        </div>


      
    </div>
  )
}

export default Service
