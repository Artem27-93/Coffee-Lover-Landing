import React, { useState } from "react";
import Slider from "react-slick";
import { Image } from "../Image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css'

export const Gallery = ({ data = [] }) => {
  const [modalImage, setModalImage] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    swipe: false,
    arrows: false
  };

  const openModal = (imgUrl) => setModalImage(imgUrl);
  const closeModal = () => setModalImage(null);

  return (
      <div id="portfolio" className="text-center">
        <div className="container" style={{ width: "90%",height:"700px" }}>
          <div className="section-title">
            <h2>Колекція смаків</h2>
            <p>
              Тут зібрані різні смаки кави "спешлті" — лише відбірна арабіка для
              поціновувачів
            </p>
          </div>

          <Slider {...settings}>
            {data.map((d, i) => (
                <div key={i} className="p-3" style={{ cursor: "pointer"}}>
                  <Image
                      title={d.title}
                      smallImage={d.smallImage}
                      onClick={() => openModal(d.largeImage)}
                  />
                </div>
            ))}
          </Slider>
        </div>

        {/* Модалка */}
        {modalImage && (
            <div className="modal-overlay" onClick={closeModal}>
              <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                  role="dialog"
                  aria-modal="true"
              >
                <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                  &times;
                </button>
                <img src={modalImage} alt="Збільшене зображення" />
              </div>
            </div>
        )}
      </div>
  );
};
