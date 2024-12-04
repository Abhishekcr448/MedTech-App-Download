import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import Features241 from './features241'
import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div
      className={`features24-container thq-section-padding ${props.rootClassName} `}
    >
      <Features241
        feature1Title={
          <Fragment>
            <span className="features24-text1">Watch exercise videos</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="features24-text2">Assign Video Access</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="features24-text3">Interactive Communication</span>
          </Fragment>
        }
        feature1ImgSrc="/screenshot%202024-11-30%20091255-200h.png"
        feature1Description={
          <Fragment>
            <span className="features24-text4">
              Doctors can easily upload exercise videos to the platform for
              patients to access.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="features24-text5">
              Doctors have the ability to assign specific users to access the
              uploaded exercise videos.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="features24-text6">
              Facilitate interactive communication between doctors and patients
              through the app.
            </span>
          </Fragment>
        }
      ></Features241>
    </div>
  )
}

Features24.defaultProps = {
  rootClassName: '',
}

Features24.propTypes = {
  rootClassName: PropTypes.string,
}

export default Features24
