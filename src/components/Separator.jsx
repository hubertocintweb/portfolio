import "../style/separator.css";

function Separator() {
  return (
    <div className="separator">
      <div className="separator__firstColumn">
        <div className="separator__firstColumn--first"></div>
        <div className="separator__firstColumn--second"></div>
      </div>
      <div className="separator__secondColumn">
        <div className="separator__secondColumn--first"></div>
        <div className="separator__secondColumn--second"></div>
      </div>
    </div>
  );
}

export default Separator;
