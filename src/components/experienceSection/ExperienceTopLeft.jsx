import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2013
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="12" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="Many" text="Projects" />
      </div>
      <p className="text-center">
        With 12 years of experience in motion & still graphics, I have worked on a wide range of projects.
      </p>
      <ExperienceInfo number="$2k" text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
