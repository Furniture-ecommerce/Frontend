import { Banner } from "@components/Banner";
import { Card } from "@components/Card";
import React from "react";

const iconsC = [
  {
    id: 1,
    name: "ADDRESS",
    image: "/assets/icons/store.png",
    description: "234 Hai Trieu, Ho Chi Minh City, Viet Nam",
  },
  {
    id: 2,
    name: "CONTACT US",
    image: "/assets/icons/phone.png",
    description: "+84 234 567 890",
  },
  {
    id: 3,
    name: "EMAIL",
    image: "/assets/icons/email.png",
    description: "hello@3legant.com",
  },
];

const icons = [
  {
    id: 1,
    name: "Free Shipping",
    image: "/assets/icons/ship.png",
    description: "Order above $200",
  },
  {
    id: 2,
    name: "Money Back",
    image: "/assets/icons/money.png",
    description: "30 days guarantee",
  },
  {
    id: 3,
    name: "Secure Payements",
    image: "/assets/icons/lock.png",
    description: "Secured by stripe",
  },
  {
    id: 4,
    name: "24/7 Support",
    image: "/assets/icons/phone.png",
    description: "Phone and email support",
  },
];

const ContactUs = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl">
        <div className="w-[65%] mb-12">
          <h1 className="text-6xl mb-5">
            We believe in sustainable decor. We’re passionate about life at
            home.
          </h1>
          <p>
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations, faithful to the shapes of each period, with a touch
            of the present
          </p>
        </div>
        <div>
          <Banner
            title="About Us"
            desc={
              <>
                3legant is a gift & decorations store based in HCMC, Vietnam.
                Est since 2019.
                <br />
                Our customer service is always prepared to support you 24/7
              </>
            }
            sale=""
          />
        </div>
        <div>
          <div className="my-10 flex items-center justify-center">
            <div className="text-5xl">
              <b className="text-center">Contact Us</b>
            </div>
          </div>
        </div>
        <div className="flex">
          {iconsC.map((icon) => (
            <Card key={icon.id} icon={icon} />
          ))}
        </div>
        <div className="mb-16 flex flex-col md:flex-row">
          {/* left */}
          <div className="md:flex-1 p-4">
            <form className="mb-4">
              <div className="mb-4">
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700"
                >
                  FULL NAME:
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="mt-1 p-2 border border-black bg-white rounded-md w-full"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="eaddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  EMAIL ADDRESS:
                </label>
                <input
                  type="email"
                  id="eaddress"
                  name="eaddress"
                  className="mt-1 p-2 border border-black bg-white rounded-md w-full"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  MESSAGE:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  className="mt-1 p-2 border border-black bg-white rounded-md w-full"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="button"
                className="bg-black text-white px-4 py-2 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* right */}
          <div className="md:flex-1 p-4">
            {/* Gantilah dengan komponen peta yang sesuai */}
            <div className="h-[100%] aspect-w-16 aspect-h-9 bg-gray-300 rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63221.773103590764!2d111.03545650523834!3d-7.96161301215064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bd565c2fc52e9%3A0x4027a76e3530010!2sKec.%20Tirtomoyo%2C%20Kabupaten%20Wonogiri%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1707017916588!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-20 bg-neutral-200">
        {icons.map((icon) => (
          <Card key={icon.id} icon={icon} />
        ))}
      </div>
    </>
  );
};

export default ContactUs;
