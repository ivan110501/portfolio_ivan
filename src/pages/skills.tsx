import { vjezbeLinks } from "../data/skills";

const Skills = () => {
  return (
    <>
      <>
        <h1>My skills</h1>
        <div className="skills">
          <div className="skills__box">
            <img
              className="skills__img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              alt=""
            />
            <span>HTML</span>
          </div>
          <div className="skills__box">
            <img
              className="skills__img"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt=""
            />
            <span>CSS</span>
          </div>
          <div className="skills__box">
            <img
              className="skills__img"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt=""
            />
            <span>JAVASCRIPT</span>
          </div>
          <div className="skills__box">
            <img
              className="skills__img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
              alt=""
            />
            <span>TYPESCRIPT</span>
          </div>
          <div className="skills__box">
            <img
              className="skills__img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
              alt=""
            />
            <span>REACT</span>
          </div>
          <div className="skills__box">
            <img
              className="skills__img"
              src="https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png"
              alt=""
            />
            <span>GIT</span>
          </div>
          <div className="skills__box">
            <img
              className="skills__img"
              src="https://seeklogo.com/images/A/autodesk-fusion-360-logo-7F72A76397-seeklogo.com.png"
              alt=""
            />
            <span>FUSION 360</span>
          </div>
          <div className="skills__box">
            <img
              className="skills__img"
              src="https://media.printables.com/media/prints/754259/images/5885287_be47d97c-1aee-45e2-9f54-09a06093081a_b35039bb-5086-43b5-8b8d-4dde65caf490/thumbs/inside/1280x960/webp/bambulablogo.webp"
              alt=""
            />
            <span>BAMBULAB</span>
          </div>
        </div>
        <hr />

        <h2>Skill showcase</h2>
        <h4>
          This is section with sites where my technical skills are displayed. It
          includes stuff like working with API, Advanced SCSS, HTML, Javascript,
          TypeScript, etc. All examples including home website are made by me
          completely from scratch without using any template. Click on EXPLORE
          to discover each site
        </h4>
        <div className="preview">
          {vjezbeLinks.map((link) => {
            return (
              <div className="preview__box">
                <img className="preview__img" src={link.img} alt="" />
                <h3>{link.label}</h3>
                <span>{link.description}</span>
                <a style={{ margin: "1rem" }} className="link" href={link.href}>
                  EXPLORE
                </a>
              </div>
            );
          })}
        </div>
      </>
    </>
  );
};

export default Skills;
