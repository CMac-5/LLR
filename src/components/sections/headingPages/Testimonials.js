import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Robert Hanson" description="It made you think you were in the Mediterranean"/>
                <TestimonialCard name="Aiden Lamb" description="My kids really loved the look of the restaurant and 
                the great food."/>
                <TestimonialCard name="Greta Welsh" description="Great food and even better service."/>
                <TestimonialCard name="Susie Farley" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
                
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}