function Perks() {
  return (
    <div className="d-flex flex-row justify-content-between gap-1">
      <div className="d-flex flex-column">
        <i className="bi bi-cart-fill text-secondary mb-2 display-3"></i>
        Free Shipping
        <span>On orders of $150 dollars or more</span>
      </div>
      <div className="d-flex flex-column">
      <i class="bi bi-arrow-counterclockwise text-secondary mb-2 display-3"></i>
        Free Returns
        <span>Within 60 days</span>
      </div>
      <div className="d-flex flex-column">
      <i className="bi bi-truck text-secondary mb-2 display-3"></i>
        Quick Delivery
        <span>Nationwide</span>
      </div>
      <div className="d-flex flex-column">
      <i class="bi bi-hand-thumbs-up-fill text-secondary mb-2 display-3"></i>
        Variety
        <span>Within all products</span>
      </div>
    </div>
  );
}

export default Perks;
