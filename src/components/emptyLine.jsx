function EmptyLine(detail) {
  return (
    <div className="line">
      <pre className="line__first">{detail.number}</pre>
      <div className="verticalLineBefore"></div>
      {detail.position === 2 && (
        <>
          <pre className="name">{"  "}</pre>
          <div className="verticalLineBefore"></div>
        </>
      )}
    </div>
  );
}

export default EmptyLine;
