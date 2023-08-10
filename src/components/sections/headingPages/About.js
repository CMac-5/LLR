export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">In 1995, a venture named "Little Lemon" was inaugurated by a duo of Italian siblings, Adrian and Mario. In the midst of Chicago's vibrant cultural mosaic, these two brothers astutely identified the absence of authentic Mediterranean fare. This realization ignited their determination to transport the delectable essence of their Italian roots to the hearts and palates of Chicago's denizens. As time has marched on, spanning nearly three decades, Adrian and Mario persist as the vigilant custodians of the esteemed establishment that is Little Lemon.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}