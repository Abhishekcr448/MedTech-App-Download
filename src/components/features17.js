import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features17.css'

const Features17 = (props) => {
  return (
    <div
      className={`features17-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features17-max-width thq-section-max-width">
        <div className="features17-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features17-placeholder-image thq-img-ratio-16-9"
          />
        </div>
        <div className="features17-content1">
          <div className="features17-section-title">
            <div className="features17-content2">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features17-text16">
                      User control by Doctors
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features17-text17">
                      <span>
                        Doctors can have control over all the users.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="features17-content3">
              <h2 className="thq-heading-2">
                {props.feature1Title2 ?? (
                  <Fragment>
                    <span className="features17-text26">
                      Allocate/Deallocate courses
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description2 ?? (
                  <Fragment>
                    <span className="features17-text27">
                      <span>
                        They can any time allocate/deallocate any video file or
                        folder to a user.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="features17-content4">
              <h2 className="thq-heading-2">
                {props.feature1Title1 ?? (
                  <Fragment>
                    <span className="features17-text20">
                      All transactions control
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description1 ?? (
                  <Fragment>
                    <span className="features17-text21">
                      <span>
                        They can get access to all the current allocated courses
                        of a user.
                      </span>
                      <br></br>
                      <span>
                        All the past transaction history can also be retrieved. 
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features17.defaultProps = {
  feature1ImageAlt: 'Image',
  feature1Title: undefined,
  rootClassName: '',
  feature1ImageSrc: '/screenshot%202024-11-30%20091239-1400w.png',
  feature1Description: undefined,
  feature1Title1: undefined,
  feature1Description1: undefined,
  feature1Title2: undefined,
  feature1Description2: undefined,
}

Features17.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1Title1: PropTypes.element,
  feature1Description1: PropTypes.element,
  feature1Title2: PropTypes.element,
  feature1Description2: PropTypes.element,
}

export default Features17
