import logo from "../assets/ph_framer-logo.svg";
const LowerFooterCard = () => {
  return (
    <>
      <footer className="text-gray-600 body-font flex w-[80%] flex-col justify-center">
        <div className="px-5 py-24 ">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font text-gray-900 tracking-widest text-lg mb-3 font-[600]"
                style={{ fontFamily: "Mono Sans, sans-serif" }}
              >
                Work
              </h2>
              <nav className="list-none mb-10 space-y-5">
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  >
                    Family Fund
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  >
                    Unseal
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  >
                    Phobia
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  >
                    See all
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-[600] text-gray-900 tracking-widest text-lg mb-3"
                style={{ fontFamily: "Mono Sans, sans-serif" }}
              >
                Company
              </h2>
              <nav className="list-none mb-10 space-y-5">
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  >
                    Process
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  >
                    Contact us
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-[600] text-gray-900 tracking-widest text-lg mb-3"
                style={{ fontFamily: "Mono Sans, sans-serif" }}
              >
                Connect
              </h2>
              <nav className="list-none mb-10 space-y-5">
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  >
                    Dribbble
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-[600] text-gray-900 tracking-widest text-lg mb-3"
                style={{ fontFamily: "Mono Sans, sans-serif" }}
              >
                Sign up for our newsletter
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap justify-center items-end md:justify-center">
                <div className=" w-44 sm:w-auto">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-md text-gray-600 text-center md:text-left"
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  >
                    Subscribe to get the latest design news, articles, resources
                    and inspiration.
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="mt-2 outline-none w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Email Address..."
                    style={{ fontFamily: "Mono Sans, sans-serif" }}
                  />
                </div>
                <button
                  className="mt-2 flex items-center justify-center text-[2rem] text-orange-500 animate-bounce"
                  style={{ fontFamily: "Mono Sans, sans-serif" }}
                >
                  <span> →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.1rem] bg-black"></div>
        <div className="">
          <div className="container px-5 py-6 mx-auto flex justify-between items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src={logo} alt="logo" />
              <span
                className="ml-3 text-xl font-[600]"
                style={{ fontFamily: "Mono Sans, sans-serif" }}
              >
                Ecommerce App
              </span>
            </a>
            <p
              className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4"
              style={{ fontFamily: "Mono Sans, sans-serif" }}
            >
              © Ecommerce Agency Inc. 2023
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LowerFooterCard;
