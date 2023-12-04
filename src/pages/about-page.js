import ProfilePic from '../components/profilePics';
import Profile1 from '../images/profile/pro1.jpg';
import Profile2 from '../images/profile/pro2.jpg';
import Profile3 from '../images/profile/pro3.jpg';

function AboutPage() {

  const profilePic = [
    {
      name: 'Jarek K.',
      imgSrc: Profile1,
    },
    {
      name: 'Justin H.',
      imgSrc: Profile2,
    },
    {
      name: 'Aween K.',
      imgSrc: Profile3,
    }
  ]

  return (
    <div className="container my-3 ">
      <div class="about-section">
  <h1>About Us</h1>
  <p>Drop & Shop is a French luxury perfumes, clothes, and cosmetics house
              that distributes products internationally. Drop & Shop is part of the
              Luxury Products division, which is its parent company and offers luxury
              skin care, fragrances, and makeup at higher-end prices.</p>
  <p>The company provides fragrances, skin care, and makeup. Their most
              famous products include their mascaras, their Visionnaire Range which
              contains a patented ingredient, aimed to improve skin texture color
              qualities, especially in pore reduction, fine lines and uneven skin
              tone.  </p>
</div>

<div class="row">
  <div>
    <div class="card">
    <div className="d-flex flex-row flex-wrap justify-content-center gap-3 my-3 mx-2">
            {profilePic.map((p, index)=>{
              return <ProfilePic 
              key={index} 
              name={p.name} 
              imgSrc={p.imgSrc} />
            })}
          </div>
    </div>
  </div>
</div>

<div className="btnContainer">
  <a href='/contact' className={`btn btn-secondary text-white aboutBtn`}>
          Contact Us
  </a>   
</div>

    </div>
  );
}

export default AboutPage;



