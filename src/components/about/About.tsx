import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { globeConfig, sampleArcs } from "./assets/worldGlobeAssets";
import Lottie from "react-lottie";
import animationData from "../../data/confetti.json";
import MagicButton from "../canvas/MagicButton";
import { Element } from "react-scroll";
import photo from "../../assets/photo.jpg";

const servisCardDefaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: React.ReactNode;
  icon: string;
}) => (
  <Tilt
    className="xs:w-[250px] w-full transition-all"
    options={servisCardDefaultOptions}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const WorldGlobe = lazy(() => import("../canvas/Globe"));
  const [copied, setCopied] = useState(false);

  const confettiDefaultOptions = useMemo(() => {
    return {
      loop: copied,
      autoplay: copied,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  }, [copied]);

  const handleCopy = useCallback(() => {
    const timing = setTimeout(() => {
      window.open("./cv.pdf", "_blank");
    }, 1000);
    setCopied(true);
    return () => {
      clearTimeout(timing);
    };
  }, []);

  useEffect(() => {
    if (copied) {
      const timing = setTimeout(() => setCopied(false), 3000);
      return () => {
        clearTimeout(timing);
      };
    }
  }, [copied]);

  return (
    <Element name="about" className="pt-12">
      <motion.div variants={textVariant(undefined)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full leading-[30px] flex flex-col-reverse lg:flex-row gap-5 justify-between items-center"
      >
        <div className="max-w-3xl flex gap-5 flex-col justify-between">
          <div>
            <p>
              I'm a skilled software developer with experience in TypeScript and
              JavaScript, and expertise in frameworks like React, Node.js, and
              Three.js. I'm a quick learner and collaborate closely with clients
              to create efficient, scalable, and user-friendly solutions that
              solve real-world problems. Let's work together to bring your ideas
              to life!
            </p>
          </div>
          <div className="flex flex-wrap gap-10 justify-between">
            <Tilt
              className="flex-1 min-w-52 transition-all"
              options={servisCardDefaultOptions}
            >
              <motion.div
                variants={fadeIn("right", "spring", 2 * 0.5, 0.75)}
                className="w-full h-40 green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              >
                <div className="bg-tertiary rounded-[20px] box-border py-5 px-12 min-h-[158px] flex flex-col relative overflow-hidden">
                  <h3 className="text-white text-[20px] font-bold text-center z-20 relative">
                    Open To Work Remotely
                  </h3>
                  <div className="absolute top-8 left-0 right-0 m-auto h-72 z-10">
                    <Suspense>
                      <WorldGlobe data={sampleArcs} globeConfig={globeConfig} />
                    </Suspense>
                  </div>
                </div>
              </motion.div>
            </Tilt>
            <Tilt
              className="flex-1 min-w-52 transition-all"
              options={servisCardDefaultOptions}
            >
              <motion.div
                variants={fadeIn("right", "spring", 2 * 0.5, 0.75)}
                className="w-full h-40 green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              >
                <div className="bg-tertiary rounded-[20px] box-border py-5 px-12 min-h-[158px] flex justify-evenly items-center flex-col relative overflow-hidden">
                  <div
                    className={`absolute -bottom-5 right-0 ${
                      copied ? "block" : "block"
                    }`}
                  >
                    <Lottie
                      options={confettiDefaultOptions}
                      height={200}
                      width={400}
                    />
                  </div>
                  <h3 className="text-white text-[20px] font-bold text-center z-20 relative bottom-3">
                    My CV
                  </h3>
                  <MagicButton
                    title={"Open My Resume"}
                    icon={""}
                    position="left"
                    handleClick={handleCopy}
                    otherClasses="!bg-[#161A31]"
                  />
                </div>
              </motion.div>
            </Tilt>
          </div>
        </div>
        <div className="box lg:min-w-80">
          <div
            className="img_box"
            style={{ backgroundImage: `url${photo}` }}
          ></div>
        </div>
      </motion.div>

      <div className=" mt-16 flex flex-wrap items-center justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </Element>
  );
};

export default SectionWrapper(About, "about");
