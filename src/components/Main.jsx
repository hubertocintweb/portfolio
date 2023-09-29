import { Fragment } from "react";
import data from "../data/data.json";
import "../style/main.css";
import Acc from "./Acc";
import CloseMainArray from "./CloseMainArray";
import MainArray from "./MainArray";
import Skill from "./Skill";
import EmptyLine from "./emptyLine";
import ProfileDesc from "./profileDesc";

function Main() {
  const lineNumber = 7;
  return (
    <main className="main">
      <div className="main__container">
        <Acc type="open" location={0} number={1} last={false} />
        <ProfileDesc
          type={"name"}
          number={2}
          txt={data.name}
          link={false}
          position={1}
        />
        <ProfileDesc
          type={"job"}
          number={3}
          txt={data.job}
          link={false}
          position={1}
        />
        <ProfileDesc
          type={"location"}
          number={4}
          txt={data.location}
          link={false}
          position={1}
        />
        <ProfileDesc
          type={"email"}
          number={5}
          txt={data.email}
          link={true}
          position={1}
        />
        <EmptyLine number={6} position={2} />
        <MainArray number={7} type={"experience"} />
        {data.experience.map((exp) => {
          return (
            <Fragment key={`${exp.date}${exp.name}`}>
              <Acc
                type="open"
                location={1}
                number={lineNumber + 1 + 5 * (exp.id - 1)}
                last={false}
              />
              <ProfileDesc
                type={"date"}
                number={lineNumber + 2 + 5 * (exp.id - 1)}
                txt={exp.date}
                link={false}
                position={2}
              />
              <ProfileDesc
                type={"name"}
                number={lineNumber + 3 + 5 * (exp.id - 1)}
                txt={exp.name}
                link={false}
                position={2}
              />
              <ProfileDesc
                type={"proposedBy"}
                number={lineNumber + 4 + 5 * (exp.id - 1)}
                txt={exp.proposedBy}
                link={false}
                position={2}
              />
              <Acc
                type="close"
                location={1}
                number={lineNumber + 5 + 5 * (exp.id - 1)}
                last={data.experience.length > exp.id ? true : false}
              />
            </Fragment>
          );
        })}
        <CloseMainArray
          number={lineNumber + 1 + 5 * data.experience.length}
          last={false}
          position={1}
        />
        <EmptyLine
          number={lineNumber + 2 + 5 * data.experience.length}
          position={2}
        />
        <MainArray
          number={lineNumber + 3 + 5 * data.experience.length}
          type={"projects"}
        />
        {data.projects.map((project) => {
          return (
            <Fragment key={project.id}>
              <Acc
                type="open"
                location={1}
                number={
                  lineNumber +
                  4 +
                  5 * data.experience.length +
                  10 * (project.id - 1) +
                  (project.id >= 2 ? data.projects[0].skills.length : 0)
                }
                last={false}
              />
              <ProfileDesc
                type={"type"}
                number={
                  lineNumber +
                  5 +
                  5 * data.experience.length +
                  10 * (project.id - 1) +
                  (project.id >= 2 ? data.projects[0].skills.length : 0)
                }
                txt={project.type}
                link={false}
                position={2}
              />
              <ProfileDesc
                type={"name"}
                number={
                  lineNumber +
                  6 +
                  5 * data.experience.length +
                  10 * (project.id - 1) +
                  (project.id >= 2 ? data.projects[0].skills.length : 0)
                }
                txt={project.name}
                link={false}
                position={2}
              />
              <ProfileDesc
                type={"description"}
                number={
                  lineNumber +
                  7 +
                  5 * data.experience.length +
                  10 * (project.id - 1) +
                  (project.id >= 2 ? data.projects[0].skills.length : 0)
                }
                txt={project.description}
                link={false}
                position={2}
              />
              <div className="line">
                <pre className="line__first">
                  {lineNumber +
                    8 +
                    5 * data.experience.length +
                    10 * (project.id - 1) +
                    (project.id >= 2 ? data.projects[0].skills.length : 0)}
                </pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <pre className="name">
                  {"url: "}
                  <span className="array1">{"["}</span>
                  {project.url.map((oneUrl) => {
                    return (
                      <Fragment key={oneUrl.uri}>
                        <span className="name__txt">{`"`}</span>
                        <a href={oneUrl.uri} target="_blank" rel="noreferrer">
                          <span className="name__email">{oneUrl.type}</span>
                        </a>
                        <span className="name__txt">{`"`}</span>

                        {oneUrl.id < project.url.length && (
                          <span className="name">{","}</span>
                        )}
                      </Fragment>
                    );
                  })}
                  <span className="array1">{"]"}</span>
                </pre>
              </div>
              <div className="line">
                <pre className="line__first">
                  {lineNumber +
                    9 +
                    5 * data.experience.length +
                    10 * (project.id - 1) +
                    (project.id >= 2 ? data.projects[0].skills.length : 0)}
                </pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <pre className="name">
                  {"skills: "}
                  <span className="array1">{"["}</span>
                </pre>
              </div>
              <Acc
                type="open"
                location={2}
                number={
                  lineNumber +
                  10 +
                  5 * data.experience.length +
                  10 * (project.id - 1) +
                  (project.id >= 2 ? data.projects[0].skills.length : 0)
                }
                last={false}
              />
              {project.skills.map((skill) => {
                return (
                  <Skill
                    key={`${skill.id}${project.name}`}
                    number={
                      lineNumber +
                      10 +
                      skill.id +
                      5 * data.experience.length +
                      10 * (project.id - 1) +
                      (project.id >= 2 ? data.projects[0].skills.length : 0)
                    }
                    name={skill.name}
                    last={skill.id < project.skills.length ? false : true}
                  />
                );
              })}
              <Acc
                type="close"
                location={2}
                number={
                  lineNumber +
                  11 +
                  5 * data.experience.length +
                  project.skills.length +
                  10 * (project.id - 1) +
                  (project.id >= 2 ? data.projects[0].skills.length : 0)
                }
                last={false}
              />
              <CloseMainArray
                number={
                  lineNumber +
                  12 +
                  5 * data.experience.length +
                  project.skills.length +
                  10 * (project.id - 1) +
                  (project.id >= 2 ? data.projects[0].skills.length : 0)
                }
                last={true}
                position={2}
              />
              <Acc
                type="close"
                location={1}
                number={
                  lineNumber +
                  13 +
                  5 * data.experience.length +
                  10 * (project.id - 1) +
                  (project.id >= 2 ? data.projects[0].skills.length : 0) +
                  project.skills.length
                }
                last={project.id < data.projects.length ? true : false}
              />
            </Fragment>
          );
        })}
        <CloseMainArray
          number={
            lineNumber +
            14 +
            5 * data.experience.length +
            10 * (data.projects.length - 1) +
            data.projects[0].skills.length +
            data.projects[1].skills.length
          }
          last={true}
          position={1}
        />
        <Acc
          type="close"
          location={0}
          number={
            lineNumber +
            15 +
            5 * data.experience.length +
            10 * (data.projects.length - 1) +
            data.projects[0].skills.length +
            data.projects[1].skills.length
          }
          last={false}
        />
      </div>
    </main>
  );
}

export default Main;
