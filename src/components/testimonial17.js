import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text27">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text35">
                  MedTech has revolutionized the way I interact with my
                  patients. The ability to share personalized exercise videos
                  and communicate seamlessly has greatly improved patient
                  outcomes.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            Dr. Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text34">
                            Orthopedic Surgeon
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text33">
                        I highly recommend MedTech to all healthcare
                        professionals. It&apos;s a game-changer in patient care
                        and management.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            Dr. Patel
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            Cardiologist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text36">
                        The video compression feature of MedTech is fantastic!
                        It ensures smooth playback without compromising on
                        quality.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text31">Dr. Lee</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text29">
                            Physical Therapist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text28">
                        MedTech has simplified the way I engage with my
                        patients. It&apos;s user-friendly and enhances the
                        overall patient experience.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            Dr. Garcia
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            General Practitioner
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text30">
                        As a doctor, having the ability to customize and manage
                        video content effortlessly is invaluable. MedTech offers
                        all that and more.
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

Testimonial17.defaultProps = {
  author1Alt: "Dr. Smith's Image",
  author4Alt: "Dr. Garcia's Image",
  author4Src:
    'https://images.unsplash.com/photo-1622446555437-bd11e97ae93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0MTg4N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1471895302488-5ce150f3a1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0MTg4N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: undefined,
  author1Name: undefined,
  author3Alt: "Dr. Lee's Image",
  heading1: undefined,
  review3: undefined,
  author3Position: undefined,
  review4: undefined,
  author3Name: undefined,
  author4Name: undefined,
  review1: undefined,
  author1Position: undefined,
  content1: undefined,
  review2: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1517498327491-f903e1e281cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0MTg4OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Position: undefined,
  author2Alt: "Dr. Patel's Image",
  author2Src:
    'https://images.unsplash.com/photo-1664464168698-eed132cbc7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI0MTg4OHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial17.propTypes = {
  author1Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author4Src: PropTypes.string,
  author2Name: PropTypes.element,
  author1Src: PropTypes.string,
  author4Position: PropTypes.element,
  author1Name: PropTypes.element,
  author3Alt: PropTypes.string,
  heading1: PropTypes.element,
  review3: PropTypes.element,
  author3Position: PropTypes.element,
  review4: PropTypes.element,
  author3Name: PropTypes.element,
  author4Name: PropTypes.element,
  review1: PropTypes.element,
  author1Position: PropTypes.element,
  content1: PropTypes.element,
  review2: PropTypes.element,
  author3Src: PropTypes.string,
  author2Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author2Src: PropTypes.string,
}

export default Testimonial17
