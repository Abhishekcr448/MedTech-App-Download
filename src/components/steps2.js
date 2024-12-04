import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div
      className={`steps2-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">Discover the Power of Our App</h2>
            <p className="thq-body-large">
              Make sure as a Doctor you have the complete access to your
              patients!
            </p>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text27">
                      Doctors Add Exercise Videos
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text13 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text31">
                      Doctors can easily upload their exercise videos to share
                      with their patients.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text14 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text29">
                      Allocate Users to Access Videos
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text16 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text30">
                      Doctors have the ability to assign specific users to
                      access a set of exercise videos.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text17 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text26">
                      Compressed Video Format
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text19 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text25">
                      All videos are compressed into H.264 format to optimize
                      storage space on users&apos; devices.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text20 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text28">
                      Interactive Communication
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text22 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text24">
                      Users can watch exercise videos and directly contact their
                      doctors for queries or subscription renewals.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text23 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  rootClassName: '',
  step4Description: undefined,
  step3Description: undefined,
  step3Title: undefined,
  step1Title: undefined,
  step4Title: undefined,
  step2Title: undefined,
  step2Description: undefined,
  step1Description: undefined,
}

Steps2.propTypes = {
  rootClassName: PropTypes.string,
  step4Description: PropTypes.element,
  step3Description: PropTypes.element,
  step3Title: PropTypes.element,
  step1Title: PropTypes.element,
  step4Title: PropTypes.element,
  step2Title: PropTypes.element,
  step2Description: PropTypes.element,
  step1Description: PropTypes.element,
}

export default Steps2
