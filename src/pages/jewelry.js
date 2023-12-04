import Card from "../components/card";
import ProductCard from "../components/product-card";
import Perks from "../components/perks";
import Subscribe from "../components/subscribe";
import jewelryBanner from '../images/jewelry/vecteezy_close-up-of-a-beautiful-woman-wearing-a-diamond-necklace-ai_29896326.jpg';
import bracelet from '../images/jewelry/bracelet.jpg';
import goldNecklace from '../images/jewelry/goldNecklace.jpg';
import goldRing from '../images/jewelry/goldRing.jpg';
import haloRing from '../images/jewelry/haloRing.jpg';
import heartNecklace from '../images/jewelry/heartNecklace.jpg';
import infinityNecklace from '../images/jewelry/infinityNecklace.jpg';
import jadeHeart from '../images/jewelry/jadeHeart.jpg';
import necklace from '../images/jewelry/necklace.jpg';
import seaGlass from '../images/jewelry/seaGlass.jpg';
import pendant from '../images/jewelry/pendant.jpg';



function Jewelry(){
    const jewelry = [
        {
          name: 'Bracelet',
          price: 145,
          review: 4.2,
          percentOff: '20%',
          imgSrc: bracelet
        },
        {
          name: 'Gold Necklace',
          price: 190,
          review: 4.2,
          percentOff: '25%',
          imgSrc: goldNecklace
        },
        {
          name: 'Gold Ring',
          price: 175,
          review: 4.2,
          percentOff: '20%',
          imgSrc: goldRing
        },
        {
          name: 'Halo Ring',
          price: 132,
          review: 4.2,
          percentOff: '30%',
          imgSrc: haloRing
        },
        {
          name: 'Heart Necklace',
          price: 125,
          review: 4.2,
          percentOff: '25%',
          imgSrc: heartNecklace
        },
        {
          name: 'Infinity Necklace',
          price: 134,
          review: 4.2,
          percentOff: '25%',
          imgSrc: infinityNecklace
        },
        {
          name: 'Jade Heart',
          price: 135,
          review: 4.2,
          percentOff: '30%',
          imgSrc: jadeHeart
        },
        {
          name: 'Necklace',
          price: 155,
          review: 4.2,
          percentOff: '20%',
          imgSrc: necklace
        },
        {
          name: 'Sea Glass',
          price: 144,
          review: 4.2,
          percentOff: '25%',
          imgSrc: seaGlass
        },
        {
          name: 'Pendant',
          price: 165,
          review: 4.2,
          percentOff: '20%',
          imgSrc: pendant
        },
      ]

      return (
        <>
        <Card 
        title="Shop Jewelry Products Now" 
        bodyText='Amazing savings + Great Values means something for everyone. 
        price may be lower as part of clearance.'
        imgSrc={jewelryBanner}
        />
        <div className="mx-5 my-3">
          <h2 className="text-secondary text-center">Jewelry Products</h2>
          <hr />
          <div className="d-flex flex-wrap flex-row justify-content-center gap-3 my-3 mx-2">
            {jewelry.map((p, index)=>{
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

export default Jewelry;