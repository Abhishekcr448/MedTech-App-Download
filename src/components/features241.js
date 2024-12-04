import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features241.css'

const Features241 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features241-container2 thq-section-max-width">
        <div className="features241-image-container">
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features241-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features241-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features241-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features241-tab-horizontal1"
          >
            <div className="features241-divider-container1">
              {activeTab === 0 && (
                <div className="features241-container3"></div>
              )}
            </div>
            <div className="features241-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features241-text4">
                      Upload Exercise Videos
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features241-text3">
                      Doctors can easily upload exercise videos to the platform
                      for patients to access.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features241-tab-horizontal2"
          >
            <div className="features241-divider-container2">
              {activeTab === 1 && (
                <div className="features241-container4"></div>
              )}
            </div>
            <div className="features241-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features241-text5">
                      Assign Video Access
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features241-text1">
                      Doctors have the ability to assign specific users to
                      access the uploaded exercise videos.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features241-tab-horizontal3"
          >
            <div className="features241-divider-container3">
              {activeTab === 2 && (
                <div className="features241-container5"></div>
              )}
            </div>
            <div className="features241-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features241-text6">
                      Interactive Communication
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features241-text2">
                      Facilitate interactive communication between doctors and
                      patients through the app.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features241.defaultProps = {
  feature2Description: undefined,
  feature3Description: undefined,
  feature3ImgAlt: 'Interactive Communication Image Alt Text',
  feature1Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1522845015757-50bce044e5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0NTYzNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0NTYzNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
  feature2Title: undefined,
  feature2ImgAlt: 'Assign Video Access Image Alt Text',
  feature3Title: undefined,
}

Features241.propTypes = {
  feature2Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature3Title: PropTypes.element,
}

export default Features241
