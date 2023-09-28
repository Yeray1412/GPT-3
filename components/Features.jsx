const Features = ({ head, text, style, textSize }) => {
  return (
    <div className="basis-[33%]">
      <div
        className={`flex text-center md:text-left ${style} items-center md:items-start`}
      >
        <h1
          className={`spec ${textSize} before:left-[50%] max-w-[165px] w-full before:translate-x-[-50%] before:md:left-0 before:md:translate-x-0`}
        >
          {head}
        </h1>
        <p className="text-[#81AFDD] text-[14px] md:text-base max-w-[400px]">
          {text}
        </p>
      </div>
    </div>
  );
};
export default Features;
