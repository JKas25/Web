import Review from './review';

function ProductDisplayCard({name, review, imgSrc, link}) {
  return (<div className="card text-center mx-2 p-0 border-primary" style={{width: 300}}>
    <img src={imgSrc} height='340' className="card-img-top p-0" alt="..." />
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>Rating: <Review rating={review}  /></p>
      <a href={link} className={`btn btn-primary text-white`}>
          Shop Now
        </a>
    </div>
  </div>)
}

export default ProductDisplayCard;
