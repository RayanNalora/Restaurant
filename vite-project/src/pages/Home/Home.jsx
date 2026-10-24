import './Home.css';
import Hero from '../../components/Hero/Hero';
import ProductCards from '../../components/ProductCards/ProductCards';
import products from '../../data/products';
import Titles from '../../components/Titles/Titles';
import VideoSection from '../../components/VideoSection/VideoSection';



function Home() {
  return (
    <main className="home">
      <Hero
        backgroundImage="/berger.jpg"
        title="Crafting your Exceptional Dining Reservations"
        description="Reservation is a step into a world of gastronomic wonder. Reserve your table today and let us paint your culinary dreams into reality. the story behind our restaurant."
        buttonText="Explore Products"
        buttonHref="#about"
      />
       <section className="home__content">
        <section className='most-selling'>
          <Titles
          subtitle="Most Selling"
          title="Most Selling"
          />
        </section>
        <ProductCards
         products={products}
        />
        <VideoSection
           videoSrc="/vedio.mp4"/>

      </section>
    

      {/* <h1>Home Page</h1> */}
    </main>
  );
}

export default Home;
