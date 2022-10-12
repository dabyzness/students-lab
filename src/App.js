import "./App.css";
import { students as studentData } from "./data/students";
import { useState } from "react";
import Student from "./components/Student";

function App() {
  const [students, setStudents] = useState(studentData);

  return (
    <>
      {students.map((student, i) => (
        <Student key={`student-${i}`} student={student} />
      ))}
    </>
  );
}

export default App;
