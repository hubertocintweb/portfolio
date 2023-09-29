function MainArray(detail) {
    return (
        <div className="line">
        <pre className="line__first">{detail.number}</pre>
        <div className="verticalLineBefore"></div>
        <pre className="name">{"  "}</pre>
        <pre className="name">
          {`${detail.type}: `}
          <span className="array1">{"["}</span>
        </pre>
      </div>
    );
  }
  
  export default MainArray;
  