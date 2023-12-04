import Card from "../components/card";
import ProductCard from "../components/product-card";
import Perks from "../components/perks";
import Subscribe from "../components/subscribe";
import clothingBanner from '../images/clothing/vecteezy_t-shirts-mockup-with-text-space-on-colrful-background-hd-ai_27807075.jpg';
import automet from '../images/clothing/automet.jpg';
import babyBodysuit from '../images/clothing/babyBodysuit.jpg';
import lepunuo from '../images/clothing/lepunuo.jpg';
import levis from '../images/clothing/levis.jpg';
import pullover from '../images/clothing/pullover.jpg';
import sherpaJacket from '../images/clothing/sherpaJacket.jpg';
import sweatpants from '../images/clothing/sweatpants.jpg';
import uupalee from '../images/clothing/uupalee.jpg';
import woolSocks from '../images/clothing/woolSocks.jpg';
import zipUp from '../images/clothing/zipUp.jpg';



function Clothing(){
    const clothing = [
        {
          name: 'Automet Top',
          price: 40,
          review: 4.2,
          percentOff: '20%',
          imgSrc: automet
        },
        {
          name: 'Baby Body Suit',
          price: 15,
          review: 4.2,
          percentOff: '25%',
          imgSrc: babyBodysuit
        },
        {
          name: 'Lepunuo Pants',
          price: 24,
          review: 4.2,
          percentOff: '20%',
          imgSrc: lepunuo
        },
        {
          name: 'Levis Jeans',
          price: 32,
          review: 4.2,
          percentOff: '30%',
          imgSrc: levis
        },
        {
          name: 'Pullover Top',
          price: 20,
          review: 4.2,
          percentOff: '25%',
          imgSrc: pullover
        },
        {
          name: 'Sherpa Jacket',
          price: 34,
          review: 4.2,
          percentOff: '25%',
          imgSrc: sherpaJacket
        },
        {
          name: 'Sweat Pants',
          price: 15,
          review: 4.2,
          percentOff: '30%',
          imgSrc: sweatpants
        },
        {
          name: 'Uupalee Top',
          price: 19,
          review: 4.2,
          percentOff: '20%',
          imgSrc: uupalee
        },
        {
          name: 'Wool Socks',
          price: 9,
          review: 4.2,
          percentOff: '25%',
          imgSrc: woolSocks
        },
        {
          name: 'Zip Up Sweater',
          price: 25,
          review: 4.2,
          percentOff: '20%',
          imgSrc: zipUp
        },
      ]

      return (
        <>
        <Card 
        title="Shop Clothing Products Now" 
        bodyText='Amazing savings + Great Values means something for everyone. 
        price may be lower as part of clearance.'
        imgSrc={clothingBanner}
        />
        <div className="mx-5 my-3">
          <h2 className="text-secondary text-center">Clothing Products</h2>
          <hr />
          <div className="d-flex flex-wrap flex-row justify-content-center gap-3 my-3 mx-2">
            {clothing.map((p, index)=>{
              return <ProductCard 
              key={index} 
              name={p.name} 
              price={p.price} 
              percentOff={p.percentOff} 
              review={p.review} 
              imgSrc={p.imgSrc} />
            })}
          </div>

        </div>
        <div className="my-5 mx-5">
            <Perks />
        </div>
        <div className="d-flex justify-content-center my-5 mx-5">
            <Subscribe />
        </div>
        </>
      )

}

export default Clothing;