import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features181.css'

const Features181 = (props) => {
  return (
    <div
      className={`features181-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features181-max-width thq-section-max-width">
        <div className="features181-content1">
          <div className="features181-section-title">
            <div className="features181-content2">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features181-text16">
                      Doctors can add exercise videos
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features181-text17">
                      Doctors have the ability to upload their own exercise
                      videos to the app.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="features181-content3">
              <h2 className="thq-heading-2">
                {props.feature1Title2 ?? (
                  <Fragment>
                    <span className="features181-text20">
                      Doctors are the Admin
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description2 ?? (
                  <Fragment>
                    <span className="features181-text21">
                      Doctors can manage the file structure of the app by
                      advertising or adding/removing any videos or set of
                      videos.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="features181-content4">
              <h2 className="thq-heading-2">
                {props.feature1Title1 ?? (
                  <Fragment>
                    <span className="features181-text18">
                      Compressed H.264 videos
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description1 ?? (
                  <Fragment>
                    <span className="features181-text19">
                      All videos are compressed into H.264 format to reduce size
                      consumption on doctor&apos;s devices.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="features181-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features181-placeholder-image thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Features181.defaultProps = {
  feature1ImageSrc: '/screenshot%202024-11-30%20091321-1400w.png',
  feature1ImageAlt: 'Image',
  feature1Title: undefined,
  feature1Description: undefined,
  feature1Title1: undefined,
  feature1Description1: undefined,
  feature1Title2: undefined,
  feature1Description2: undefined,
  rootClassName: '',
}

Features181.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1Title1: PropTypes.element,
  feature1Description1: PropTypes.element,
  feature1Title2: PropTypes.element,
  feature1Description2: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Features181
