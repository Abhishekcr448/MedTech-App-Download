import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features13.css'

const Features13 = (props) => {
  return (
    <div className="features13-layout226 thq-section-padding">
      <div className="features13-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-4-3"
          />
          <div className="thq-flex-column">
            <span className="features13-over-title1 thq-body-small">
              {props.feature1Slogan ?? (
                <Fragment>
                  <span className="features13-text10">
                    Empower doctors to share exercise routines
                  </span>
                </Fragment>
              )}
            </span>
            <div className="thq-flex-column features13-content1">
              <h3 className="features13-title1 thq-heading-3">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features13-text17">
                      Upload Exercise Videos
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="features13-description1 thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features13-text18">
                      Doctors can easily upload exercise videos to the platform,
                      providing patients with visual guidance on their routines.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="thq-flex-row features13-actions1">
              <button className="thq-button-filled features13-button1">
                <span className="features13-action11 thq-body-small">
                  {props.feature1MainAction ?? (
                    <Fragment>
                      <span className="features13-text15">
                        Start uploading videos
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline features13-button2">
                <span className="features13-action21 thq-body-small">
                  {props.feature1SecondaryAction ?? (
                    <Fragment>
                      <span className="features13-text13">
                        Learn more about video upload feature
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="thq-flex-column">
          <img
            alt={props.feature2ImageAlt}
            src={props.feature2ImageSrc}
            className="thq-img-ratio-4-3"
          />
          <div className="thq-flex-column">
            <span className="features13-over-title2 thq-body-small">
              {props.feature2Slogan ?? (
                <Fragment>
                  <span className="features13-text12">
                    Connect with your doctor in real-time
                  </span>
                </Fragment>
              )}
            </span>
            <div className="thq-flex-column">
              <h3 className="features13-title2 thq-heading-3">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features13-text19">
                      Interactive Communication
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="features13-description2 thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features13-text11">
                      Patients can directly communicate with their doctors, ask
                      questions, and receive feedback on their progress. They
                      can also access assigned exercise videos for guidance.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="thq-flex-row features13-actions2">
              <button className="thq-button-filled features13-button3">
                <span className="features13-action12 thq-body-small">
                  {props.feature2MainAction ?? (
                    <Fragment>
                      <span className="features13-text16">
                        Contact your doctor now
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline features13-button4">
                <span className="features13-action22 thq-body-small">
                  {props.feature2Action2 ?? (
                    <Fragment>
                      <span className="features13-text14">
                        View exercise videos
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features13.defaultProps = {
  feature1Slogan: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1588702548120-3b954e8b077f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0NjQzM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  feature2Slogan: undefined,
  feature1SecondaryAction: undefined,
  feature2Action2: undefined,
  feature1MainAction: undefined,
  feature2MainAction: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1586678858438-231d571a7e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0NjQzM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Patient messaging doctor',
  feature1Title: undefined,
  feature1Description: undefined,
  feature1ImageAlt: 'Doctor uploading exercise video',
  feature2Title: undefined,
}

Features13.propTypes = {
  feature1Slogan: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2Slogan: PropTypes.element,
  feature1SecondaryAction: PropTypes.element,
  feature2Action2: PropTypes.element,
  feature1MainAction: PropTypes.element,
  feature2MainAction: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features13
