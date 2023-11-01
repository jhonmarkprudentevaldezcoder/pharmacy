import React from "react";

export default function About() {
  return (
    <div id="About" className="mb-12 mt-12">
      <div
        className="h-96 bg-gray-200/50 bg-no-repeat"
        style={{
          backgroundImage: "url('/images/longwallb.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="flex flex-col md:flex-row justify-center gap-24 md:gap-9">
        <div className="flex flex-col py-4 gap-1 md:w-1/2 lg:w-1/4">
          <div className="flex flex-col gap-5 md:py-5 lg:py-12   ">
            <span className="font-bold text-[#051c40] text-3xl uppercase px-5 md:px-0 ">
              VISION
            </span>
            <p className="text-sm px-5 md:px-0 ">
              The KVNHS envisions to be the center of academic excellence that
              prepares graduates to be globally competitive, responsive to
              change and committed to live in harmony with the environment and
              society.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:py-5 lg:py-12 mt-12 md:mt-0">
            <span className="font-bold text-[#051c40] text-3xl uppercase px-5 md:px-0 ">
              MISSION
            </span>
            <p className="text-sm px-5 md:px-0 ">
              The KVNHS shall equip learners with relevant knowledge, skills and
              values that develop them into globally competent, morally upright
              and responsible citizens.
            </p>
          </div>
        </div>

        <div className="md:w-1/4 py-5 md:py-2 flex items-center">
          <div
            className="h-80 bg-gradient-to-r from-blue-900 to-blue-500  w-full "
            style={{
              backgroundImage: "url('/images/about.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="bottom-0 px-4 py-3 bg-gray-500/50 hover:bg-gray-600/50 transition ease-in-out duration-75 delay-75 hover:cursor-pointer w-full">
              <h1 className="text-white font-semibold text-3xl">ABOUT - US</h1>
              <p className="text-gray-200">
                Tmply dummy text of the printing and typesetting indust Lorem I
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
