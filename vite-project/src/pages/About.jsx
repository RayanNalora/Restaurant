import AboutCTA from "../components/AboutCTA/AboutCTA"
import Hero from "../components/Hero/Hero"
import OurStory from "../components/OurStory/OurStory"
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs"

const About = () => {
  return (
    <div>
       <Hero
        backgroundImage="/contact.jpg"
        title="Home - About"
      />
      <OurStory/>
      <WhyChooseUs/>
      <AboutCTA/>
    </div>
  )
}

export default About
