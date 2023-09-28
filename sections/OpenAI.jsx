import { Features } from "@/components";

const features = [
  {
    id: 1,
    head: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    id: 2,
    head: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    id: 3,
    head: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    id: 4,
    head: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];

const OpenAI = () => {
  return (
    <div className="relative">
      <div className="container">
        <div className="gradient-future left-0 top-0 translate-x-[-75%]" />
        <div className="flex flex-col md:flex-row gap-[100px] pt-[170px] z-10">
          <div className="text-center md:text-start z-10">
            <h1 className="gradient-text text-[28px] inline-block md:block md:text-[34px] font-bold leading-[35px] md:leading-[40px] mb-[35px] max-w-[525px]">
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </h1>
            <p className="text-[#FF8A71] text-[14px] md:text-base">
              Request Early Access to Get Started
            </p>
          </div>
          <div className="flex flex-col gap-[60px] p-5">
            {features.map((feature) => {
              return (
                <Features
                  key={feature.id}
                  {...feature}
                  style="flex-row md:gap-[70px] gap-[45px] flex-col md:flex-row"
                  textSize="text-[16px] md:text-[18px]"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default OpenAI;
