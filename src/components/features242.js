import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features242.css'

const Features242 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features242-container2 thq-section-max-width">
        <div className="features242-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features242-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features242-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features242-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features242-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features242-tab-horizontal1"
          >
            <div className="features242-divider-container1">
              {activeTab === 0 && (
                <div className="features242-container3"></div>
              )}
            </div>
            <div className="features242-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features242-text4">
                      Upload Exercise Videos
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features242-text5">
                      Empower doctors to upload exercise videos for patients
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features242-tab-horizontal2"
          >
            <div className="features242-divider-container2">
              {activeTab === 1 && (
                <div className="features242-container4"></div>
              )}
            </div>
            <div className="features242-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features242-text6">
                      Assign Video Access
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features242-text3">
                      Assign video access to patients
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features242-tab-horizontal3"
          >
            <div className="features242-divider-container3">
              {activeTab === 2 && (
                <div className="features242-container5"></div>
              )}
            </div>
            <div className="features242-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features242-text2">
                      Interactive Communication
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features242-text1">
                      Facilitate interactive communication between doctors and
                      patients
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

Features242.defaultProps = {
  feature1ImgAlt: 'Doctor uploading exercise video',
  feature3Description: undefined,
  feature3Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1681735342773-d452708e87e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI5MTEwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI5MTEwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  feature1Title: undefined,
  feature3ImgAlt: 'Interactive communication icon',
  feature1Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1663185551550-f8f56529ac5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI5MTEwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Assign video access icon',
  feature2Title: undefined,
}

Features242.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features242
