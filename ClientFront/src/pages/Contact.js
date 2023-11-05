import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/ContactUs.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-white p-2 text-dark text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Fell Free to contacy us by email or by phone 24/24H and 7d/7d
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.website.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0693936698
          </p>
          <p className="mt-3">
            <BiSupport /> : 1000-0000-1234 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;