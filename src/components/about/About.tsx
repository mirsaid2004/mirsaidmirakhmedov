import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: React.ReactNode;
  icon: string;
}) => (
  <Tilt className="xs:w-[250px] w-full">
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
  return (
    <>
      <motion.div variants={textVariant(undefined)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full leading-[30px] flex flex-wrap gap-2 justify-between"
      >
        <div className="max-w-3xl">
          <p>
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js, and
            Three.js. I'm a quick learner and collaborate closely with clients
            to create efficient, scalable, and user-friendly solutions that
            solve real-world problems. Let's work together to bring your ideas
            to life!
          </p>
        </div>
        <div className="box">
          <div className="img_box"></div>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
