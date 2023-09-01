import React, { useState, useEffect } from "react";
import ScreenHeading from "../../uitilities/ScreenHeading/screenHeading";
import ScrollService from "../../uitilities/ScrollService";
import Animations from "../../uitilities/Animations";
import educationIcon from "../../assets/Resume/education.svg";
import workHistoryIcon from "../../assets/Resume/work-history.svg";
import programmingSkillsIcon from "../../assets/Resume/programming-skills.svg";
import projectsIcon from "../../assets/Resume/projects.svg";
import interestsIcon from "../../assets/Resume/interests.svg";
import "./Resume.css";
export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", icon: educationIcon },
    { label: "Work History", icon: workHistoryIcon },
    { label: "Programming Skills", icon: programmingSkillsIcon },
    { label: "Projects", icon: projectsIcon },
    { label: "Interests", icon: interestsIcon },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "React" },
    { skill: "Node.js" },
    { skill: "JavaScript" },
    { skill: "Express JS" },
    { skill: "HTML5" },
    { skill: "CSS3" },
    { skill: "SASS" },
    { skill: "Responsive Design" },
    { skill: "Git, GitHub" },
    { skill: "Bootstrap" },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Mobile E-shop ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce application designed to sell products online wth payment system integration",
      subHeading:
        "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
    },
    {
      title: "Ecommerce Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Guilan Guilan, Iran"}
        subHeading={"Master of Software Engineering"}
        fromDate={"2022"}
        toDate={"2024"}
      />
      <ResumeHeading
        heading={"Jahad University Esfahan, Iran"}
        subHeading={"Bachelor of Electronic Engineering "}
        fromDate={"2013"}
        toDate={"2017"}
      />

      <ResumeHeading
        heading={"Udemy"}
        subHeading={"The Ultimate React Course 2023"}
        fromDate={"07-2023"}
        toDate={"09-2023"}
      />
      <ResumeHeading
        heading={"Udemy"}
        subHeading={"Advanced CSS and Sass"}
        fromDate={"05-2023"}
        toDate={"06-2023"}
      />
      <ResumeHeading
        heading={"Udemy"}
        subHeading={"The Complete 2022 Web Development Bootcamp"}
        fromDate={"10-2022"}
        toDate={"03-2023"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Personal Projects"}
          subHeading={"Front-End  Developer"}
          fromDate={"2022"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Over the past one year and a half, I've been on an exhilarating
            journey to become a proficient Front End Developer.In the beginning,
            my primary focus was mastering HTML, CSS, and JavaScript, which
            paved the way for my exploration of web development. <br />
            To enhance and showcase my skills, I embarked on creating personal
            projects, such as a React-based personal portfolio and a
            documentation app. Additionally, I completed over 50 projects
            involving vanilla HTML, CSS, and JavaScript, further solidifying my
            foundation. These projects have been instrumental in refining my
            abilities and demonstrating my commitment to the field.
            <br />
            Looking ahead, I'm dedicated to advancing my expertise in React and
            plan to delve into TypeScript to stay ahead in the ever-evolving
            world of front end development. My journey is characterized by
            continuous learning, hands-on experience, and an unwavering
            dedication to crafting exceptional digital solutions.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Reading phantasy novels"
        description='For me, there is nothing quite like immersing myself in the worlds of fantasy novels. I grew up reading "The Lord of the Rings," "The Hobbit," "Deltora Quest," the Harry Potter series, and many others. My library is something I take great pride in.'
      />
      <ResumeHeading
        heading="Movies and Series"
        description="The first show I watched was Friends, and let's just say that after that, I was hooked on the world of sitcoms. "
      />
      <ResumeHeading
        heading="Music"
        description="Listening to instrumental music is something I've cherished since childhood. For me, music serves as the ultimate stress reliever."
      />
      <ResumeHeading
        heading="Gaming"
        description="I enjoy challenging my gaming skills by playing a variety of games such as World of Warcraft, Mortal Kombat, Call of Duty, and more. One of my all-time favorite game series is Assassin's Creed."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img className="bullet-logo" src={bullet.icon} alt={bullet.label} />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in "
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading
          title={"Resume"}
          subHeading={"My Professional History"}
        />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
