import data from "../data/data.json";
import "../style/main.css";

function Main() {
  const lineNumber = 7;
  console.log(data.name);
  return (
    <main className="main">
      <div className="main__container">
        <div className="line">
          <pre className="line__first">1</pre>
          <pre className="acc">{"{"}</pre>
        </div>
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
              <div className="line">
                <pre className="line__first">
                  {lineNumber + 1 + 5 * (exp.id - 1)}
                </pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <pre className="acc2">{"{"}</pre>
              </div>
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
              <div className="line">
                <pre className="line__first">
                  {lineNumber + 5 + 5 * (exp.id - 1)}
                </pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <pre className="acc2">
                  {"}"}
                  {data.experience.length > exp.id && (
                    <span className="name">{","}</span>
                  )}
                </pre>
              </div>
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
              <div className="line">
                <pre className="line__first">
                  {lineNumber +
                    4 +
                    5 * data.experience.length +
                    9 * (project.id - 1) + (project.id >=
                      2
                        ? data.projects[0].skills.length
                        : 0)}
                </pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <pre className="acc2">{"{"}</pre>
              </div>
              <div className="line">
                <pre className="line__first">
                {lineNumber +
                    5 +
                    5 * data.experience.length +
                    9 * (project.id - 1) + (project.id >=
                      2
                        ? data.projects[0].skills.length
                        : 0)}
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
                    9 * (project.id - 1) + (project.id >=
                      2
                        ? data.projects[0].skills.length
                        : 0)}
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
                    9 * (project.id - 1) + (project.id >=
                      2
                        ? data.projects[0].skills.length
                        : 0)}
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
                    9 * (project.id - 1) + (project.id >=
                      2
                        ? data.projects[0].skills.length
                        : 0)}
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
              <div className="line">
                <pre className="line__first">
                {lineNumber +
                    9 +
                    5 * data.experience.length +
                    9 * (project.id - 1) + (project.id >=
                      2
                        ? data.projects[0].skills.length
                        : 0)}
                </pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <pre className="acc">{"{"}</pre>
              </div>
              {project.skills.map((skill) => {
                return (
                  <div className="line">
                    <pre className="line__first">
                    {lineNumber +
                    9 + skill.id + 
                    5 * data.experience.length +
                    9 * (project.id - 1) + (project.id >=
                      2
                        ? data.projects[0].skills.length
                        : 0)}
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
                      {skill.id < project.skills.length && <span className="name">{","}</span>}
                    </pre>
                  </div>
                );
              })}

              <div className="line">
                <pre className="line__first">
                {lineNumber +
                    10 +
                    5 * data.experience.length + project.skills.length +
                    9 * (project.id - 1) + (project.id >=
                      2
                        ? data.projects[0].skills.length
                        : 0)}
                </pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <pre className="acc">{"}"}</pre>
              </div>
              <div className="line">
                <pre className="line__first">
                {lineNumber +
                    11 +
                    5 * data.experience.length + project.skills.length +
                    9 * (project.id - 1) + (project.id >=
                      2
                        ? data.projects[0].skills.length
                        : 0)}
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
              <div className="line">
                <pre className="line__first">
                {lineNumber +
                    12 +
                    5 * data.experience.length +
                    9 * (project.id - 1) + (project.id >=
                      2
                        ? data.projects[0].skills.length
                        : 0) + project.skills.length}
                </pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <div className="verticalLineBefore"></div>
                <pre className="name">{"  "}</pre>
                <pre className="acc2">
                  {"}"}
                  {project.id < data.projects.length && (
                    <span className="name">{","}</span>
                  )}
                </pre>
              </div>
            </>
          );
        })}
        <div className="line">
          <pre className="line__first">
          {lineNumber +
                    13 +
                    5 * data.experience.length +
                    9 * (data.projects.length - 1) + data.projects[0].skills.length + data.projects[1].skills.length}
          </pre>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
          <pre className="name">
            <span className="array1">{"]"}</span>
          </pre>
        </div>
        <div className="line">
          <pre className="line__first">
          {lineNumber +
                    14 +
                    5 * data.experience.length +
                    9 * (data.projects.length - 1) + data.projects[0].skills.length + data.projects[1].skills.length}
          </pre>
          <pre className="name">
            <span className="acc">{"}"}</span>
          </pre>
        </div>
      </div>
    </main>
  );
}

export default Main;
