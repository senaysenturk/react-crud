import { useState } from "react";
import "./App.scss";
import StudentForm from "./components/student/student-form/StudentForm";
import StudentList from "./components/student/student-list/StudentList";

function App() {
  //Scriptlerin yazıldığı kısım
  // let name = "React";
  // const handleClick = e => {
  //   console.log("Clicked");
  // };

  const [student, setStudent] = useState({
    name: "",
    instructor: "",
    course: "",
    score: "",
  });
  const [error, setError] = useState({
    name: true,
    instructor: true,
    course: true,
    score: true,
  });
  const [myArray, setArray] = useState([]);
  const [query, setQuery] = useState("");

  const createStudentObj = (e) => {
    e.preventDefault();
    setError(student);
    // if (!student.score) {
    //   student.score = 0;
    // }

    if (Object.values(student).every((value) => value)) {
      setArray((prevStudent) => [
        ...prevStudent,
        {
          id: `${Date.now()}${Math.ceil(Math.random() * 1000)}`,
          ...student,
        },
      ]);
      setStudent({ name: "", instructor: "", course: "", score: "" });
    }
    console.log(student);
  };

  const handleSetStudent = (value) => setStudent(prevStudent => ({...prevStudent, ...value}));

  const removeStudent = (id) => {
    setArray((prevStudentList) =>
      prevStudentList.filter((student) => student.id != id)
    );
  };

  return (
    //Renderlanacak veri return içine yazılır

    <div className="App">
      <StudentForm createStudentObj={createStudentObj} handleSetStudent={handleSetStudent} error={error} student={student}/>
      <div className="container">
        {myArray.length ? (
          <StudentList studentList={myArray} removeStudent={removeStudent} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
