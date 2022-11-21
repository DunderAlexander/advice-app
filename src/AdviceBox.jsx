function AdviceBox({ slip, onClick }) {
  return (
    <div className="wrapper">
      <h4 className="title">ADVICE #{slip.slip.id}</h4>
      <p className="advice">{slip.slip.advice}</p>
      <img src="./images/pattern-divider-desktop.svg" alt="" />
      <div className="dice" onClick={onClick}>
        <img src="./images/icon-dice.svg" alt="" />
      </div>
    </div>
  );
}

export default AdviceBox;
