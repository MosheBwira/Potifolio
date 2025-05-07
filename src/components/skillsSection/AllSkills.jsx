import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import afterd from "/images/123.png";
//steps
//import photo with uniqne name
//create icon
import photo from "/images/ps.png";
import ill from "/images/ai.png";
import prem from "/images/pr.png";
import audit from "/images/au.png";
import medi from "/images/me.png";
import lit from "/images/lr.png";
import cinema from "/images/c4d.png";
const after=()=>{
  return(
    <img src={afterd} alt="after" className="w-12 h-12" />
  )
}
const photoshop=()=>{
  return(
    <img src={photo} alt="after" className="w-12 h-12" />
  )
}
const illust=()=>{
  return(
    <img src={ill} alt="after" className="w-12 h-12" />
  )
}
const premired=()=>{
  return(
    <img src={prem} alt="after" className="w-12 h-12" />
  )
}
const audited=()=>{
  return(
    <img src={audit} alt="after" className="w-12 h-12" />
  )
}
const media=()=>{
  return(
    <img src={medi} alt="after" className="w-12 h-12" />
  )
}
const light=()=>{
  return(
    <img src={lit} alt="after" className="w-12 h-12" />
  )
}
const cinemma=()=>{
  return(
    <img src={cinema} alt="after" className="w-12 h-12" />
  )
}
const skills = [
  {
    skill: "AFTER EFFECTS",
    icon: after,
  },
  {
    skill: "PHOTOSHOP",
    icon: photoshop,
  },
  {
    skill: "ILLUSTRATOR",
    icon: illust,
  },
  {
    skill: "PREMIRE PRO",
    icon: premired,
  },
  {
    skill: "AUDITION",
    icon: audited,
  },
  {
    skill: "MEDIA ENCODER",
    icon: media,
  },
  {
    skill: "LIGHT ROOM",
    icon: light,
  },
  {
    skill: "CINEMA 4D",
    icon: cinemma,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
