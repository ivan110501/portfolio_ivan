import { vjezbeLinks } from "../data/skills";

const Skills = () => {
  return (
    <>
      <>
        <h1>My skills</h1>
        <h4>
          This is section where my technical skills are displayed. It includes
          stuff like working with API, Advanced SCSS, HTML, Javascript,
          TypeScript, etc.
        </h4>
        <div>
          {vjezbeLinks.map((link) => {
            return (
              <a className="link" key={link.href} href={link.href}>
                {link.label}
              </a>
            );
          })}
        </div>
      </>
    </>
  );
};

export default Skills;
