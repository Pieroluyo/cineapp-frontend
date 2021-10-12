import React from "react";
export const SliderPortada = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/slider1.jpg" className="" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5><span>Rock Dog 2</span> Renace <br /> una estrella</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p> 
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.cineplanet.com.pe/contentAsset/raw-data/5a4d11fb-04db-4f7b-bf5d-f8efd769d8ed" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.cineplanet.com.pe/contentAsset/raw-data/5a4d11fb-04db-4f7b-bf5d-f8efd769d8ed" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="estreno">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-1">
              <h3 className="titulo titulo--mediano">Próximos Estrenos</h3>
            </div>
            <div className="col-lg-5  d-flex align-items-center justify-content-end">
              <span><a href=".">ver más <img src="/assets/view.png" alt="" /></a></span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
