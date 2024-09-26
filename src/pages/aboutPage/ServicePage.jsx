import people from "../../assets/shake_hand.png";
import fAQ from "../../assets/FAQ.png";
import businessGrowing from "../../assets/bussinessGrowing.png";
import callIcon from "../../assets/call_icon.png";
import searchIcon from "../../assets/faqandsearch.png";
import technicalIcon from "../../assets/techSupport.png";
import getInTouchIcon from "../../assets/message copy.png";
export function Service() {
  return (
    <>
      <section className="relative dark:text-white dark:bg-gray-900">
        <img
          alt="Two people shaking hands"
          className="object-cover w-full h-120"
          height="600"
          src={people}
          width="1920"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text text-transparent font-[Poppins]">
            TechDeals
          </h2>
        </div>
      </section>
      <section class="text-center py-12 bg-white dark:bg-gray-900 dark:border-gray-700">
        <h2 className="text-4xl font-bold dark:text-white">
          <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text">
            {" "}
            Our Business Services
          </span>
        </h2>
        <div class="flex flex-wrap justify-center mt-8 space-x-0 md:space-x-8">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            class=" p-6 rounded-lg shadow-lg border m-4 w-full md:w-1/3 lg:w-1/4 dark:bg-gray-900 dark:border-gray-600"
          >
            <img
              alt="Technical Support Icon"
              class="mx-auto mb-4"
              height="100"
              src={technicalIcon}
              width="100"
            />
            <h3 class="text-xl font-semibold dark:text-white">
              Technical Support
            </h3>
            <p class="mt-2  dark:text-white">Get help from our experts</p>
            <button class="text-white m-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
              Read More
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            class=" p-6 rounded-lg border shadow-lg mx-4 w-full md:w-1/3 lg:w-1/4 dark:bg-gray-900 dark:border-gray-600"
          >
            <img
              alt="FAQ Icon"
              class="mx-auto mb-4"
              height="100"
              src={fAQ}
              width="100"
            />
            <h3 class="text-xl font-semibold dark:text-white">FAQ</h3>
            <p class="mt-2  dark:text-white">
              Find answers to common questions
            </p>
            <button class="text-white m-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
              Read More
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            class=" p-6 rounded-lg shadow-lg m-4  w-full md:w-1/3 lg:w-1/4 border dark:bg-gray-900 dark:border-gray-600"
          >
            <img
              alt="Business Growing Icon"
              class="mx-auto mb-4"
              height="100"
              src={businessGrowing}
              width="100"
            />
            <h3 class="text-xl font-semibold dark:text-white">
              Business Growing
            </h3>
            <p class="mt-2  dark:text-white">Expand your business with us</p>
            <button class="text-white m-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
              Read More
            </button>
          </div>
        </div>
      </section>
      <section id="support" class="py-12 dark:bg-gray-900 dark:border-gray-700">
        <div class="container mx-auto text-center">
          <h2 class="text-4xl font-bold dark:text-white">
            <span class="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text">
              Contact Our Support Team
            </span>
          </h2>
          <div class="flex flex-col items-center mt-8 space-y-8 md:flex-row md:space-x-8 md:space-y-0 w-full px-4">
            <div class="w-full md:w-1/3 text-left">
              <div class="p-5">
                <div class="flex items-center gap-3">
                  <img
                    class="w-10"
                    src="http://dealkh-api.istad.co:80/images/e486a0c5-5a1c-4a72-a921-12b337f37b00.png"
                    alt="call-icon"
                  />
                  <h3 class="text-xl font-bold dark:text-white">Call Us</h3>
                </div>
                <p class="mt-2 dark:text-white">
                  Reach us at 1-800-123-4567 for immediate support.
                </p>
              </div>
              <div className="p-5">
                <div class="flex items-center gap-3">
                  <img
                    class="w-10"
                    src="http://dealkh-api.istad.co:80/images/fd8acae1-8959-40e0-9291-98fd0f4ab6f8.png"
                    alt="message-icon"
                  />
                  <h3 class="text-xl font-bold dark:text-white">
                    Get In Touch
                  </h3>
                </div>
                <p class="mt-2 dark:text-white">
                  Email us at support@techdeals.com or fill out the form.
                </p>
              </div>
            </div>
            <div class="w-full md:w-2/3 mt-5">
              <form class="p-6 rounded-lg shadow-lg border sm:mx-2 dark:border-gray-600">
                <div class="flex flex-col md:flex-row mb-4 space-y-4 md:space-y-0 md:space-x-4">
                  <input
                    class="w-full md:w-1/3 p-2 bg-transparent border border-gray-300 rounded"
                    placeholder="Enter your Name"
                    type="text"
                  />
                  <input
                    class="w-full md:w-1/3 p-2 bg-transparent border border-gray-300 rounded"
                    placeholder="Enter your Email"
                    type="email"
                  />
                  <input
                    class="w-full md:w-1/3 p-2 bg-transparent border border-gray-300 rounded"
                    placeholder="Enter your Phone Number"
                    type="text"
                  />
                </div>
                <textarea
                  class="w-full h-32 p-2 bg-transparent border border-gray-300 rounded"
                  placeholder="Write your message here..."
                ></textarea>
                <button class="text-white m-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 " id="question">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text">
            Frequently Ask Question
          </h2>
          <div className="flex flex-col items-center justify-around p-6 mt-2 rounded-lg shadow-lg md:flex-row">
            <div className="flex items-center mb-4 ">
              <img
                alt="FAQ Icon"
                className="mr-4 w-1000 h-100"
                height="100"
                src={searchIcon}
              />
            </div>
            <div className="text-left">
              <div className="mb-4 border-b dark:border-b-gray-600">
                <h4 className="text-lg font-bold dark:text-white">
                  What is the warranty period for the computers you sell?
                </h4>
                <p className="mt-2 mb-2  dark:text-white">
                  We offer a one-year warranty on all computers sold.
                </p>
              </div>
              <div className="mb-4 border-b dark:border-b-gray-600">
                <h4 className="text-lg font-bold dark:text-white">
                  Do you offer free shipping, and how long does delivery take?
                </h4>
                <p className="mt-2 mb-2  dark:text-white">
                  Yes, we offer free shipping. Delivery typically takes 3-5
                  business days.
                </p>
              </div>
              <div className="mb-4 border-b dark:border-b-gray-600">
                <h4 className="text-lg font-bold dark:text-white">
                  Can I upgrade the components (RAM, storage) of the computers?
                </h4>
                <p className="mt-2 mb-2  dark:text-white">
                  Yes, you can upgrade the components. Please contact support
                  for assistance.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold dark:text-white">
                  Do you offer financing options for purchasing a computer?
                </h4>
                <p className="mt-2  dark:text-white">
                  Yes, we offer financing options. Please visit our financing
                  page for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
