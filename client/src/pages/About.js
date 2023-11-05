import React from 'react';
import Layout from '../components/Layout/Layout.js';

const About = () => {
  return (
    <Layout title={"About us - My Shop"}>
      <div className="row contactus justify-content-center align-items-center">
        <div className="col-md-6">
          <img
            src="/images/about.jpg"
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 mt-4 text-center">
          <p className="text-justify mt-2">
          Welcome to My Shop, your favorite sweet destination! Since 2023, we have been working 
          tirelessly to brighten your days with our delicious confections. 
          Our dedicated team is driven by a shared passion for sweets.
           We believe in the magic that a good dose of sweetness can bring to everyone's life. 
           Whether you're a fan of candies, chocolates, cakes, or cookies, our wide range of products 
           offers something for every palate. We are constantly on the lookout for new flavors and ideas 
           to provide you with unique taste experiences. Join us on our sweet journey and discover the
            wonderful world of confections at My Shop.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
