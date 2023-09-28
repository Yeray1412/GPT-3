import { MediaSVG } from "@/components";

const medias = [
  {
    id: 1,
    imgUrl: "./media1.png",
  },
  {
    id: 2,
    imgUrl: "./media2.png",
  },
  {
    id: 3,
    imgUrl: "./media3.png",
  },
  {
    id: 4,
    imgUrl: "./media4.png",
  },
  {
    id: 5,
    imgUrl: "./media5.png",
  },
];

const Media = () => {
  return (
    <div className="flex justify-center items-center py-[80px] md:py-[100px]">
      <div className="flex justify-center items-center">
        {medias.map((media) => {
          return <MediaSVG key={media.id} {...media} />;
        })}
      </div>
    </div>
  );
};
export default Media;
