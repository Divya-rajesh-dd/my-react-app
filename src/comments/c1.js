import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assest/img1.png'; 
import'../assest/img 2.png'; 
import '../assest/img 3.png';
import  '../assest/cl1.jpeg';
import'../assest/cl2.jpeg';
import'../assest/cl3.jpeg';
import './style.css';
import '../assest/logo1.jpeg';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const [email, setEmail] = useState ('');
  const [activeButton, setActiveButton] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const menuItems = ['Data analytics', 'digital marketing', 'custom software development'];
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="home-page">
      <header className="header">
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
       
      </header>
      <br/>
      <br/>
      <img
              src={require('../assest/img 2.png')} 
              alt="Description of the image"
              style={{ float: 'right', marginRight: '80px',height:'300px',width:"500px"}}
              ></img>

      <section className="about-us-section">
        <div className="container">
          <h1 style={{marginBlockEnd:"5px",padding: "20px",marginLeft:"20px"}}>We're here to</h1>
          <p style={{ fontSize: '16px', color: 'black', fontWeight: 'bold' }}>
            Establish clear and measurable goals for your business
          </p>
          <p style={{marginLeft:"65px"}}>to build a strong brand</p>
          <button
              type="explore"
              style={{ marginLeft:"100px",padding: '8px 16px', backgroundColor: 'blueviolet', color: 'white', border: 'none',borderRadius:"10px", cursor: 'pointer'}}
            >
              explore
            </button>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="space">
          <img
              src={require('../assest/img1.png')} // Use require to import the image
              alt="Description of the image"
              style={{ float: 'right', marginRight: '-20px',height:'300px',width:"580px"}}
              ></img>
            <h1 style={{marginLeft:"50px"}}>About Us</h1>
            <p style={{  marginLeft:"-30px",fontSize: '16px', color: 'black', fontStyle: 'italic' , overflowWrap: 'break-word', width: '500px' }}>
              ADEC provides tailor-made consulting solutions to help businesses navigate the intricacies of growth, build a solid trajectory, and gain a significant market share.
            </p>
            
          </div>
          <br/>
          <br/>
          <br/>
          
            <h1 style={{ textAlign : "center" ,paddingTop:"50px"}}>Do you know</h1></div>
            <p className='mm'>
            ADEC offers compensate of our one sees</p>
        

           
            <div className="color-box">
            <ul id="main-nav">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={selectedItem === index ? 'selected' : ''}
          onClick={() => handleItemClick(index)}
        >
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
    <br/>
    
            <div className="image-container">
            <img
    src={require('../assest/img 3.png')}
    alt="Description of the image"
    style={{
      float: 'right',
      marginRight: '20px',
      height: '400px',
      width: '800px',
    }}
  />
  <div className="white-box">
    
    <h2 style={{ color: 'black' }}>Unlock the Power of Data</h2>
    <span style={{  padding:"2000px" }}>
    <p
      style={{
        fontSize: '16px',
        color: 'black',
        fontStyle: 'italic',
        overflowWrap: 'break-word',
        maxWidth: '500px',
      }}
    >
      Our Data Analytics solutions enable businesses to derive valuable insights from complex data sets, facilitating data-driven decision-making.
    </p></span>
  </div>
  </div>
</div>


      <h1 style={{textAlign:"center" ,fontFamily:"bold", marginRight:'-20px'}} > Clientele</h1>
        <p className='nn'>
        Propel your Business cowards new hos with Ader
        </p>
        <br/>
        <br/>
        <div className="client-logos">
        <img src={require('../assest/cl1.jpeg')} alt="Client 1" />
        <img src={require('../assest/cl2.jpeg')} alt="Client 2" />
        <img src={require('../assest/cl3.jpeg')} alt="Client 3" />
      </div>
   <br/>
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
    
      
    </section>
    </div>
);
};
export default HomePage;
