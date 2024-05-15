import { memo } from "react";

function Quote() {
  return (
    <div className="h-full w-full flex flex-col p-10 justify-center items-start">
      <blockquote className="font-semibold text-xl md:text-5xl">
        "The customer service I received was exceptional. The support team went
        above and beyond to address my concerns."
      </blockquote>
        <span className="flex flex-col ml-10">
        <cite>— Jane Cooper</cite>
        <cite>CEO Acrne nc</cite>
        </span>

    </div>
  );
}

export default memo(Quote);
