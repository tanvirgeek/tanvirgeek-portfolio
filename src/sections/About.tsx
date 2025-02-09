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

export const AboutSection = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="About Me"
        header="A Glimse Into My World"
        description="Learn more about who I am, what I do and what inspires me."
      />

      <div>
        <Card>
          <StarIcon />
          <h3>My Reads</h3>
          <p>Explore the books shaping my perspectives</p>
          <Image src={BookImage} alt="Atomic Habit" />
        </Card>

        <Card>
          <StarIcon />
          <h3>My Toolbox</h3>
          <p>
            Explore the technologies and tools I use to create exceptional
            digital experience
          </p>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <StarIcon />
          <h3>Beyond The Code</h3>
          <p>Explore my Interests and Hobbies beyond the digital realm</p>
        </Card>

        <Card>
          <Image src={mapImage} alt="map" />
          <Image src={smileEmoji} alt="smiling memoji" />
        </Card>
      </div>
    </div>
  );
};
