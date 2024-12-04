import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text3">
                        Get Started with MedTech Today!
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="cta26-text5">
                        Join MedTech now to revolutionize your healthcare
                        experience.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="thq-button-filled cta26-button"
                >
                  <a
                    href="https://drive.google.com/file/d/1NnxpRAQ1PZg8dE6kfNaALfxXJh30_ugL/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="cta26-link"
                  >
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta26-text4">
                          Download MedTech App APK
                        </span>
                      </Fragment>
                    )}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  heading1: undefined,
  action1: undefined,
  rootClassName: '',
  content1: undefined,
}

CTA26.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  rootClassName: PropTypes.string,
  content1: PropTypes.element,
}

export default CTA26
