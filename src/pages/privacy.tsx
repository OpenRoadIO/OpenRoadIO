import React from 'react';
import { Link } from 'react-router-dom';
import './privacy.css';

const GTMDataPrivacy: React.FC = () => {
  return (
    <div className="privacy-wrapper">
      {/* Decorative background glow */}
      <div className="privacy-bg-glow"></div>

      <main className="privacy-container">
        
        {/* Navigation / Back Button */}
        <div className="privacy-nav">
          <Link to="/GTMVariableMapper" className="privacy-back-btn">
            &larr; Back to Extension
          </Link>
        </div>

        {/* Header Section */}
        <section className="privacy-header">
          <div className="privacy-badge">Legal</div>
          <h1>Privacy <span className="privacy-accent">Policy</span></h1>
          <p className="privacy-subtitle">Last updated: April 2026</p>
        </section>

        {/* Content Section */}
        <section className="privacy-content">
          
          <div className="privacy-card">
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy explains how the <strong>GTM Variable Mapper</strong> Chrome Extension ("the Extension") collects, uses, and protects your information. We prioritize your privacy and have designed this tool to operate primarily within your local browser environment.
            </p>
          </div>

          <div className="privacy-card">
            <h2>2. Data Collection and Local Storage</h2>
            <p>
              The Extension requests the <code>storage</code> permission to utilize <code>chrome.storage.local</code>. We use this strictly to save:
            </p>
            <ul>
              <li>Your UI theme preference (Dark/Light mode).</li>
              <li>A temporary history of your 5 most recently mapped DataLayer payloads for your convenience.</li>
              <li>Your Pro License key status.</li>
            </ul>
            <p>
              <strong>None of this data is sent to our servers.</strong> It remains completely local to your specific Chrome browser instance and is wiped automatically if you uninstall the extension.
            </p>
          </div>

          <div className="privacy-card">
            <h2>3. Third-Party Services (Lemon Squeezy)</h2>
            <p>
              If you upgrade to the Pro version, the Extension requests <code>host_permissions</code> for <code>https://api.lemonsqueezy.com/*</code>. 
            </p>
            <p>
              This is used exclusively to make a secure, one-way validation request to verify your license key. We do not track your browsing history, and no personal payload data mapped within the tool is ever transmitted to Lemon Squeezy or any other external server.
            </p>
          </div>

          <div className="privacy-card">
            <h2>4. Data Retention & Deletion</h2>
            <p>
              Because your data is stored locally in your browser, you have complete control over it. You can delete all data associated with GTM Variable Mapper at any time by simply uninstalling the extension from your Chrome browser, or by clearing your browser's local extension data.
            </p>
          </div>

          <div className="privacy-card">
            <h2>5. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact the developer, Henri Singh, at the contact points listed on the main OpenRoadIO website.
            </p>
          </div>

        </section>
      </main>
    </div>
  );
};

export default GTMDataPrivacy;
