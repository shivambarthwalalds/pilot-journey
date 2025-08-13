import React from "react";

interface BannerProps {
  title: any;
}

function Banner({ title }: BannerProps) {
  return (
    <div>
      <div className="relative bg-white-jet h-88">
        <div className="bg-grayish absolute inset-0 opacity-85 text-white text-2xl px-5 sm:px-0 lg:text-4xl font-librebaskerville flex flex-col justify-center items-center gap-2">
          <p className="max-w-2xl mx-auto text-center">{title}</p>
          <div className="flex items-center space-x-2">
            {/* You can add breadcrumbs or icons here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
