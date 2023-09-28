const Features = ({ head, text, style, textSize }) => {
  return (
    <div className="basis-[33%]">
      <div
        className={`flex md:text-left ${style} items-start`}
      >
        <h1
          className={`spec ${textSize}  max-w-[165px] w-full left-0 translate-x-0`}
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
