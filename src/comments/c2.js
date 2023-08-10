import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [activeButton, setActiveButton] = useState(null);
  

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  }; 

  
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="navbar-brand ml-auto">
    <img src={require('../assest/logo1.jpeg')} alt="Description of the image" style={{ float: 'right', height: '30px', width: "50px", marginLeft: "20px" }} />
  </div>
  <div class="collapse navbar-collapse" id="navbarNav" style={{ marginLeft: "1100px" }}>
    <ul class="navbar-nav ml-auto">
      <li class={`nav-item ${activeButton === 'contact' ? 'active' : ''}`}>
        <a class="nav-link" href="#" onClick={() => handleButtonClick('contact')}>Contact</a>
      </li>
      <li class={`nav-item ${activeButton === 'story' ? 'active' : ''}`}>
        <a class="nav-link" href="#" onClick={() => handleButtonClick('story')}>Our Story</a>
      </li>
    </ul>
  </div>
</nav>


     
     
      <h1 style={{textAlign : "center" ,paddingTop:"50px"}}>Contact Us</h1>
      <p className='ex'>wanna know more about us?</p><br/>
     
      <div className='flex'>
      <form onSubmit={handleSubmit}>
      <div className='bb'>
      <div className="box right-box">
        
        <p>To connect with us:</p>
        <p style={{fontWeight:"bold"}}>Sales manager
</p>
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span className="info">9178458-9958O</span>
      
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span className="info" >info@adecincom.com</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          <span className="info" color='blueviolet'> 9178458-9958O</span>
      </div>
      </div>
      </div><br/>
      <div className="box left-box">
        
        <p>To connect with us:</p>
        <p style={{fontWeight:"bold"}}>Business associate
</p>
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span className="info">9178458-9958O</span>
      
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span className="info" >info@adecincom.com</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          <span className="info" color='blueviolet'> 9178458-9958O</span>
      </div>
      </div>
      
        <div className='containerbox'>
          <div className='flex1'>
          
            <h3>Schedule a call for more info</h3>
          <form onSubmit={handleSubmit}>
        <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '8px', marginRight: '10px' }}
            placeholder="Enter your email"
            required
          />
            <div style={{marginTop:"25px"}}>
          <input
          type='name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
          placeholder="Enter your name"
          required
          />
          </div>
          <div style={{marginTop:"25px"}}>
      <label htmlFor="date"></label>
      <input
        type="text"
        id="date"
        value={Date}
        pattern="\d{1,2}/\d{1,2}/\d{4}"
        placeholder="dd/mm/yyyy"
        required
      />
      <label htmlFor="time"></label>
      <select id="time" required>
        <option value="">Select Time</option>
        <option value="08:00">08:00 AM</option>
        <option value="12:00">12:00 PM</option>
        <option value="18:00">06:00 PM</option>
      </select> 
    </div>
          <button type="submit" style={{ padding: "15px", alignItems:"center", marginLeft:"50px", marginTop:"25px",backgroundColor:"blueviolet" , color:"white"}}>Submit</button>
      </form></div>
      </div>
      </form>
      </div>
      <br/>
      <h4 style={{marginRight:"1300px",fontSize:"25px"}}>FAQs</h4><br/>
      
      <div className='dd'>
      <select className="white-background">
        <option>I WHAT SERVICES DOES ADEC INFOCOMM OFFER ? </option>
        
      </select>
      
    </div>
    <div className="colored-paragraph">
    <p style={{overflowWrap:"break-word", flex:"1"}
  }> 2.ADEC Infocomm offers a comprehensive range of services from Data Analytics to digital marketing solution</p>
    </div>
    <div>
      <select className="white-background">
        <option>3. WHAT IS THE ROLE OF DATA MANAGEMENT IN BUSINESS?</option>
        
      </select>
      
    </div><br/>
   
<br/>
<footer style={{ backgroundColor: 'blueviolet', color: 'white', padding: '20px',  marginbottom:"100px" ,width:"100%", position:"absolute"}}>
      <span style={{  padding:"1000px" }}>
      <div>
          <span style={{ float: 'left' }}>
            <h3 style={{ overflowWrap: 'break-word', width: '500px' }}>Enter your Email here and get updated about our latest news and activities</h3>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '8px', marginRight: '10px' }}
            />
            <button
              type="submit"
              style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer'}}
            >
              Submit
            </button>
          </span>
        </div>
        <div className='container3'>
        <div className="column">
        <span style={{ float: ' left', padding: '10' , Textalign: "center" ,marginLeft:"250px"}}>
          <h4 >
            Links</h4>
          <p>Our Story</p>
          <p>Solution</p>
          <p>Contact</p>
        </span>
      </div>
      <div className="column">
        <span className="content">
          <h3 style={{marginLeft:"20px"}}>Contact Information:</h3>
          <p>Email: ABEC@example.com</p>
          <p>Phone: +1 123-456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>

        </span>

      </div>
      </div>
        <br/>
       <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100px'  }}>
          &copy; {new Date().getFullYear()} ABEC. All rights reserved.
        </p><br/> 
        </span>
      </footer>
    </div>
  );
};

export default ContactPage;