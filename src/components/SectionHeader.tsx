import React from "react";

interface SectionHeaderProps {
  eyebrow: String;
  header: String;
  description: String;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  header,
  description,
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-200 to-sky-400 text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>

      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {header}
      </h2>
      <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
