import TermButtons from "../components/termExitButton";

function PrivacyPolicy() {
  return (
    <div className="container mt-3">
      <div className="my-2">
        <div className="terms">
        <h1>Privacy policy</h1>
            <p>Last updated: December 3, 2023</p>
            <p>At Drop and Shop, we value the privacy of our visitors. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (https://www.dropandshop.com). By using our website, you agree to the terms of this Privacy Policy.</p>
            <p><strong>Information Collection and Use</strong></p>
            <p>We may collect personal information such as your name, email address, phone number, and any other information you provide voluntarily. This information is used to improve our website, provide customer service, and deliver updates and promotional content.</p>
            <p><strong>Log Files and Cookies</strong></p>
            <p>Like many websites, we use log files and cookies to gather non-personal information, such as IP addresses, browser types, and the pages you visit. This data helps us analyze trends, administer the site, and personalize your browsing experience.</p>
            <p><strong>Advertising Partners and Third Parties</strong></p>
            <p>Some third-party advertising partners may use cookies and similar technologies to display personalized ads. We have no control over these cookies and recommend reviewing the respective Privacy Policies of these advertisers for more information.</p>
            <p><strong>Your Rights</strong></p>
            <p>Under the CCPA and GDPR, you can access, correct, or delete your data. You can also request that we restrict or stop processing your information. To exercise any of these rights, please contact us.</p>
            <p><strong>Children’s Information</strong></p>
            <p>We do not knowingly collect personal information from children under 13. If you believe your child has provided such information on our website, please get in touch with us, and we will promptly remove it from our records.</p>
            <p><strong>Contact Us</strong></p>
            <p>Please contact us if you have any questions or need further information about our Privacy Policy.</p>
        </div>
        <TermButtons 
          buttonText='Exit'
          buttonClass='danger'
          link='/home'
        />
      </div>
    </div>
  );
}

export default PrivacyPolicy;
