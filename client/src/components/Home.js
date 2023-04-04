// import { color } from '@mui/system';
import { Nav } from 'react-bootstrap';
import '../App.css';
import Footer from './Footer';

function Home() {
  return(
    <section className='home-p'>
    <div className="content" style={{  height: '30%', width: '40%',position: "absolute", marginTop: "5%", marginLeft: "2%", fontSize: "160px",color: "#fff", fontWeight: "600"}}>
         <h1 style={{ textAlign:'center',fontStyle: "italic", fontSize: "160px",fontWeight: "600"}}>Shiyabo Community</h1>

         <Nav.Link style={{ textDecoration: "none",display: "inline-block", color: "#fff", fontSize: "24px", border: "2px solid #fff", padding: "14px 70px", borderRadius: "50px", marginTop: ""}} href="/Join">"Join a group"</Nav.Link>
    </div>
  
    <div>
        
        <img className ="backVideo" style={{ width: '100%', height: '100%' }} src = "https://media.istockphoto.com/id/1248064953/photo/top-view-aerial-with-from-flying-drone-over-residential-district-development-buildings.jpg?b=1&s=170667a&w=0&k=20&c=4HCRvurLYSqM1niNb4lQYf9BO9xpeT02jEoZwhG1_F4="  alt=''></img>
        
     
      
        
    </div>
    
    <style jsx>
     {`
     h1:hover{-webkit-text-stroke:2px #fff;color:transparent;
    }
     `}
    </style>
    <div>
    </div>
    <Footer/>

    <footer>
        <div class="row">
            <div class="col-full">
                    
            </div>
        </div>

        <div class="row footer-bottom">

            <div class="col-twelve">
                <div class="copyright" >
                    
                    <span >© Copyright Shiyabo Community</span> 
               
                <div class="go-top">
                <a class="smoothscroll" title="Back to Top" href="#top"><i class="im im-arrow-up" aria-hidden="true"></i></a>
                </div>
            </div>
            </div>

        </div>

    </footer> 

  </section>
)
}

export default Home

