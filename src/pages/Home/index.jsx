import React from "react";
import aip from "../../assets/images/aip.png";
import gap from "../../assets/images/gap.png";
import gpu from "../../assets/images/gpu.webp";
import Slide1 from "../../assets/images/slide1.jpg";
import Slide2 from "../../assets/images/slide2.jpg";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide m-auto"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item slide active">
            <img src={Slide1} className="d-block w-100" alt="slide1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item slide">
            <img src={Slide2} className="d-block w-100" alt="slide2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="row slide m-auto">
        <div className="col-6 col-lg-2 col-md-4 col-xs-6 thumb">
          <img className="img-responsive imageHeight" src={gap} alt="" />
        </div>
        <div className="col-6 col-lg-2 col-md-4 col-xs-6 thumb">
          <img className="img-responsive imageHeight" src={aip} alt="" />
        </div>
        <div className="col-6 col-lg-2 col-md-4 col-xs-6 thumb">
          <img className="img-responsive imageHeight" src={gpu} alt="" />
        </div>
        <div className="col-6 col-lg-2 col-md-4 col-xs-6 thumb">
          <img className="img-responsive imageHeight" src={gap} alt="" />
        </div>
        <div className="col-6 col-lg-2 col-md-4 col-xs-6 thumb">
          <img className="img-responsive imageHeight" src={aip} alt="" />
        </div>
        <div className="col-6 col-lg-2 col-md-4 col-xs-6 thumb">
          <img className="img-responsive imageHeight" src={gpu} alt="" />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4 pb-8 image-card">
        <div className="col">
          <div className="card h-100">
            <img
              src={gpu}
              className="card-img-top shadow p-1 mb-2 bg-body rounded border border-3"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img
              src={aip}
              className="card-img-top shadow p-1 mb-2 bg-body rounded border border-3"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img
              src={gap}
              className="card-img-top shadow p-1 mb-2 bg-body rounded border border-3"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img
              src={gpu}
              className="card-img-top shadow p-1 mb-2 bg-body rounded border border-3"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
