import Card from "../components/card";
import ProductCard from "../components/product-card";
import Perks from "../components/perks";
import Subscribe from "../components/subscribe";
import cookwearBanner from '../images/cookwear/vecteezy_a-set-of-spoons-and-a-pot-on-a-wooden-table-ai-generated_33635374.jpg';
import bloomhouse from '../images/cookwear/bloomhouse.jpg';
import calphalon from '../images/cookwear/calphalon.jpg';
import carote from '../images/cookwear/carote.jpg';
import cuisinart from '../images/cookwear/cuisinart.jpg';
import gotham from '../images/cookwear/gotham.jpg';
import greenlife from '../images/cookwear/greenlife.jpg';
import marthaStewart from '../images/cookwear/marthaStewart.jpg';
import ninja from '../images/cookwear/ninja.jpg';
import sensarte from '../images/cookwear/sensarte.jpg';
import tfal from '../images/cookwear/tfal.jpg';



function Cookwear(){
    const cookwear = [
        {
          name: 'Bloomhouse Kitchen Set',
          price: 140,
          review: 4.2,
          percentOff: '20%',
          imgSrc: bloomhouse
        },
        {
          name: 'Calphalon Kitchen Set',
          price: 115,
          review: 4.2,
          percentOff: '25%',
          imgSrc: calphalon
        },
        {
          name: 'Carote Kitchen Set',
          price: 124,
          review: 4.2,
          percentOff: '20%',
          imgSrc: carote
        },
        {
          name: 'Cuisinart Kitchen Set',
          price: 132,
          review: 4.2,
          percentOff: '30%',
          imgSrc: cuisinart
        },
        {
          name: 'Gotham Kitchen Set',
          price: 120,
          review: 4.2,
          percentOff: '25%',
          imgSrc: gotham
        },
        {
          name: 'Greenlife Kitchen Set',
          price: 134,
          review: 4.2,
          percentOff: '25%',
          imgSrc: greenlife
        },
        {
          name: 'Martha Stewart Kitchen Set',
          price: 115,
          review: 4.2,
          percentOff: '30%',
          imgSrc: marthaStewart
        },
        {
          name: 'Ninja Kitchen Set',
          price: 119,
          review: 4.2,
          percentOff: '20%',
          imgSrc: ninja
        },
        {
          name: 'Sensarte Kitchen Set',
          price: 119,
          review: 4.2,
          percentOff: '25%',
          imgSrc: sensarte
        },
        {
          name: 'T-fal Kitchen Set',
          price: 215,
          review: 4.2,
          percentOff: '20%',
          imgSrc: tfal
        },
      ]

      return (
        <>
        <Card 
        title="Shop Cookwear Products Now" 
        bodyText='Amazing savings + Great Values means something for everyone. 
        price may be lower as part of clearance.'
        imgSrc={cookwearBanner}
        />
        <div className="mx-5 my-3">
          <h2 className="text-secondary text-center">Cookwear Products</h2>
          <hr />
          <div className="d-flex flex-wrap flex-row justify-content-center gap-3 my-3 mx-2">
            {cookwear.map((p, index)=>{
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

export default Cookwear;