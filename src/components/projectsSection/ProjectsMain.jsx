import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "BRAND LOGOS",
    year: "different Brands",
    align: "right",
    image: "/images/phemmy.jpg",
    link: "https://drive.google.com/drive/folders/1Ru1nz9TVzrXHZSDRqyT_PuIXXiM4cJ8S?usp=share_link",
  },
  {
    name: "FLYERS",
    year: "General Flyers",
    align: "left",
    image: "/images/11.jpg",
    link: "#",
  },
  {
    name: "LIFESTYLE",
    year: "Bars, Restaurants, Hotels, Clubs",
    align: "right",
    image: "/images/pretty.jpg",
    link: "#",
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "#",
  },
  {
    name: "Brand Logos",
    year: "April 2022",
    align: "right",
    image: "/images/phemmy.jpg",
    link: "https://drive.google.com/drive/folders/1Ru1nz9TVzrXHZSDRqyT_PuIXXiM4cJ8S?usp=share_link",
  },
  {
    name: "Brand Logos",
    year: "April 2022",
    align: "left",
    image: "/images/phemmy.jpg",
    link: "https://drive.google.com/drive/folders/1Ru1nz9TVzrXHZSDRqyT_PuIXXiM4cJ8S?usp=share_link",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] md:h-[2750px] lg:h-[4100px] sm:max-w-[3000px] sm:h-[2880px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
