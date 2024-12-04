import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact6.css'

const Contact6 = (props) => {
  return (
    <div className="contact6-container thq-section-padding">
      <div className="contact6-max-width thq-section-max-width">
        <div className="contact6-content1 thq-flex-row">
          <div className="contact6-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact6-text6">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact6-text8">
                    Have questions or need support? Reach out to us via phone or
                    email, or visit us at our office.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="contact6-content3">
            <div className="contact6-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact6-contact-info1">
                <h3 className="contact6-text3 thq-heading-3">Email</h3>
                <span className="thq-body-small">
                  {props.email1 ?? (
                    <Fragment>
                      <span className="contact6-text9">
                        abhishek.khatri.abad@gmail.com
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact6-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact6-contact-info2">
                <h3 className="contact6-text4 thq-heading-3">Phone</h3>
                <span className="thq-body-small">
                  {props.phone1 ?? (
                    <Fragment>
                      <span className="contact6-text7">+91 902 1730 998</span>
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

Contact6.defaultProps = {
  heading1: undefined,
  phone1: undefined,
  content1: undefined,
  email1: undefined,
}

Contact6.propTypes = {
  heading1: PropTypes.element,
  phone1: PropTypes.element,
  content1: PropTypes.element,
  email1: PropTypes.element,
}

export default Contact6
