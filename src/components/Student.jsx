import Score from "./Score";

const Student = ({ student }) => {
  return (
    <div class="card" style={{ maxWidth: "700px", margin: "1rem auto" }}>
      <div
        className="card-header student"
        style={{ fontWeight: "bold", fontSize: "32px" }}
      >
        {student.name}
      </div>
      <div className="card-body text-center">
        <p style={{ textAlign: "justify" }}>{student.bio}</p>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Scores</p>
        <ul className="list-group list-group-flush">
          {student.scores.map((score, i) => (
            <Score key={`score-${i}`} score={score} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Student;
