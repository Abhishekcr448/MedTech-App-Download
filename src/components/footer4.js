import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer
      className={`footer4-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer4-logo2"
            />
          </div>
        </div>
      </div>
      <a
        href="https://sites.google.com/view/medtech-privacy-policy/home"
        target="_blank"
        rel="noreferrer noopener"
        className="footer4-text1 thq-body-small"
      >
        {props.privacyLink ?? (
          <Fragment>
            <span className="footer4-text2">Privacy Policy</span>
          </Fragment>
        )}
      </a>
    </footer>
  )
}

Footer4.defaultProps = {
  privacyLink: undefined,
  logoAlt: 'MedTech Logo',
  logoSrc: `${process.env.PUBLIC_URL}/medtech_logo1-200h.png`,
  rootClassName: '',
}

Footer4.propTypes = {
  privacyLink: PropTypes.element,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer4
