import React from 'react';
import Layout from '../components/Layout/Layout.js';


export const Policies = () => {
  return (
    <Layout>
        <div className="row contactus justify-content-center align-items-center">
        <div className="col-md-6">
          <img
            src="/images/Policy.jpg"
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 mt-4 text-center">
          <p className="text-justify mt-2">
            <p><b>Privacy Policy : </b>

This policy should explain how you collect, use, and protect customers' personal data. Include information about cookies, third parties, data security, and how customers can access, update, or delete their information.</p>
          </p>

          <p><b> Terms of Use:</b>

Terms of Use lay out the rules and expectations for visitors and customers of your website. This includes information about user rights and responsibilities, usage restrictions, and account termination.</p>

<p><b>Return and Refund Policy:</b>

This policy outlines the conditions under which customers can return products, request refunds or exchanges. Include information on timeframes, eligible products, return fees, and more.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policies;
