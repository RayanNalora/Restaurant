import ContactForm from "../components/ContactForm/ContactForm"
import Hero from "../components/Hero/Hero"
import Titles from "../components/Titles/Titles"

export const Contact = () => {
  return (
    <div>
       <section className="home__content">
          <Hero
            backgroundImage="/contact.jpg"
            title="HOME - Contact"
          />
           
              <Titles
                subtitle="SHOP BY CATEGORY"
                title="SEND US MESSAGE"
              />
          <ContactForm/>
          </section>
    </div>
  )
}
