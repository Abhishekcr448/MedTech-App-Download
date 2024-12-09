import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features18.css'

const Features18 = (props) => {
  return (
    <div
      className={`features18-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features18-max-width thq-section-max-width">
        <div className="features18-content1">
          <div className="features18-section-title">
            <div className="features18-content2">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features18-text16">
                      Upload Exercise Videos
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features18-text17">
                      Doctors can easily upload exercise videos for patients to
                      access and follow along, enhancing the overall patient
                      experience.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="features18-content3">
              <h2 className="thq-heading-2">
                {props.feature1Title2 ?? (
                  <Fragment>
                    <span className="features18-text20">
                      Assign Video Access
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description2 ?? (
                  <Fragment>
                    <span className="features18-text21">
                      Doctors have the ability to assign specific users to
                      access the uploaded exercise videos.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="features18-content4">
              <h2 className="thq-heading-2">
                {props.feature1Title1 ?? (
                  <Fragment>
                    <span className="features18-text18">
                      Interactive Communication
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description1 ?? (
                  <Fragment>
                    <span className="features18-text19">
                      Facilitate interactive communication between doctors and
                      patients through the app.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="features18-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features18-placeholder-image thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Features18.defaultProps = {
  feature1ImageSrc: `${process.env.PUBLIC_URL}/screenshot%202024-11-30%20091255-1400w.png`,
  feature1ImageAlt: 'Doctor uploading exercise videos',
  feature1Title: undefined,
  feature1Description: undefined,
  rootClassName: '',
  feature1Title1: undefined,
  feature1Description1: undefined,
  feature1Title2: undefined,
  feature1Description2: undefined,
}

Features18.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1Title1: PropTypes.element,
  feature1Description1: PropTypes.element,
  feature1Title2: PropTypes.element,
  feature1Description2: PropTypes.element,
}

export default Features18
