import { New } from "@/components";

const newComp = [
  {
    id: 1,
    imgUrl: "./New1.png",
    gridStyle: "row-span-2 flex flex-col",
  },
  {
    id: 2,
    imgUrl: "./New2.png",
  },
  {
    id: 3,
    imgUrl: "./New3.png",
  },
  {
    id: 4,
    imgUrl: "./New4.png",
  },
  {
    id: 5,
    imgUrl: "./New5.png",
  },
];

const Library = () => {
  return (
    <div className="py-[40px]">
      <div className="container">
        <h1 className="text-[36px] md:text-[62px] font-bold gradient-text leading-[45px] md:leading-[75px] tracking-[-2px] my-[60px] md:my-[100px] max-w-[619px]">
          A lot is happening, We are blogging about it.
        </h1>
        <div className="flex flex-col md:grid grid-cols-3 gap-[50px]">
          {newComp.map((comp) => {
            return <New key={comp.id} {...comp} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Library;
