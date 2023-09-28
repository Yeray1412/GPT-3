const CaseStudies = () => {
  return (
    <div id="case">
      <div className="container">
        <div className="relative z-10 flex flex-wrap md:flex-nowrap gap-5 md:gap-8 md:p-[40px] pb-[50px] pt-[80px] md:pt-0 md:pb-[150px]">
          <div className="basis-[50%] grow">
            <img
              src="./FeatureImage.png"
              alt="img"
              className="w-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-5 justify-end basis-[50%] grow py-[30px]">
            <p className="text-[#71E5FF] text-[14px] md:text-base">
              Request Early Access to Get Started
            </p>
            <h1 className="gradient-text text-[28px] md:text-[34px] max-w-[450px] leading-[35px] md:leading-[45px] font-bold mb-4 md:mb-0">
              The possibilities are beyond your imagination
            </h1>
            <p className="text-[#81AFDD] text-[14px] md:text-base max-w-[400px]">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <p className="text-[#FF8A71] text-[14px] md:text-base">
              Request Early Access to Get Started
            </p>
          </div>
        </div>
        <div className="p-5 gap-4 md:p-10 gradient-register flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="text-[10px] md:text-[12px] text-[#0E0E0E]">
              Request Early Access to Get Started
            </p>
            <p className="text-[18px] md:text-[24px] font-bold text-[#0E0E0E]">
              Register today & start exploring the endless possiblities.
            </p>
          </div>
          <button
            type="button"
            className="bg-[#000] rounded-[40px] px-[30px] md:px-[45px] text-[14px] md:text-[16px] py-[14px] md:py-[16px]"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default CaseStudies;
