import { useEffect, useState } from "react";
import SkillsGrid from "./SkillsGrid";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import chess from "./assets/chess.png";
export default function Tech() {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/prashant1712/badges")
      .then((res) => res.json())
      .then((data) => {
        setBadges(data.badges || []);
      })
      .catch((err) => console.error("Failed to fetch badges:", err));
  }, []);

  return (
    <div className="py-24 flex flex-col items-center justify-center gap-8 ">
      <h3 className="text-xl font-light text-center mt-16 bg-secondary bg-clip-text text-transparent">
        THESE ARE MY TECHNICAL SKILLS
      </h3>
      <div className="my-4 w-4/6 flex flex-col gap-8 h-full">
        <div className="w-full flex gap-8 h-96">
          <div className="w-full relative h-full p-8 bg-gray-800 -z-0 border-3 border-white/30 rounded-3xl">
            <div className="absolute inset-0 -z-10 opacity-5 HeroSection"></div>
            <h1 className="text-2xl mb-4  font-extrabold opacity-100 text-slate-200 font-mono">
              TECH STACK
            </h1>
            <div>
              <SkillsGrid />
            </div>
          </div>

          <div className="w-1/3 relative h-96 py-8 bg-gray-800 z-0 border-3 border-white/30 rounded-3xl">
            <div className="absolute inset-0 -z-10 opacity-5 HeroSection "></div>
            <h1 className="text-2xl font-extrabold opacity-100 mb-8 ms-8 font-mono">
              LEETCODE
            </h1>
            <div className="flex flex-col justify-between h-64">
              <div className="w-full overflow-hidden flex relative">
                <div className="bg-gradient-to-r from-gray-800 via-gray-50/0 to-gray-800 z-100 w-full h-48 absolute"></div>{" "}
                <img
                  className="goLeftBadges w-32 h-32"
                  src="https://assets.leetcode.com/static_assets/others/lg25100.png"
                />
                <img
                  className="goLeftBadges w-32 h-32"
                  src="https://leetcode.com/static/images/badges/dcc-2025-1.png"
                />
                <img
                  className="goLeftBadges w-32 h-32"
                  src="https://leetcode.com/static/images/badges/dcc-2025-2.png"
                />
                <img
                  className="goLeftBadges w-32 h-32"
                  src="https://assets.leetcode.com/static_assets/others/lg2550.png"
                />
              </div>
              <div className="text-primary ">
                <h1 className="text-7xl text-center font-extrabold font-sans">
                  287
                </h1>
                <h6 className="text-center font-sans">Questions Solved</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-8 h-full">  <div className="absolute inset-0 -z-10 opacity-5 HeroSection  rounded-3xl"></div>

          <div className="w-full relative p-4 px-8 flex h-48 bg-gray-800 border-3 border-white/30 rounded-3xl z-0 overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-5 HeroSection"></div>
            <img
                src="https://res.cloudinary.com/lesswrong-2-0/image/upload/f_auto,q_auto/v1/mirroredImages/xyjhFCSSXZsW6HDBb/z9uutqyne98wdcpp83eg"
                className="w-1/3 border-3 border-white/30 rounded-2xl"
              />
              <div className="px-4 py-2">
            <h1 className="text-2xl mb-4  font-extrabold opacity-100 text-primary font-mono">
              CURRENTLY WORKING ON
            </h1>

            <h6 className="text-slate-400">
              I’m currently working on a
              <span className="animate-pulse  font-extrabold">
                {" "}
                multiplayer chess game{" "}
              </span>
              where two players can play against each other in real-time. The
              game handles player moves, turn logic, and live updates. I’m using
              Java for the backend and React for the frontend, with a database
              to store player data and match history.
            </h6>
          </div></div>
        </div>
      </div>
    </div>
  );
}
