import Card from "../components/card";
import ProductCard from "../components/product-card";
import Perks from "../components/perks";
import Subscribe from "../components/subscribe";
import holidayBanner from '../images/holidayItems/6s__2__generated.jpg';
import blanket from '../images/holidayItems/blanket.jpg';
import backpack from '../images/holidayItems/backpack.jpg';
import cndle from '../images/holidayItems/cndle.jpg';
import comforter from '../images/holidayItems/comforter.jpg';
import earrings from '../images/holidayItems/earrings.jpg';
import festiveSocks from '../images/holidayItems/festiveSocks.jpg';
import giftBag from '../images/holidayItems/giftBag.jpg';
import gloves from '../images/holidayItems/gloves.jpg';
import massager from '../images/holidayItems/massager.jpg';
import mug from '../images/holidayItems/mug.jpg';
import necklace from '../images/holidayItems/necklace.jpg';
import pajamas from '../images/holidayItems/pajamas.jpg';
import pillow from '../images/holidayItems/pillow.jpg';
import rugs from '../images/holidayItems/rugs.jpg';
import shawl from '../images/holidayItems/shawl.jpg';
import slippers from '../images/holidayItems/slippers.jpg';
import sweater from '../images/holidayItems/sweater.jpg';
import sweater2 from '../images/holidayItems/sweater2.jpg';
import toteBag from '../images/holidayItems/toteBag.jpg';
import treeSkirt from '../images/holidayItems/treeSkirt.jpg';



function HolidayDeals(){
    const holidayProducts = [
        {
          name: 'Holiday Blanket',
          price: 30,
          review: 4.2,
          percentOff: '25%',
          imgSrc: blanket
        },
        {
          name: 'Travel Backpack',
          price: 80,
          review: 5,
          percentOff: '15%',
          imgSrc: backpack
        },
        {
          name: 'Holiday Candle',
          price: 18,
          review: 3.2,
          percentOff: '40%',
          imgSrc: cndle
        },
        {
          name: 'Plush Comforter',
          price: 70,
          review: 4.5,
          percentOff: '20%',
          imgSrc: comforter
        },
        {
          name: 'Diamond Earrings',
          price: 199,
          review: 4.1,
          percentOff: '50%',
          imgSrc: earrings
        },
        {
          name: 'Festive Socks',
          price: 12,
          review: 3.5,
          percentOff: '30%',
          imgSrc: festiveSocks
        },
        {
          name: 'Holiday Gift Bag',
          price: 54,
          review: 2,
          percentOff: '20%',
          imgSrc: giftBag
        },
        {
          name: 'Winter Gloves',
          price: 9,
          review: 4.4,
          percentOff: '70%',
          imgSrc: gloves
        },
        {
          name: 'Massager',
          price: 25,
          review: 4.2,
          percentOff: '25%',
          imgSrc: massager
        },
        {
          name: 'Diamond Necklace',
          price: 145,
          review: 4.2,
          percentOff: '30%',
          imgSrc: necklace
        },
        {
          name: 'Coffee Mug',
          price: 10,
          review: 4.2,
          percentOff: '20%',
          imgSrc: mug
        },
        {
          name: 'Holiday Pillow Cover',
          price: 15,
          review: 4.2,
          percentOff: '25%',
          imgSrc: pillow
        },
        {
          name: 'Holiday Pajamas',
          price: 15,
          review: 4.2,
          percentOff: '40%',
          imgSrc: pajamas
        },
        {
          name: 'Festive Rugs',
          price: 35,
          review: 4.2,
          percentOff: '30%',
          imgSrc: rugs
        },
        {
          name: 'Womens Shawl',
          price: 20,
          review: 4.2,
          percentOff: '25%',
          imgSrc: shawl
        },
        {
          name: 'Waterproof Slippers',
          price: 40,
          review: 4.2,
          percentOff: '20%',
          imgSrc: slippers
        },
        {
          name: 'Mens Holiday Sweater',
          price: 35,
          review: 4.2,
          percentOff: '30%',
          imgSrc: sweater2
        },
        {
          name: 'Mens Sweater',
          price: 30,
          review: 4.2,
          percentOff: '25%',
          imgSrc: sweater
        },
        {
          name: 'Tote Bag',
          price: 24,
          review: 4.2,
          percentOff: '25%',
          imgSrc: toteBag
        },
        {
          name: 'Christmas Tree Skirt',
          price: 27,
          review: 4.2,
          percentOff: '35%',
          imgSrc: treeSkirt
        },
      ]

      return (
        <>
        <Card 
        title="Holiday Deals Up To 50% Off" 
        bodyText='Amazing savings + Great Values means something for everyone. 
        price may be lower as part of clearance.'
        imgSrc={holidayBanner}
        />
        <div className="mx-5 my-3">
          <h2 className="text-secondary text-center">Holiday Deals</h2>
          <hr />
          <div className="d-flex flex-wrap flex-row justify-content-center gap-3 my-3 mx-2">
            {holidayProducts.map((p, index)=>{
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

export default HolidayDeals;