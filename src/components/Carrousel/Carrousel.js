import React from 'react'

const Carrousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={10000}>
          <img src="https://superfanzone.com/modules/angarslider/views/img/images/9fc620a1c682b512393ff6f5ec748bc7fa570b65_WhatsApp%20Image%202023-10-08%20at%204.44.54%20PM.jpeg" className="d-block w-100" alt="funko-halloween" />
        </div>
        <div className="carousel-item" data-bs-interval={2000}>
          <img src="https://superfanzone.com/modules/angarslider/views/img/images/74bece03eed7617ed79fcf30a964212c8de121d9_Banner%20Novedades%20(11).jpg" className="d-block w-100" alt="novedades" />
        </div>
        <div className="carousel-item">
          <img src="https://superfanzone.com/modules/angarslider/views/img/images/9798342e0f24e36d5bbe03c94c8562a360db388a_one%20piece%20banner.jpg" className="d-block w-100" alt="funkos" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carrousel