function ProfileDesc(detail) {
  return (
    <div className="line">
      <pre className="line__first">{detail.number}</pre>
      <div className="verticalLineBefore"></div>
      <pre className="name">{"  "}</pre>
      {detail.position === 2 && (
        <>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
        </>
      )}
      <pre className="name">
        {`${detail.type}: `}
        <span className="name__txt">{`"`}</span>
        {detail.link === false ? (
          <span className="name__txt">{detail.txt}</span>
        ) : (
          <a className="name__email" href={`mailto:${detail.txt}`}>
            <span className="name__txt">{detail.txt}</span>
          </a>
        )}
        <span className="name__txt">{`"`}</span>
        {","}
      </pre>
    </div>
  );
}

export default ProfileDesc;
