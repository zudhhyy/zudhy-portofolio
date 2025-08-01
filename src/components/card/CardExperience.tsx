import { FC } from "react";
import { ExperienceType } from "types/experience";

const CardExperience: FC<ExperienceType> = ({
  company,
  position,
  startDate,
  endDate,
  descriptions,
}) => {
  return (
    <div className="mb-10">
      <div className="flex items-end justify-between">
        <p className="text-xl font-bold">{company}</p>
        <p className="hidden text-xs font-normal lg:block">
          {startDate} - {endDate}
        </p>
      </div>
      <p className="text-md font-semibold">{position}</p>
      <p className="text-xs font-normal lg:hidden">
        {startDate} - {endDate}
      </p>

      <ul className="ml-3 mt-6 list-disc">
        {descriptions.map((desc, idx) => (
          <li key={idx} className="mt-3 text-xs lg:text-sm">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardExperience;
