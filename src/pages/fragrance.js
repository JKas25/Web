import Card from "../components/card";
import ProductCard from "../components/product-card";
import Perks from "../components/perks";
import Subscribe from "../components/subscribe";
import fragranceBanner from '../images/fragrance/vecteezy_background-floral-and-cosmetic-beauty-minimal-illustratiom_29129523.jpg';
import adidas from '../images/fragrance/adidas.jpg';
import burberry from '../images/fragrance/burberry.jpg';
import chanel from '../images/fragrance/chanel.jpg';
import ck from '../images/fragrance/ck.jpg';
import cupidCologne from '../images/fragrance/cupidCologne.jpg';
import lattafa from '../images/fragrance/lattafa.jpg';
import obsession from '../images/fragrance/obsession.jpg';
import ralphLauren from '../images/fragrance/ralphLauren.jpg';
import redDoor from '../images/fragrance/redDoor.jpg';
import savage from '../images/fragrance/savage.jpg';



function Fragrance(){
    const fragrance = [
        {
          name: 'Adidas Cologne',
          price: 45,
          review: 4.2,
          percentOff: '20%',
          imgSrc: adidas
        },
        {
          name: 'Burberry Perfume',
          price: 90,
          review: 4.2,
          percentOff: '25%',
          imgSrc: burberry
        },
        {
          name: 'Chanel Perfume',
          price: 75,
          review: 4.2,
          percentOff: '20%',
          imgSrc: chanel
        },
        {
          name: 'Calvin Cline Cologne',
          price: 32,
          review: 4.2,
          percentOff: '30%',
          imgSrc: ck
        },
        {
          name: 'Cupid Cologne',
          price: 25,
          review: 4.2,
          percentOff: '25%',
          imgSrc: cupidCologne
        },
        {
          name: 'Lattafa Perfume',
          price: 34,
          review: 4.2,
          percentOff: '25%',
          imgSrc: lattafa
        },
        {
          name: 'Obsession Perfume',
          price: 35,
          review: 4.2,
          percentOff: '30%',
          imgSrc: obsession
        },
        {
          name: 'Ralph Lauren Cologne',
          price: 55,
          review: 4.2,
          percentOff: '20%',
          imgSrc: ralphLauren
        },
        {
          name: 'Red Door Perfume',
          price: 44,
          review: 4.2,
          percentOff: '25%',
          imgSrc: redDoor
        },
        {
          name: 'Savage Cologne',
          price: 65,
          review: 4.2,
          percentOff: '20%',
          imgSrc: savage
        },
      ]

      return (
        <>
        <Card 
        title="Shop Fragrance Products Now" 
        bodyText='Amazing savings + Great Values means something for everyone. 
        price may be lower as part of clearance.'
        imgSrc={fragranceBanner}
        />
        <div className="mx-5 my-3">
          <h2 className="text-secondary text-center">Fragrance Products</h2>
          <hr />
          <div className="d-flex flex-wrap flex-row justify-content-center gap-3 my-3 mx-2">
            {fragrance.map((p, index)=>{
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

export default Fragrance;