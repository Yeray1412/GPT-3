import { ProfileImgs } from "@/components";

const imgs = [
  {
    id: 1,
    imgUrl: "./profile1.png",
  },
  {
    id: 2,
    imgUrl: "./profile2.png",
  },
  {
    id: 3,
    imgUrl: "./profile3.png",
  },
  {
    id: 4,
    imgUrl: "./profile4.png",
  },
  {
    id: 5,
    imgUrl: "./profile5.png",
  },
  {
    id: 6,
    imgUrl: "./profile6.png",
  },
  {
    id: 7,
    imgUrl: "./profile7.png",
  },
];

const Hero = () => {
  return (
    <div className="flex relative z-10" id="home">
      <div className="container flex flex-wrap">
        <div className="basis-[50%] grow pt-0 lg:pt-[50px]">
          <h1 className="text-[36px] md:text-[62px] font-bold gradient-text leading-[45px] md:leading-[75px] tracking-[-2px]">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="my-[20px] lg:my-[40px] text-[14px] md:text-base max-w-[554px] font-light text-[#81AFDD]">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="flex justify-center md:items-start flex-wrap md:flex-nowrap">
            <input
              type="email"
              className="bg-[#052D56] grow p-[20px] mb-5 rounded-md md:rounded-tr-none md:rounded-br-none basis-[80%]"
            />
            <button
              type="button"
              className="py-[14px] px-[18px] whitespace-nowrap text-[16px] md:text-base md:py-[20px] md:px-[35px] bg-orange rounded-md md:rounded-s-none basis-[30%]"
            >
              Get Started
            </button>
          </div>
          <div className="flex gap-[15px] flex-col md:flex-row items-center py-[40px]">
            <div className="imgs flex">
              {imgs.map((img) => {
                return <ProfileImgs key={img.id} {...img} />;
              })}
            </div>
            <p className="text-[12px] text-center font-semibold ml-[15px]">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
        <div className="basis-[50%] grow">
          <img
            src="./face.png"
            className="object-contain w-full h-full"
            alt="face"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
