import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import TechIcon from "@/components/TechIcon";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import JSIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JSIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📚",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🕹️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gym",
    emoji: "🏋🏻",
    left: "10%",
    top: "35%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "70%",
    top: "45%",
  },
  {
    title: "Meditating",
    emoji: "🧘🏻",
    left: "5%",
    top: "65%",
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: "10%",
    top: "35%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          header="A Glimse Into My World"
          description="Learn more about who I am, what I do and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={BookImage} alt="Atomic Habit" />
            </div>
          </Card>

          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to create exceptional
              digital experience"
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>

          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Beyond The Code"
              description="Explore my Interests and Hobbies beyond the digital realm"
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="h-[320px] p-0 relative">
            <Image
              src={mapImage}
              alt="map"
              className="h-full w-full object-cover object-left-top"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-500 ">
              <Image
                src={smileEmoji}
                alt="smiling memoji"
                className="size-20"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
