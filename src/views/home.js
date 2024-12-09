import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features18 from '../components/features18'
import Features17 from '../components/features17'
import Features181 from '../components/features181'
import Steps2 from '../components/steps2'
import CTA26 from '../components/cta26'
import Contact6 from '../components/contact6'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <main className="home-container">
      <Helmet>
        <title>Quick Witted Joyous Stork</title>
        <meta property="og:title" content="Quick Witted Joyous Stork" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">MedTech</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">#features</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">#contact</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">#login</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">Features</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Contact</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Login</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Sign In</span>
          </Fragment>
        }
        logoSrc={`${process.env.PUBLIC_URL}/medtech_logo-1500h.png`}
        page1Description={
          <Fragment>
            <span className="home-text20">Welcome to MedTech App</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">
              Explore the Features of MedTech App
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">
              Contact Us for any queries or support
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">Login to your MedTech account</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text24">
              Download APK
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text24">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text25">
              Empowering doctors and patients through innovative features.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text26">MedTech App</span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGV4ZXJjaXNlfGVufDB8fHx8MTczMzI0MjU1MHww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image2Src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxleGVyY2lzZXxlbnwwfHx8fDE3MzMyNDI1NTB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image3Src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGRvY3RvcnN8ZW58MHx8fHwxNzMzMjQyNTc5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image4Src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjBhcHB8ZW58MHx8fHwxNzMzMjQ5MDM0fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image5Src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxleGVyY2lzZSUyMGFwcHxlbnwwfHx8fDE3MzMyNDkxNDN8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image6Src="https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxleGVyY2lzZSUyMGFwcHxlbnwwfHx8fDE3MzMyNDkxNDN8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image9Src="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxleGVyY2lzZXxlbnwwfHx8fDE3MzMyNDI1NTB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image10Src="https://images.unsplash.com/photo-1603448448989-336b90551bf6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxtZWRpY2FsJTIwYXBwfGVufDB8fHx8MTczMzI0OTAzNHww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image11Src="https://images.unsplash.com/photo-1518644961665-ed172691aaa1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxleGVyY2lzZSUyMGFwcHxlbnwwfHx8fDE3MzMyNDkxNDN8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image12Src="https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0fHxleGVyY2lzZSUyMGFwcHxlbnwwfHx8fDE3MzMyNDkxNTh8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        rootClassName="hero17root-class-name"
      ></Hero17>
      <Features18
        feature1Title={
          <Fragment>
            <span className="home-text27">Upload Exercise Videos</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text28">
              Doctors can easily upload exercise videos for patients to access
              and follow along, enhancing the overall patient experience.
            </span>
          </Fragment>
        }
        rootClassName="features18root-class-name"
        feature1Title1={
          <Fragment>
            <span className="home-text29">Interactive Communication</span>
          </Fragment>
        }
        feature1Description1={
          <Fragment>
            <span className="home-text30">
              Facilitate interactive communication between doctors and patients
              through the app.
            </span>
          </Fragment>
        }
        feature1Title2={
          <Fragment>
            <span className="home-text31">Assign Video Access</span>
          </Fragment>
        }
        feature1Description2={
          <Fragment>
            <span className="home-text32">
              Doctors have the ability to assign specific users to access the
              uploaded exercise videos.
            </span>
          </Fragment>
        }
      ></Features18>
      <Features17
        feature1Title={
          <Fragment>
            <span className="home-text33">Complete User Control</span>
          </Fragment>
        }
        rootClassName="features17root-class-name"
        feature1ImageSrc={`${process.env.PUBLIC_URL}/screenshot%202024-11-30%20091239-1400w.png`}
        feature1Description={
          <Fragment>
            <span className="home-text34">
              <span>
                Doctors have full control over user access.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1Title1={
          <Fragment>
            <span className="home-text37">All transactions control</span>
          </Fragment>
        }
        feature1Description1={
          <Fragment>
            <span className="home-text38">
              <span>
                They can get access to all the current allocated courses of a
                user.
              </span>
              <br></br>
              <span>
                All the past transaction history can also be retrieved.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1Title2={
          <Fragment>
            <span className="home-text43">Allocate/Deallocate courses</span>
          </Fragment>
        }
        feature1Description2={
          <Fragment>
            <span className="home-text44">
              <span>
                They can any time allocate/deallocate any video file or folder
                to a user.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Features17>
      <Features181
        feature1Title={
          <Fragment>
            <span className="home-text47">Doctors can add exercise videos</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text48">
              Doctors have the ability to upload their own exercise videos to
              the app.
            </span>
          </Fragment>
        }
        feature1Title1={
          <Fragment>
            <span className="home-text49">Compressed H.264 videos</span>
          </Fragment>
        }
        feature1Description1={
          <Fragment>
            <span className="home-text50">
              All videos are compressed into H.264 format to reduce size
              consumption on doctor&apos;s devices.
            </span>
          </Fragment>
        }
        feature1Title2={
          <Fragment>
            <span className="home-text51">Doctors are the Admin</span>
          </Fragment>
        }
        feature1Description2={
          <Fragment>
            <span className="home-text52">
              Doctors can manage the file structure of the app by advertising or
              adding/removing any videos or set of videos.
            </span>
          </Fragment>
        }
        rootClassName="features181root-class-name"
      ></Features181>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text53">Doctors Add Exercise Videos</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text54">Allocate Users to Access Videos</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text55">Compressed Video Format</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text56">Interactive Communication</span>
          </Fragment>
        }
        rootClassName="steps2root-class-name"
        step1Description={
          <Fragment>
            <span className="home-text57">
              Doctors can easily upload their exercise videos to share with
              their patients.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text58">
              Doctors have the ability to assign specific users to access a set
              of exercise videos.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text59">
              All videos are compressed into H.264 format to optimize storage
              space on users&apos; devices.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text60">
              Users can watch exercise videos and directly contact their doctors
              for queries or subscription renewals.
            </span>
          </Fragment>
        }
      ></Steps2>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text61">Download MedTech App</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text62">
              Join MedTech now to revolutionize your healthcare experience.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text63">Get Started with MedTech Today!</span>
          </Fragment>
        }
        rootClassName="cta26root-class-name"
      ></CTA26>
      <Contact6
        email1={
          <Fragment>
            <span className="home-text64">abhishek.khatri.abad@gmail.com</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="home-text65">+91 902 1730 998</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text66">
              Have questions or need support? Reach out to us via phone or
              email, or visit us at our office.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text67">Contact Us</span>
          </Fragment>
        }
      ></Contact6>
      <Footer4
        logoSrc={`${process.env.PUBLIC_URL}/medtech_logo-1500h.png`}
        privacyLink={
          <Fragment>
            <span className="home-text68">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name"
      ></Footer4>
    </main>
  )
}

export default Home
