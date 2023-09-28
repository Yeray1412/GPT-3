const ProfileImgs = ({ imgUrl }) => {
  return (
    <div className="mr-[-15px]">
      <img className="w-full object-contain" src={imgUrl} alt="img" />
    </div>
  );
};
export default ProfileImgs;
