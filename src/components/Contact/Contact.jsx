import React, { useState } from "react";
import contact from "../../assets/images/contact-us.jpg";
import BackgroundImage from "../LandingPage";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { LuNavigation } from "react-icons/lu";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Access the state variables (name, phone, email, message) here
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);
    // You can send the data to your backend or perform any other actions here
  };

  return (
    <div>
      <BackgroundImage imageUrl={contact} text="Contact Us" />
      <div className="max-w-5xl mx-auto mb-16 mt-12">
        <div className="lg:flex shadow-md ">
          <div className="lg:w-1/2 w-full space-y-8 px-6 mt-16">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="w-[40px] h-[40px] text-[#e46601]" />
              <div>
                <h2 className="font-bold">Location</h2>
                <p>22 Baker Street, London, United Kingdom, W1U 3BW</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsFillTelephonePlusFill className="w-[40px] h-[40px] text-[#e46601]" />
              <div>
                <h2 className="font-bold">Make a Call</h2>
                <p>+44-20-7328-4499</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdMarkEmailRead className="w-[40px] h-[40px] text-[#e46601]" />
              <div>
                <h2 className="font-bold">Send a Mail</h2>
                <p>info@yourdomain.com</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full py-6 ">
            <form onSubmit={handleSendMessage}>
              <div className="px-4 space-y-6">
                <h2>Need Help</h2>
                <h1 className="font-bold text-3xl">Keep in Touch</h1>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full border-0 outline-none border-b pb-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="flex gap-3">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    className="w-full border-0 outline-none border-b pb-2"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border-0 outline-none border-b pb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Type here"
                  className="w-full h-[80px] border-0 outline-none border-b pb-4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  type="submit" // Specify button type as "submit" to trigger form submission
                  className="bg-custom-button flex items-center gap-3 py-3 px-6 font-bold text-white rounded-md"
                >
                  SEND MESSAGE
                  <LuNavigation />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
