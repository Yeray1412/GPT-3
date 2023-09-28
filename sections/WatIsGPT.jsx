import { Features } from "@/components";

const features = [
  {
    id: 1,
    head: "Chatbots",
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
  },
  {
    id: 2,
    head: "Knowledgebase",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  },
  {
    id: 3,
    head: "Education",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  },
];

const WatIsGPT = () => {
  return (
    <div className="relative z-10" id="watIsGPT">
      <div className="container">
        <div className="bg-[#042C54] flex flex-col gap-[70px] md:gap-[90px] overflow-hidden sec-shadow p-10 md:p-16">
          <div className="gradient-wIsGPT-3-1 top-0 left-0 translate-y-[-98%] translate-x-[-95%]" />
          <div className="gradient-wIsGPT-3-1 bottom-0 right-0 translate-y-[75%] translate-x-[75%]" />
          <div className="flex flex-col justify-between z-10 gap-[50px] md:gap-[100px] w-full md:flex-row md:text-start">
            <h1 className="spec text-[22px] md:text-[24px] basis-[40%] before:left-0 before:translate-x-0">
              What is GPT-3
            </h1>
            <p className="text-[#81AFDD] text-[14px] leading-[25px] md:text-base md:leading-[30px]">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
          <div className="flex flex-col justify-between z-10 md:flex-row">
            <h1 className="gradient-text basis-[45%] text-[28px] md:text-[34px] leading-[35px] md:leading-[45px] font-bold mb-4 md:mb-0">
              The possibilities are beyond your imagination
            </h1>
            <p className="text-[#FF8A71] text-[14px] md:text-base">
              Explore The Library
            </p>
          </div>
          <div className="flex flex-col md:flex-row z-10 gap-16 md:gap-10">
            {features.map((features) => {
              return (
                <Features
                  key={features.id}
                  {...features}
                  style="flex-col gap-[20px] md:gap-[25px]"
                  textSize="text-[22px] md:text-[24px]"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WatIsGPT;
