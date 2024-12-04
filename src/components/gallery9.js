import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery9.css'

const Gallery9 = (props) => {
  return (
    <div className="gallery9-gallery3 thq-section-padding">
      <div className="gallery9-max-width thq-section-max-width">
        <div className="gallery9-section-title">
          <h2 className="gallery9-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery9-text4">MedTech App Gallery</span>
              </Fragment>
            )}
          </h2>
          <span className="gallery9-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery9-text3">
                  Explore the MedTech App gallery to see how our innovative
                  features can revolutionize your healthcare experience.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery9-container1">
          <div className="gallery9-content">
            <div
              data-thq="slider"
              data-navigation="true"
              data-pagination="true"
              className="gallery9-slider swiper"
            >
              <div
                data-thq="slider-wrapper"
                className="gallery9-slider-wrapper swiper-wrapper"
              >
                <div
                  data-thq="slider-slide"
                  className="gallery9-slider-slide1 swiper-slide"
                >
                  <div className="gallery9-container2">
                    <img
                      alt={props.image1Alt}
                      src={props.image1Src}
                      className="gallery9-image1 thq-img-ratio-4-3"
                    />
                  </div>
                  <div className="gallery9-container3">
                    <img
                      alt={props.image2Alt}
                      src={props.image2Src}
                      className="gallery9-image2 thq-img-ratio-4-3"
                    />
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery9-slider-slide2 swiper-slide"
                >
                  <div className="gallery9-container4">
                    <img
                      alt={props.image3Alt}
                      src={props.image3Src}
                      className="gallery9-image3 thq-img-ratio-4-3"
                    />
                  </div>
                  <div className="gallery9-container5">
                    <img
                      alt={props.image4Alt}
                      src={props.image4Src}
                      className="gallery9-image4 thq-img-ratio-4-3"
                    />
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery9-slider-slide3 swiper-slide"
                >
                  <div className="gallery9-container6">
                    <img
                      alt={props.image5Alt}
                      src={props.image5Src}
                      className="gallery9-image5 thq-img-ratio-4-3"
                    />
                  </div>
                  <div className="gallery9-container7">
                    <img
                      alt={props.image6Alt}
                      src={props.image6Src}
                      className="gallery9-image6 thq-img-ratio-4-3"
                    />
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="swiper-button-next"
              ></div>
              <div
                data-thq="slider-pagination"
                className="gallery9-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery9.defaultProps = {
  image6Src:
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0NjQxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  image3Alt: 'Interactive communication feature',
  heading1: undefined,
  image4Alt: 'H.264 video compression for storage optimization',
  image5Src:
    'https://images.unsplash.com/photo-1666214278812-83371e46279f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0NjQxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Doctor uploading exercise video',
  image2Src:
    'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0NjQxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0NjQxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'Direct contact with doctors feature',
  image1Src:
    'https://images.unsplash.com/photo-1730818877502-76d1a3d01f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0NjQxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Exercise video assignment by doctors',
  image2Alt: 'Patient watching exercise video',
  image4Src:
    'https://images.unsplash.com/photo-1496326798159-37d93eb24a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0NjQxMnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Gallery9.propTypes = {
  image6Src: PropTypes.string,
  content1: PropTypes.element,
  image3Alt: PropTypes.string,
  heading1: PropTypes.element,
  image4Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Src: PropTypes.string,
}

export default Gallery9
