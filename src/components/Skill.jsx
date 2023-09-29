function Skill(detail) {
    return (
        <div className="line">
        <pre className="line__first">
          {detail.number}
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
          {detail.name}
          {`"`}
          {detail.last === false && (
            <span className="name">{","}</span>
          )}
        </pre>
      </div>
    );
  }
  
  export default Skill;
  