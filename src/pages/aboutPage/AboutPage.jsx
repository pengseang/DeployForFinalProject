import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

export function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className="container py-1 mx-auto dark:text-white">
        {/* <h1 className="mb-4 text-4xl font-bold text-center">
          About Tech-Deals Electronics Shop
        </h1>  */}
        {/* <!-- section 1 --> */}
        <section className="flex p-3 mb-12 w-[80%] m-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:w-1/2 " data-aos="fade-right">
              <h2 className="mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text font-[Poppins]">
                TechDeals
              </h2>
              <p className="mb-4 text-lg text-gray-500 dark:text-white">
                Welcome to TechDeals. We are passionate about technology and
                dedicated to bringing you the latest and greatest in electronic
                devices, from sleek smartphones and innovative gadgets to high-
                performance computers and home entertainment systems.
              </p>
              <Link to="/">
                <button className="text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="p-4 mt-8 md:w-1/2" data-aos="fade-up">
              <img
                alt="Illustration of a person shopping online with a 50% off discount on electronics"
                className="w-full mx-auto "
                src="https://english-api.cstad.shop/files/87c24959-4cde-4667-960a-2c9ab1cb4fd3.svg"
                width="800"
                height="900"
              />
            </div>
          </div>
        </section>

        {/* secton2 history*/}
        <section className="flex flex-col-reverse md:flex-row p-5 mb-12 w-[80%] m-auto">
          <div className="flex flex-col-reverse md:flex-row items-center">
            {/* Image on the left for larger screens */}
            <div
              className="p-4 mt-8 md:w-1/2 md:order-first"
              data-aos="fade-up"
            >
              <img
                alt="Illustration of a person shopping online with a 50% off discount on electronics"
                className="w-full mx-auto"
                src="https://english-api.cstad.shop/files/e336ede6-e90f-4474-9675-e15217a88dcc.svg"
                width="800"
                height="900"
              />
            </div>

            {/* Text section */}
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text font-[Poppins]">
                History
              </h2>
              <p className="mb-4 text-lg text-gray-500 dark:text-white">
                TechTrends Electronics has created in 2024. Our journey began
                with a simple mission: to deliver high-quality, reliable
                technology solutions to individuals and businesses across the
                country for customer.
              </p>
            </div>
          </div>
        </section>

        {/* section mission */}
        <section className="flex p-3 mb-12 w-[80%] m-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:w-1/2 " data-aos="fade-right">
              <h2 className="mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text font-[Poppins]">
                Mission
              </h2>
              <p className="mb-4 text-lg text-gray-500 dark:text-white">
                We enable business transformation and enrichment of lives by
                delivering sustainable world className technology products,
                solutions and services in our chosen markets thereby creating
                superior shareholder.
              </p>
            </div>
            <div className="p-4 mt-8 md:w-1/2" data-aos="fade-up">
              <img
                alt="Illustration of a person shopping online with a 50% off discount on electronics"
                className="w-full mx-auto "
                src="https://english-api.cstad.shop/files/bb287e48-ce34-4286-ab27-769ac207085c.svg"
                width="800"
                height="900"
              />
            </div>
          </div>
        </section>

        {/* secction Verson */}

        <section className="flex flex-col-reverse md:flex-row p-5 mb-12 w-[80%] m-auto">
          <div className="flex flex-col-reverse md:flex-row items-center">
            {/* Image on the left for larger screens */}
            <div
              className="p-4 mt-8 md:w-1/2 md:order-first"
              data-aos="fade-up"
            >
              <img
                alt="Illustration of a person shopping online with a 50% off discount on electronics"
                className="w-full mx-auto"
                src="https://english-api.cstad.shop/files/d0316474-976b-40ab-9739-15df577c9172.svg"
                width="800"
                height="900"
              />
            </div>

            {/* Text section */}
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text font-[Poppins]">
                Vision
              </h2>
              <p className="mb-4 text-lg text-gray-500 dark:text-white">
                Our e-commerce platform aims to become a leading global
                e-commerce platform that revolutionizes the online shopping
                experience by offering unparalleled convenience, exceptional
                customer service, and a diverse range of high-quality products.
              </p>
            </div>
          </div>
        </section>

        {/* <!-- end section 4 -->

   <!-- section 5 --> */}
        <section className="p-5 mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-4xl xl:text-4xl">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text">
              Sponsor
            </span>
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-1/2 md:w-2/4 xl:w-1/3">
              <img
                alt="CSTAD LOGO"
                className=" "
                height="700"
                src="http://dealkh-api.istad.co:80/images/a0d7b27d-d9e3-448f-8187-2adde2f0dea5.png"
                width="700"
              />
            </div>
          </div>
        </section>
        {/* <!-- end section 5 -->

   <!-- section 6 menter --> */}
        <section className="p-5 mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-4xl xl:text-4xl">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text">
              Mentors
            </span>
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Mentor 1"
                className="mx-auto mb-2 rounded-full"
                height="150"
                src="http://dealkh-api.istad.co:80/images/6705a2f6-dc1c-42f7-be3c-6208834a9875.png"
                width="150"
              />
              <p>Chan Chhaya</p>
              <p className="text-gray-600">TechDeals Mentor</p>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Mentor 2"
                className="mx-auto mb-2 rounded-full object-fit"
                height="150"
                src="http://dealkh-api.istad.co:80/images/778985f6-9a66-4a99-9712-e7613da51628.jpg"
                width="150"
              />
              <p>Kim Chansokpheng</p>
              <p className="text-gray-600">TechDeals Mentor</p>
            </div>
          </div>
        </section>
        {/* <!-- end section 6 -->

   <!-- section 7 member --> */}
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-4xl xl:text-4xl">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text">
              Team Members
            </span>
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Team Member 1"
                className="mx-auto mb-2 rounded-full"
                height="150"
                src="http://dealkh-api.istad.co:80/images/d38721b8-3c59-4bf9-85cb-e4a9e1ed9b08.png"
                width="150"
              />
              <p>Sim Pengseang</p>
              <p className="text-gray-600">Group Leader</p>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Team Member 2"
                className="object-cover mx-auto mb-2 rounded-full"
                height="150"
                src="http://dealkh-api.istad.co:80/images/defb730d-4c4c-4eac-9cbc-195d716673f1.png"
                width="150"
              />
              <p>Leng Narak</p>
              <p className="text-gray-600">Team Member</p>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Team Member 3"
                className="mx-auto mb-2 rounded-full"
                height="150"
                src="http://dealkh-api.istad.co:80/images/92c4ea68-5574-49cc-a2de-d73943de28bd.png"
                width="150"
              />
              <p>Ean Sokheng</p>
              <p className="text-gray-600">Team Member</p>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Team Member 4"
                className="mx-auto mb-2 rounded-full"
                height="150"
                src="http://dealkh-api.istad.co:80/images/68191f27-3345-4058-b864-63770d2a984a.png"
                width="150"
              />
              <p>Tourn Vuthy</p>
              <p className="text-gray-600">Team Member</p>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Team Member 5"
                className="mx-auto mb-2 rounded-full"
                height="150"
                src="http://dealkh-api.istad.co:80/images/31df9ac8-273a-4973-8993-202540c03257.png"
                width="150"
              />
              <p>Sri Narin</p>
              <p className="text-gray-600">Team Member</p>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Team Member 6"
                className="mx-auto mb-2 rounded-full"
                height="150"
                src="http://dealkh-api.istad.co:80/images/d4b1e15c-f166-40be-804e-6d0bd59c0a46.png"
                width="150"
              />
              <p>Gony Rida</p>
              <p className="text-gray-600">Team Member</p>
            </div>
            <div className="w-1/2 p-4 md:w-1/4 ">
              <img
                alt="Team Member 7"
                className="mx-auto mb-2 rounded-full"
                height="150"
                width="150"
                src="http://dealkh-api.istad.co:80/images/fa59d1aa-c0e7-4d80-9165-d7fe35ddf633.png"
              />
              <p>Lim Ansoleaphea</p>
              <p className="text-gray-600">Team Member</p>
            </div>
          </div>
        </section>
        <section className="mb-12 text-center justify-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-4xl xl:text-4xl">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text">
              Office
            </span>
          </h2>
          <p>#562B, St 562, Boeung Kok, Toul Kork, Phnom Penh</p>
          <div className="flex justify-center  mt-4">
            <div className="relative w-[1200px] pb-[45.25%]">
              {/* 16:9 aspect ratio */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.631478132765!2d104.89921187406799!3d11.57825458862352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1sen!2skh!4v1727342224298!5m2!1sen!2skh"
                className="absolute top-0 left-0 w-full h-[450px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
