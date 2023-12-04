import beauty from '../images/makeup.jpg';
import cookwear from '../images/kitchen.jpg';
import bedset from '../images/bedset.jpg';
import jewelry from '../images/watch.jpg';
import fragranceImage from '../images/perfume.jpg';
import jeansShirt from '../images/womens_outfit.jpg';
import Card from "../components/card";
import mainCardImage from '../images/main-card-image.jpg'
import ProductDisplayCard from "../components/productDisplayCard";
import Perks from "../components/perks";
import Subscribe from "../components/subscribe";
import Hero from "../components/hero";


function HomePage(){
    const products = [
        {
          name: 'Fragrance',
          review: 4.2,
          imgSrc: fragranceImage,
          link: '/fragrance'
        },
        {
          name: 'Clothing',
          review: 5,
          imgSrc: jeansShirt,
          link: '/clothing'
        },
        {
          name: 'Beauty',
          review: 4.1,
          imgSrc: beauty,
          link: '/beauty'
        },
        {
          name: 'Cookwear',
          review: 3.5,
          imgSrc: cookwear,
          link: '/cookwear'
        },
        {
          name: 'Bed + Bath',
          review: 2,
          imgSrc:bedset,
          link: '/bedBath'
        },
        {
          name: 'Jewelry',
          review: 4.4,
          imgSrc:jewelry,
          link: '/jewelry'
        },
      ]
    
      const heroItems =[
        {
          name: 'Skin Care',
          percentOff: '40%',
          imageType: 'skin',
          link: '/beauty'
        },
        {
          name: 'Hair Care',
          percentOff: '80%',
          imageType: 'hair',
          link: '/beauty'
        }
      ]

      return (
        <>
        <Card 
        title="Shop This Holiday with us Up To 50% Off" 
        bodyText='Amazing savings + Great Values means something for everyone. 
        price may be lower as part of clearance.'
        link='/holiday'
        buttonText='Shop Now'
        buttonClass='primary'
        imgSrc={mainCardImage}
        />
        <div className="mx-5 my-3">
          <h2 className="text-secondary text-center">Products</h2>
          <hr />
          <div className="d-flex flex-row flex-wrap justify-content-center gap-3 my-3 mx-2">
            {products.map((p, index)=>{
              return <ProductDisplayCard 
              key={index} 
              name={p.name} 
              review={p.review} 
              imgSrc={p.imgSrc}
              link={p.link} />
            })}
          </div>
          <div className="d-flex col-12 flex-row justify-content-evenly my-3 gap-3 px-4">
            {heroItems.map((p, index)=>{
              return <Hero 
              key={index} 
              name={p.name} 
              percentOff={p.percentOff}
              imageType={p.imageType}
              link={p.link} />
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

export default HomePage;