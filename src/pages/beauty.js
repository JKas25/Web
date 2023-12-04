import Card from "../components/card";
import ProductCard from "../components/product-card";
import Perks from "../components/perks";
import Subscribe from "../components/subscribe";
import beautyBanner from '../images/beauty/beautyBanner.jpg';
import beardConditioner from '../images/beauty/beardConditioner.jpg';
import brushes from '../images/beauty/brushes.jpg';
import electricRazor from '../images/beauty/electricRazor.jpg';
import eyeShadow from '../images/beauty/eyeShadow.jpg';
import faceCleanser from '../images/beauty/faceCleanser.jpg';
import hairBrush from '../images/beauty/hairBrush.jpg';
import iceRoller from '../images/beauty/iceRoller.jpg';
import lotion from '../images/beauty/lotion.jpg';
import skinCream from '../images/beauty/skinCream.jpg';
import toiletryBag from '../images/beauty/toiletryBag.jpg';



function Beauty(){
    const beauty = [
        {
          name: 'Beard Conditioner',
          price: 10,
          review: 4.2,
          percentOff: '20%',
          imgSrc: beardConditioner
        },
        {
          name: 'Brushes',
          price: 15,
          review: 4.2,
          percentOff: '25%',
          imgSrc: brushes
        },
        {
          name: 'Electric Razor',
          price: 89,
          review: 4.2,
          percentOff: '20%',
          imgSrc: electricRazor
        },
        {
          name: 'Eye Shadow',
          price: 12,
          review: 4.2,
          percentOff: '30%',
          imgSrc: eyeShadow
        },
        {
          name: 'Face Cleanser',
          price: 20,
          review: 4.2,
          percentOff: '25%',
          imgSrc: faceCleanser
        },
        {
          name: 'Hair Brush',
          price: 14,
          review: 4.2,
          percentOff: '25%',
          imgSrc: hairBrush
        },
        {
          name: 'Ice Roller',
          price: 35,
          review: 4.2,
          percentOff: '30%',
          imgSrc: iceRoller
        },
        {
          name: 'Lotion',
          price: 9,
          review: 4.2,
          percentOff: '20%',
          imgSrc: lotion
        },
        {
          name: 'Skin Cream',
          price: 7,
          review: 4.2,
          percentOff: '25%',
          imgSrc: skinCream
        },
        {
          name: 'Toiletry Bag',
          price: 44,
          review: 4.2,
          percentOff: '20%',
          imgSrc: toiletryBag
        },
      ]

      return (
        <>
        <Card 
        title="Shop Beauty Products Now" 
        bodyText='Amazing savings + Great Values means something for everyone. 
        price may be lower as part of clearance.'
        imgSrc={beautyBanner}
        />
        <div className="mx-5 my-3">
          <h2 className="text-secondary text-center">Beauty Products</h2>
          <hr />
          <div className="d-flex flex-wrap flex-row justify-content-center gap-3 my-3 mx-2">
            {beauty.map((p, index)=>{
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

export default Beauty;