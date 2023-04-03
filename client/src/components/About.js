import React from "react";
import "../index.css";


function About() {
  return (
    <div className="home">
       <div id="about" className="about-page">
      <h1 className="about-heading">About Our community</h1>
      <div className="card mission-card">
        <img src="src/components/image/office.jpg" alt="Mission" />
        <div className="card-content">
          <h2>Our Mission</h2>
          <p>
            Our mission ist to help one another in the achievement of our goals
             as we focus on our community goal such as  enforcing unity amongest ourselves,
             giving loans to Members to enable the do their businesses , pay school fees and 
             also caring out of other economic activities to get their lives moving,
             our goal also seeks to help needy cases to keep them going in their endevours through 
          </p>
        </div>
      </div>

      <div className="card openness-card">
        <img src="src/components/image/openn.png" alt="Openness" />
        <div className="card-content">
          <h2>Our Commitment to Openness</h2>
          <p>
            We believe in transparency and honesty with our Members. We will
            always provide clear and accurate information in any of our activities, 
            and answer any questions you may   have.
          </p>
        </div>
      </div>

      <div className="card professionalism-card">
        <img src="src/components/image/prof.jpeg" alt="Professionalism" />
        <div className="card-content">
          <h2>Our Commitment to Professionalism</h2>
          <p>
            Our team  also target on the creation of employment to
             our members through community projects that we will
            be caring out and also dedicated on helping the 
            community members achieve their professional goals
            
          </p>
        </div>
      </div>

      <div className="card care-card">
        <img src="src/components/image/care.jpg" alt="Care" />
        <div className="card-content">
          <h2>Our Commitment to Care</h2>
          <p>
            We understand  what it means by lifting each other, 
            moving together as the society  seeking to reduce the finacial gaps 
            alongside building a united family, and will always go above
            and beyond to ensure their well-being.

          </p>
        </div>
      </div>
    </div>

    </div>
   
  );
}

export default About;





// import React from "react";
// function About (){
//     return (
//         <div>
//       <div className="about">
//         <h2>About Us</h2>
//         <p>We are a nonprofit group dedicated to supporting each other in our community. Our mission is to help each other achieve their dream alongside achieving our community general goals.</p>
//         <p>With supporting each other , we achieve as others in the community achieves too, through this we  improve the lives of our  people alongside building a big family .</p>
//       </div>
//         </div>
//     );
// }
