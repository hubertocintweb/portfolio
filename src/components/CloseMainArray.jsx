function CloseMainArray(detail) {
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
        <span className="array1">{"]"}</span>
        {detail.last === false && ","}
      </pre>
    </div>
  );
}

export default CloseMainArray;
