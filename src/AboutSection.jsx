
import './AboutSection.css';

function AboutSection() {
    const services = [
        {
            icon: '🤝',
            title: 'Licensed Technicians',
            description:
                'Arcu Corp, which later merged with Adobe Systems, ushered lorem.'
        },
        {
            icon: '👍',
            title: 'Top Rated Service',
            description:
                'Egestas dolor sed viverra donec ullamcorper a lacus vestibulum sed.'
        },
        {
            icon: '⏰',
            title: 'Timely Services',
            description:
                'Mascada fames ac turpis egestas integer eget aliquet nibh.'
        }
    ];

    return (
        <section className="about-section" id="about">
            <div className="about-header">
                <span className="subtitle">ABOUT US</span>
                <h2 className="title">
                    We Offer Plumbing Work Since 2014
                </h2>
            </div>

            <div className="about-grid">
                {services.map((service, index) => (
                    <div className="card" key={index}>
                        <div className="card-icon">
                            {service.icon}
                        </div>

                        <div className="card-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="carousel-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </section>
    );
}

export default AboutSection;
