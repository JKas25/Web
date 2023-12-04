import Card from "../components/card";
import ProductCard from "../components/product-card";
import Perks from "../components/perks";
import Subscribe from "../components/subscribe";
import bedBathBanner from '../images/bedBath/vecteezy_display-of-ceramic-bath-products-and-colorful-towels-on_28216902.jpg';
import bathBombs from '../images/bedBath/bathBombs.jpg';
import bathMat from '../images/bedBath/bathMat.jpg';
import bathPillow from '../images/bedBath/bathPillow.jpg';
import bathSoak from '../images/bedBath/bathSoak.jpg';
import bathSpa from '../images/bedBath/bathSpa.jpg';
import bathtubTray from '../images/bedBath/bathtubTray.jpg';
import epsomSalt from '../images/bedBath/epsomSalt.jpg';
import foamingBath from '../images/bedBath/foamingBath.jpg';
import slippers from '../images/bedBath/slippers.jpg';
import towels from '../images/bedBath/towels.jpg';



function BedBath(){
    const bedBath = [
        {
          name: 'Bath Bombs',
          price: 10,
          review: 4.2,
          percentOff: '20%',
          imgSrc: bathBombs
        },
        {
          name: 'Bath Mat',
          price: 15,
          review: 4.2,
          percentOff: '25%',
          imgSrc: bathMat
        },
        {
          name: 'Bath Pillow',
          price: 24,
          review: 4.2,
          percentOff: '20%',
          imgSrc: bathPillow
        },
        {
          name: 'Bath Soak',
          price: 12,
          review: 4.2,
          percentOff: '30%',
          imgSrc: bathSoak
        },
        {
          name: 'Bath Spa',
          price: 20,
          review: 4.2,
          percentOff: '25%',
          imgSrc: bathSpa
        },
        {
          name: 'Bathtub Tray',
          price: 34,
          review: 4.2,
          percentOff: '25%',
          imgSrc: bathtubTray
        },
        {
          name: 'Epsom Salt',
          price: 15,
          review: 4.2,
          percentOff: '30%',
          imgSrc: epsomSalt
        },
        {
          name: 'Foaming Bath',
          price: 9,
          review: 4.2,
          percentOff: '20%',
          imgSrc: foamingBath
        },
        {
          name: 'Slippers',
          price: 17,
          review: 4.2,
          percentOff: '25%',
          imgSrc: slippers
        },
        {
          name: 'Towels',
          price: 25,
          review: 4.2,
          percentOff: '20%',
          imgSrc: towels
        },
      ]

      return (
        <>
        <Card 
        title="Shop Bed + Bath Products Now" 
        bodyText='Amazing savings + Great Values means something for everyone. 
        price may be lower as part of clearance.'
        imgSrc={bedBathBanner}
        />
        <div className="mx-5 my-3">
          <h2 className="text-secondary text-center">Bed + Bath Products</h2>
          <hr />
          <div className="d-flex flex-wrap flex-row justify-content-center gap-3 my-3 mx-2">
            {bedBath.map((p, index)=>{
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

export default BedBath;