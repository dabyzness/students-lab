const Score = ({ score }) => {
  return (
    <li
      className="list-group-item"
      style={{ display: "flex", width: "200px", margin: "0 auto" }}
    >
      <span
        className="date"
        style={{ "margin-right": "auto", fontStyle: "italic" }}
      >
        {score.date}
      </span>
      <span
        className="grade"
        style={{ "margin-left": "auto", fontWeight: "bold" }}
      >
        {score.score}
      </span>
    </li>
  );
};

export default Score;
