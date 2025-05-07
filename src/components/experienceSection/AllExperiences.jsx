import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Head Graphics Designer",
    company: "Yawatu Minerals & Mining LTD",
    date: "2023 - Present Remotely",
    
    responsibilities: [
      "Oversee and manage day to day production services and opererations",
      "Videography and photography.",
      "-Create Motion AD’s, E-Flyers, Editing and General info-Graphics.",
    ],
  },
  {
    job: "Head Graphics Designer",
    company: "Hubcast Media Vancuvar, Canada",
    Location: "Vancuvar, Canada",
    date: "2022 - 2023 Remlotely",

    responsibilities: [
      "Oversee and manage day to day production services and opererations.",
      "Collabrate and Create Content with the MD and Hubcast International Team.",
      "Create Motion AD’s, E-Flyers, Editing and General info-Graphics.",
    ],
  },
  {
    job: "Still & Motion Graphics Designer",
    company: "Face TV",
    date: "2014 - 2018",

    responsibilities: [
      "Oversee and manage day to day production services and opererations.",
      "Recruit, Train and oversee Creative Team Members.",
      "Create Motion AD’s, E-Flyers, Editing and General info-Graphics.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
