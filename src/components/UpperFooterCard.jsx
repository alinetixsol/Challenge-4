import Button from "./Button";

const UpperFooterCard = () => {
  return (
    <div className="bg-black text-white  rounded-md flex flex-col items-center py-8 w-[80%]">
      <div className="w-[80%] flex flex-col items-center md:items-start text-center md:text-left justify-center md:justify-start ">
        <div className="my-8 space-y-7">
          <h1
            className="text-3xl"
            style={{ fontFamily: "Mono Sans, sans-serif" }}
          >
            Tell Us About Your Project
          </h1>
          <div>
            <button
              className="bg-white
             text-black px-[1rem] py-[0.3rem] rounded-full font-[600] hover:bg-green-500 hover:border-black duration-700 hover:shadow-xl"
            >
              Say Hej
            </button>
          </div>
        </div>
        <div className="w-full h-[0.1rem] bg-white"></div>
        <div className="flex flex-col w-full my-4">
          <div className="text-2xl font-bold my-4">Our Offices</div>
          <div className="flex justify-between md:flex-row flex-col space-y-4 md:space-y-0">
            <div>
              <div
                className="text-white
                     font-semibold mb-2"
              >
                Copenhagen
              </div>
              <div>1 Carlsberg Gate</div>
              <div>1260, København, Denmark</div>
            </div>
            <div>
              <div
                className="text-white
                     font-semibold mb-2"
              >
                Billund
              </div>
              <div>24 Lego Allé</div>
              <div>7190, Billund, Denmark</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperFooterCard;
