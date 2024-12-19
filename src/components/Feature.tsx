import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaDesktop, FaServicestack, FaSatellite } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiAffinitydesigner } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-white"
    >
      <FadeIn>
        <div className="flex justify-center items-center">
        <Title des="What I Can Do" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          {/* <Card
            title="Business Stratagy"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={null}
          /> */}
          <Card
            title="Software Development"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<FaDesktop/>}
          />
          {/* <Card
            title="SEO Optimisation"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<SiProgress />}
          /> */}
          <Card
            title="Debugging"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<FaSatellite/>}
          />
          <Card
            title="UI/UX Design"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<SiAffinitydesigner />}
          />
          {/* <Card
            title="Hosting Websites"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<FaGlobe />}
          /> */}
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
