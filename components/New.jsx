const New = ({ imgUrl, gridStyle }) => {
  return (
    <div className={`${gridStyle || " "} sec-shadow`}>
      <div>
        <img src={imgUrl} alt="img" className="object-contain w-full" />
      </div>
      <div className="bg-[#042C54] grow p-[25px] flex flex-col justify-between">
        <div>
          <p className="text-[12px] font-semibold">Sep 26, 2021</p>
          <h3 className="text-[24px] font-bold leading-[30px]">
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </h3>
        </div>
        <p className="text-[12px] font-semibold mt-[50px]">Read Full Article</p>
      </div>
    </div>
  );
};
export default New;
