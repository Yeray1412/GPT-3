const Footer = () => {
  return (
    <div className="bg-[#031B34] p-[50px] md:p-[150px] pb-0 md:pb-0 mt-[120px]">
      <div className="container">
        <div className="flex flex-col items-center gap-[64px]">
          <h1 className="text-[36px] md:text-[62px] text-center max-w-[800px] font-bold gradient-text leading-[45px] md:leading-[75px] tracking-[-2px]">
            Do you want to step in to the future before others
          </h1>
          <button
            type="button"
            className="py-[14px] md:py-[18px] px-[18px] md:px-[22px] text-[14px] md:text-base cursor-pointer border border-solid border-white bg-transparent"
          >
            Request Early Access
          </button>
        </div>
        <div className="pt-[100px] md:pt-[200px] flex flex-col md:flex-row gap-[100px] md:gap-[200px]">
          <div className="basis-[30%]">
            <img
              src="./GPT-3.svg"
              alt="gpt"
              className="w-[80px] md:w-[118px] h-[30px]"
            />
            <p className="text-[10px] md:text-[12px] mt-[10px] md:mt-[20px]">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between basis-[100%]">
            <ul className="text-[12px] font-thin leading-[30px] md:leading-[35px] mb-[20px] md:mb-0">
              <li className="font-extrabold pb-[8px] md:pb-[10px]">Links</li>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
            <ul className="text-[12px] font-thin leading-[30px] md:leading-[35px] mb-[20px] md:mb-0">
              <li className="font-extrabold pb-[8px] md:pb-[10px]">Company</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
            <ul className="text-[12px] font-thin leading-[30px] md:leading-[35px] mb-[20px] md:mb-0">
              <li className="font-extrabold pb-[8px] md:pb-[10px]">
                Get in touch
              </li>
              <li>Crechterwoord K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>
        <div className="text-[10px] md:text-[12px] text-center p-[27px] mt-[60px]">
          © 2021 GPT-3. All rights reserved.
        </div>
      </div>
    </div>
  );
};
export default Footer;
