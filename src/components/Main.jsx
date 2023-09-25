import data from "../data/data.json";
import "../style/main.css";
import Acc from "./Acc";

function Main() {
  const lineNumber = 7;
  console.log(data.name);
  return (
    <main className="main">
      <div className="main__container">
        <Acc type="open" location={0} number={1} last={false} />
        <div className="line">
          <pre className="line__first">2</pre>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
          <pre className="name">
            {"name: "}
            <span className="name__txt">{`"${data.name}"`}</span>
            {","}
          </pre>
        </div>
        <div className="line">
          <pre className="line__first">3</pre>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
          <pre className="name">
            {"job: "}
            <span className="name__txt">{`"${data.job}"`}</span>
            {","}
          </pre>
        </div>
        <div className="line">
          <pre className="line__first">4</pre>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
          <pre className="name">
            {"location: "}
            <span className="name__txt">{`"${data.location}"`}</span>
            {","}
          </pre>
        </div>
        <div className="line">
          <pre className="line__first">5</pre>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
          <pre className="name">
            {"email:"}
            <span className="name__txt">{` "`}</span>
            <a href="mailto:hubert.bonduaeux@yahoo.fr">
              <span className="name__email">{data.email}</span>
            </a>
            <span className="name__txt">{`"`}</span>
            {","}
          </pre>
        </div>
        <div className="line">
          <pre className="line__first">6</pre>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
          <div className="verticalLineBefore"></div>
        </div>
        <div className="line">
          <pre className="line__first">7</pre>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
          <pre className="name">
            {"experience: "}
            <span className="array1">{"["}</span>
          </pre>
        </div>
        {data.experience.map((exp) => {
          return (
            <>
              <Acc
                type="open"
                location={1}
                number={lineNumber + 1 + 5 * (exp.id - 1)}
                last={false}
              />
              <div className="line">
                <pre className="line__first">
                  {lineNumber + 2 + 5 * (exp.id - 1)}
                </pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <pre className="name">
                  {"date: "}
                  <span className="name__txt">{`"${exp.date}"`}</span>
                  {","}
                </pre>
              </div>
              <div className="line">
                <pre className="line__first">
                  {lineNumber + 3 + 5 * (exp.id - 1)}
                </pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <pre className="name">
                  {"name: "}
                  <span className="name__txt">{`"${exp.name}"`}</span>
                  {","}
                </pre>
              </div>
              <div className="line">
                <pre className="line__first">
                  {lineNumber + 4 + 5 * (exp.id - 1)}
                </pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <pre className="name">
                  {"proposedBy: "}
                  <span className="name__txt">{`"${exp.proposedBy}"`}</span>
                  {","}
                </pre>
              </div>
              <Acc
                type="close"
                location={1}
                number={lineNumber + 5 + 5 * (exp.id - 1)}
                last={data.experience.length > exp.id ? true : false}
              />
            </>
          );
        })}
        <div className="line">
          <pre className="line__first">
            {lineNumber + 1 + 5 * data.experience.length}
          </pre>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
          <pre className="name">
            <span className="array1">{"]"}</span>
            {","}
          </pre>
        </div>
        <div className="line">
          <pre className="line__first">
            {lineNumber + 2 + 5 * data.experience.length}
          </pre>
          <div className="verticalLineBefore"></div>
        </div>
        <div className="line">
          <pre className="line__first">
            {lineNumber + 3 + 5 * data.experience.length}
          </pre>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
          <pre className="name">
            {"projects: "}
            <span className="array1">{"["}</span>
          </pre>
        </div>
        {data.projects.map((project) => {
          return (
            <>
              <Acc
                type="open"
                location={1}
                number={
                  lineNumber +
                  4 +
                  5 * data.experience.length +
                  9 * (project.id - 1) +
                  (project.id >= 2 ? data.projects[0].skills.length : 0)
                }
                last={false}
              />
              <div className="line">
                <pre className="line__first">
                  {lineNumber +
                    5 +
                    5 * data.experience.length +
                    9 * (project.id - 1) +
                    (project.id >= 2 ? data.projects[0].skills.length : 0)}
                </pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <pre className="name">
                  {"type: "}
                  <span className="name__txt">{`"${project.type}"`}</span>
                  {","}
                </pre>
              </div>
              <div className="line">
                <pre className="line__first">
                  {lineNumber +
                    6 +
                    5 * data.experience.length +
                    9 * (project.id - 1) +
                    (project.id >= 2 ? data.projects[0].skills.length : 0)}
                </pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <pre className="name">
                  {"name: "}
                  <span className="name__txt">{`"${project.name}"`}</span>
                  {","}
                </pre>
              </div>
              <div className="line">
                <pre className="line__first">
                  {lineNumber +
                    7 +
                    5 * data.experience.length +
                    9 * (project.id - 1) +
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
                      <>
                        <span className="name__txt">{`"`}</span>
                        <a href={oneUrl.uri} target="_blank" rel="noreferrer">
                          <span className="name__email">{oneUrl.type}</span>
                        </a>
                        <span className="name__txt">{`"`}</span>

                        {oneUrl.id < project.url.length && (
                          <span className="name">{","}</span>
                        )}
                      </>
                    );
                  })}
                  <span className="array1">{"]"}</span>
                </pre>
              </div>
              <div className="line">
                <pre className="line__first">
                  {lineNumber +
                    8 +
                    5 * data.experience.length +
                    9 * (project.id - 1) +
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
                  9 +
                  5 * data.experience.length +
                  9 * (project.id - 1) +
                  (project.id >= 2 ? data.projects[0].skills.length : 0)
                }
                last={false}
              />
              {project.skills.map((skill) => {
                return (
                  <div className="line">
                    <pre className="line__first">
                      {lineNumber +
                        9 +
                        skill.id +
                        5 * data.experience.length +
                        9 * (project.id - 1) +
                        (project.id >= 2 ? data.projects[0].skills.length : 0)}
                    </pre>
                    <div className="verticalLineBefore"></div>
                    <pre className="name">{"  "}</pre>
                    <div className="verticalLineBefore"></div>
                    <pre className="name">{"  "}</pre>
                    <div className="verticalLineBefore"></div>
                    <pre className="name">{"  "}</pre>
                    <div className="verticalLineBefore"></div>
                    <pre className="name">{"  "}</pre>
                    <div className="verticalLineBefore"></div>
                    <pre className="name">{"  "}</pre>
                    <pre className="name__txt">
                      {`"`}
                      {skill.name}
                      {`"`}
                      {skill.id < project.skills.length && (
                        <span className="name">{","}</span>
                      )}
                    </pre>
                  </div>
                );
              })}
              <Acc
                type="close"
                location={2}
                number={
                  lineNumber +
                  10 +
                  5 * data.experience.length +
                  project.skills.length +
                  9 * (project.id - 1) +
                  (project.id >= 2 ? data.projects[0].skills.length : 0)
                }
                last={false}
              />
              <div className="line">
                <pre className="line__first">
                  {lineNumber +
                    11 +
                    5 * data.experience.length +
                    project.skills.length +
                    9 * (project.id - 1) +
                    (project.id >= 2 ? data.projects[0].skills.length : 0)}
                </pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <pre className="name">
                  <span className="array1">{"]"}</span>
                </pre>
              </div>
              <Acc
                type="close"
                location={1}
                number={
                  lineNumber +
                  12 +
                  5 * data.experience.length +
                  9 * (project.id - 1) +
                  (project.id >= 2 ? data.projects[0].skills.length : 0) +
                  project.skills.length
                }
                last={project.id < data.projects.length ? true : false}
              />
            </>
          );
        })}
        <div className="line">
          <pre className="line__first">
            {lineNumber +
              13 +
              5 * data.experience.length +
              9 * (data.projects.length - 1) +
              data.projects[0].skills.length +
              data.projects[1].skills.length}
          </pre>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
          <pre className="name">
            <span className="array1">{"]"}</span>
          </pre>
        </div>
        <Acc
          type="close"
          location={0}
          number={
            lineNumber +
            14 +
            5 * data.experience.length +
            9 * (data.projects.length - 1) +
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
