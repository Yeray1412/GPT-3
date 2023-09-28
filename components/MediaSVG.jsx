const MediaSVG = ({ imgUrl }) => {
  return (
    <div className="max-w-[18%] md:max-w-[12%]  p-[10px] lg:p-[20px]">
      <img src={imgUrl} className="object-contain w-full h-full" alt="img" />
    </div>
  );
};
export default MediaSVG;
