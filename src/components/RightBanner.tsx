import { bannerImg } from "../assets";
import { FadeIn } from "./FadeIn";

const RightBanner = () => {
  return (
    <FadeIn className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[350px] lgl:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[350px] lgl:h-[500px] bg-gradient-to-r from-[#000000] to-[#00000] shadow-shadowOne flex justify-center items-center"></div>
    </FadeIn>
  );
};

export default RightBanner;
