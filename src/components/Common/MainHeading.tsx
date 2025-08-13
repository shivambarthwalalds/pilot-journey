import React from "react";

interface MainHeadingProps {
  title?: string;
  subtitle?: string;
  description?: string;
  color?: any;
}

const MainHeading: React.FC<MainHeadingProps> = ({
  title = "",
  subtitle = "",
  description = "",
  color,
}) => {
  const renderStyledTitle = (text: string) => {
    const words = text.trim().split(/\s+/);

    return (
      <p className="text-lg md:text-xl font-semibold space-x-1">
        {words.map((word, index) => {
          if (index === 0 || index == 1) {
            return (
              <span key={index} className="text-lightBrown">
                {word}{" "}
              </span>
            );
          }
          return (
            <span key={index} className={`${color ? color : "text-white"} `}>
              {word}{" "}
            </span>
          );
        })}
      </p>
    );
  };

  return (
    <div>
      {title && renderStyledTitle(title)}

      {subtitle && (
        <h2
          className={`py-5 text-2xl md:text-3xl lg:text-4xl font-librebaskerville  font-semibold ${
            color ? color : "text-white"
          } -mt-2`}
        >
          {subtitle}
        </h2>
      )}
      {description && (
        <p
          className={`${
            color ? color : "text-white"
          } text-base font-medium leading-6`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default MainHeading;
