import React from 'react';
import './educationPage.css';
import HeaderSupport from '../../сomponents/headerSupport/HeaderSupport'
import BannerSupport from '../../сomponents/bannerSupport/BannerSupport'
import Footer from '../../сomponents/footer/Footer'
import SearchContact from '../../сomponents/searchContact/SearchContact'



function EducationPage() {
  return (
    <>
      <main> 
        <HeaderSupport/>
        <BannerSupport />
        <SearchContact/>

          <section className="information-section">
            <div className="information-row">
              <div className="info-card">
                <h2>Platform Basics</h2>
                <p>Key articles to help you get started with the platform and learn its features.</p>
              </div>
              <div className="info-card">
                <h2>Account, Profile, and Community</h2>
                <p>Learn how to manage your account, customize your profile, and interact with other users.</p>
              </div>
              <div className="info-card">
                <h2>Creating, Editing, and Publishing</h2>
                <p>Documentation on setting up projects, creating content, and promoting it on the platform.</p>
              </div>
            </div>
            <div className="information-row">
              <div className="info-card">
                <h2>Files and Resources</h2>
                <p>How to attach files, images, and other resources <br />to your projects.</p>
              </div>
              <div className="info-card">
                <h2>Safety and Legal Center</h2>
                <p>Information about account security, data privacy, and legal aspects of using the platform.</p>
              </div>
              <div className="info-card">
                <h2>Subscriptions and Payments</h2>
                <p>Information about subscriptions, paid features, <br />and payment methods.</p>
              </div>
            </div>
              <div className="information-row">
              <div className="info-card">
                <h2>Subscriptions and Payments</h2>
                <p>Information about subscriptions, paid features, <br />and payment methods.</p>
              </div>
              <div className="info-card">
                <h2>Livestreaming and Webinars</h2>
                <p>Learn how to use livestreaming features and participate in webinars.</p>
              </div>
              <div className="info-card">
                <h2>Troubleshooting and FAQs</h2>
                <p>A section with frequently asked questions and solutions to common issues.</p>
              </div>
            </div>
          </section>

          <section className="questions-section">
            <div className="question-main">
              <h2>What features are available with Pro?</h2>
              <p>A section with frequently asked questions and solutions to common issues. . A section with frequently asked questions and solutions to common issues.A section with<br /> frequently asked questions and solutions to common issues.A section with frequently asked questions and solutions to common issues.</p>
            </div>
            <div className="question">
              <h2>How can I change or update my Adobe ID?</h2>
            </div>
            <div className="question">
              <h2>How can I follow interesting creatives?</h2>
            </div>
            <div className="question">
              <h2>How do I switch from a business profile to a personal profile in Adobe ID?</h2>
            </div>
            <div className="question">
              <h2>What should I do if I can’t log into my account?</h2>
            </div>
            <div className="question">
              <h2>How do I edit a draft or a published project?</h2>
            </div>
            <div className="question">
              <h2>How can I protect myself from job scams?</h2>
            </div>
          </section>
          <Footer />
      </main>
    </>
  );
}

export default EducationPage;