import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features171.css'

const Features171 = (props) => {
  return (
    <div className="features171-layout349 thq-section-padding">
      <div className="features171-max-width thq-section-max-width">
        <div className="features171-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features171-content1">
          <div className="features171-section-title">
            <span className="thq-body-small">
              {props.feature1Slogan ?? (
                <Fragment>
                  <span className="features171-text5">Slogan</span>
                </Fragment>
              )}
            </span>
            <div className="features171-content2">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features171-text4">
                      Discover the Key Feature #1
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features171-text6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Suspendisse varius enim
                      in eros elementum tristique. Duis cursus, mi quis viverra
                      ornare, eros dolor interdum nulla.
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

Features171.defaultProps = {
  feature1Title: undefined,
  feature1Slogan: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1576671414201-7da744b3bab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI5MTkyN3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Image',
  feature1Description: undefined,
}

Features171.propTypes = {
  feature1Title: PropTypes.element,
  feature1Slogan: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
}

export default Features171
