function Hero({ name, percentOff, imageType, link }) {
  return (
    <div className={`hero-image-${imageType} card col-6 my-3`}>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <div>
          <h5 className="">
            <u>Latest Collection</u>
          </h5>
          <p>Up to {percentOff} off!</p>
          <a href={link} className={`btn btn-primary text-white`}>
          Shop Now
        </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
