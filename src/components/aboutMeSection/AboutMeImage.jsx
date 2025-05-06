const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[500px] relative">
      <div className="h-[500px] w-[500px] rounded-[100px] absolute overflow-hidden">
        <img
          src="/images/Moshe.png"
          alt="About Me Image"
          className="h-full "
        />
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[07px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
