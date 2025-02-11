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
  },
  {
    title: "Gaming",
    emoji: "🕹️",
  },
  {
    title: "Gym",
    emoji: "🏋🏻",
  },
  {
    title: "Hiking",
    emoji: "🥾",
  },
  {
    title: "Meditating",
    emoji: "🧘🏻",
  },
  {
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Photography",
    emoji: "📸",
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

        <div>
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={BookImage} alt="Atomic Habit" />
            </div>
          </Card>

          <Card>
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to create exceptional
              digital experience"
            />
            <ToolboxItems items={toolboxItems} />
          </Card>

          <Card>
            <CardHeader
              title="Beyond The Code"
              description="Explore my Interests and Hobbies beyond the digital realm"
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileEmoji} alt="smiling memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
