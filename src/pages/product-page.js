import makeup from "../images/makeup.jpg";
function ProductPage() {
  return (
    <div className="container mt-3">
      <div className="my-2">
        <h2>Skin Care</h2>
        <h4>Why is skin care important?</h4>
        <p>
          Skincare products are important to use on a daily basis regardless of
          your skin type or age. Skincare is a part of daily health and hygiene,
          but it can also serve many other benefits. Certain skincare can help
          leave your skin looking and feeling healthier, help to visibly reduce
          the signs of aging, help your makeup apply smoother, and play a part
          in your self care routine.
        </p>
      </div>
      <div className="my-2">
        <h2>Makeup</h2>
        <h4>What products should I include in my makeup routine?</h4>
        <p>
          The products you choose to use in your makeup routine will depend on
          your desired makeup look and your makeup concerns or environment. For
          example, if you have issues with your makeup fading and live in a high
          humidity climate - using a face primer is important to help make your
          makeup last.
        </p>
      </div>
      <hr />
      <div className="d-flex flex-row my-5">
        <div className="d-flex col-12">
          <div className="col-4">
            <img src={makeup} width='380' height="400" alt="makeup" />
          </div>
          <div className="col-8">
            <h2>How do I apply makeup?</h2>
            <p>
              Each makeup product will be applied depending on the products
              formula and type. For lip makeup like lipsticks, lip gloss it's
              easy to apply these products using their included applicators. For
              face makeup products like primer, foundation, concealer and cream
              blush or bronzer — you may like to apply the product using a
              synthetic makeup brush, your fingertips or a makeup sponge. For
              products with powder formulas makeup brushes tend to give the best
              results. Use a face brush to apply face powders, blushes,
              bronzers, and highlighters and use small brushes and blending
              brushes to create your eyeshadow looks. Making your makeup last
              (especially in a hot or humid climate, or if you have an oily skin
              type) can be a difficult task. The key is to adequately prime your
              skin with a makeup primer and look for long-wearing formulas. Our
              Teint Idole Ultra Wear Foundation and All Over Concealer are
              humidity proof and provide up to 24 hours of wear time. For eye
              makeup look to waterproof and long-lasting formulas. With our
              virtual try on tool, foundation finder tool, and our mascara
              finder tool you can easily try on different shades of makeup at
              home and find the best products for you without having to leave
              your home.
            </p>
            <a href='/beauty' className={`btn btn-secondary text-white`}>
              Shop Now
            </a>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
