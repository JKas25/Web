import TermButtons from "../components/termExitButton";

function FAQ() {
  return (
    <div className="container mt-3">
      <div className="my-2">
        <div className="terms">
        <h1>Frequently Asked Questions</h1>
            <p>Last updated: December 3, 2023</p>
            <p><strong>Shipping</strong></p>
            <p>How long will it take to recieve my product?</p>
            <p>We will work promptly to handle and ship your product within 3-5 business days.</p>
            <p><strong>Returns/Exchanges</strong></p>
            <p>If I no longer want or like the product purchased can I return it?</p>
            <p>We accept all returns that have not been opened and those that have arrived damaged within 90 days of purchase.</p>
            <p><strong>Transactions/Payments</strong></p>
            <p>What types of payment methods can I use to purchase your products?</p>
            <p>Drop and Shop accepts all credit/debit cards, PayPal, and Bitcoin.</p>
            <p><strong>Warranties/Guarantees</strong></p>
            <p>What warranties can I expect to have with my purchased items?</p>
            <p>All products are covered under a 90 day money back gurantee and products from third-parties may have separate factory warranties.</p>
            <p><strong>Contact Us</strong></p>
            <p>Please contact us if you have any questions or need further information about our Frequently Asked Questions.</p>
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

export default FAQ;
