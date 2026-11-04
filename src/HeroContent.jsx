import  {useState} from 'react';
import './HeroContent.css';

function HeroContent() {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType:'',
    phone: '',
   });

   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit =(e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
   };

   return (
    <section className='hero-container'>
        <div className="worker-overlay">
            <img 
            src='/image.jpg'
            alt="Service Worker"
            className='worker-img'
            />
        </div>

        <div className="hero-wrapper">
            <div className="hero-center-content">
                <span className='subtitle-tag'>LET`S GET TO WORK</span>
                <h1 className='main-title'>
                    Your Go-To Service <br/>
                    Providers</h1>
                    <p className="description-text">
            Mauris ac risus sed quam semper auctor. Nam tempus volutpat ipsum, non
            viverra odio mollis mollis. Integer lacus ligula, imperdiet vel massa in, maximus.
          </p>

          <button className="yellow-btn">Our Service</button>

          {/* Carousel Pagination Dots */}
          <div className="carousel-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* Right Contact Card Form */}
        <div className="contact-card">
          <h2>Contact Us</h2>
          <p className="card-subtitle">
            Sunt dapibus nibh 1 sapio, venenatis tristique sapien iaculis vel. Lorem ipsum dolor sit amet.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name*" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email*" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <select 
                name="serviceType" 
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value="" disabled hidden>Service Type</option>
                <option value="plumbing">Plumbing</option>
                <option value="repair">Pipe Repair</option>
                <option value="installation">Installation</option>
              </select>
            </div>

            <div className="form-group">
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone No" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="yellow-btn form-btn">
              Get A Quote
            </button>
          </form>
        </div> 
    
        </div>
    </section>
   )
}
export default HeroContent;