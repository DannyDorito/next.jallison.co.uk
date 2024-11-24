import { awards } from "@/data/AwardsData";

export const Awards = () => {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Awards
      </h1>
      {awards.map((award) => (
        <div key={award.key} className="awards">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {award.name}
          </h2>
          <p className="awards">{award.additionalInformation}</p>
        </div>
      ))}
    </div>
  );
};
