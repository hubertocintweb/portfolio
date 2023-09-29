function Acc(detail) {
  return (
    <div className="line">
      <pre className="line__first">{detail.number}</pre>
      {detail.location >= 1 && (
        <>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
        </>
      )}
      {detail.location >= 2 && (
        <>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
          <div className="verticalLineBefore"></div>
          <pre className="name">{"  "}</pre>
        </>
      )}
      <pre className={detail.location === 1 ? "acc2" : "acc"}>{detail.type === "open" ? "{" : "}"}{detail.last === true && <span className="name">{","}</span>}</pre>
    </div>
  );
}

export default Acc;
