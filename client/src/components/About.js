import React from "react";
import "../index.css";


function About() {
  return (
    <div id="about" className="about-page">
      <h1 className="about-heading">About Our Veterinary Service</h1>
      <div className="card mission-card">
        <img src="src/components/image/office.jpg" alt="Mission" />
        <div className="card-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide the highest quality veterinary care to
            pets and their owners in a compassionate and supportive environment.
            We strive to offer personalized care that meets the individual needs
            of each pet and their family.
          </p>
        </div>
      </div>

      <div className="card openness-card">
        <img src="src/components/image/openn.png" alt="Openness" />
        <div className="card-content">
          <h2>Our Commitment to Openness</h2>
          <p>
            We believe in transparency and honesty with our clients. We will
            always provide clear and accurate information about your pet's
            condition and treatment options, and answer any questions you may
            have.
          </p>
        </div>
      </div>

      <div className="card professionalism-card">
        <img src="src/components/image/prof.jpeg" alt="Professionalism" />
        <div className="card-content">
          <h2>Our Commitment to Professionalism</h2>
          <p>
            Our team of veterinary professionals is dedicated to providing the
            highest quality care to your pet. We are committed to staying
            up-to-date with the latest advances in veterinary medicine, and
            using the most advanced technology to provide the best possible
            care.
          </p>
        </div>
      </div>

      <div className="card care-card">
        <img src="src/components/image/care.jpg" alt="Care" />
        <div className="card-content">
          <h2>Our Commitment to Care</h2>
          <p>
            We understand how much your pet means to you, and we are committed
            to providing the best possible care to keep them healthy and happy.
            We treat each pet as if they were our own, and will always go above
            and beyond to ensure their well-being.
          </p>
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
