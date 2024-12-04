import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features26.css'

const Features26 = (props) => {
  return (
    <div className="features26-layout300 thq-section-padding">
      <div className="features26-max-width thq-section-max-width">
        <div className="features26-section-title">
          <span className="features26-text10 thq-body-small">
            {props.slogan1 ?? (
              <Fragment>
                <span className="features26-text17">Slogan</span>
              </Fragment>
            )}
          </span>
          <div className="features26-content1">
            <h2 className="features26-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="features26-text14">Features</span>
                </Fragment>
              )}
            </h2>
            <span className="features26-text12 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="features26-text13">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra
                    ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features26-content2">
          <div className="features26-row thq-flex-row">
            <div className="features26-feature1">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features26-content3">
                <h3 className="features26-feature1-title thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features26-text20">
                        Upload Exercise Videos
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features26-text15">
                        Doctors can easily upload exercise videos for patients
                        to access anytime.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features26-feature2">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features26-content4">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features26-text16">
                        Assign Video Access
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features26-text19">
                        Doctors have the ability to assign specific video access
                        to individual patients.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features26-feature3">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features26-content5">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features26-text18">
                        Interactive Communication
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features26-text21">
                        Facilitate interactive communication between doctors and
                        patients for better healthcare management.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features26.defaultProps = {
  content1: undefined,
  heading1: undefined,
  feature1Description: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1612643557374-13914ebd60c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0NjM3NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1685995829987-58d7eedfded1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0NjM3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  slogan1: undefined,
  feature3Title: undefined,
  feature2Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1576089275776-b6cd5deabdad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0NjM3NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Assign Video Access',
  feature1ImageAlt: 'Upload Exercise Videos',
  feature1Title: undefined,
  feature3ImageAlt: 'Interactive Communication',
  feature3Description: undefined,
}

Features26.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  slogan1: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
}

export default Features26
