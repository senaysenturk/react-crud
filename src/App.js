import axios from "axios";
import { useEffect } from "react";
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
const apiUrl = "http://localhost:5500/students";
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
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  //axios.get("http://localhost:5500/students").then(res=>setStudent(res.data));
  const getStudents = async () => {
    try {
      setIsLoading(true);
      axios.get(apiUrl).then((res) => {
        setStudentList(res.data);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // axios.get("http://localhost:5500/students").then((res) => {
    //     // console.log("Axios get");
    //     setStudentList(res.data);
    //   });

    getStudents();
  }, []);

  const createStudentObj = async(e) => {
    e.preventDefault();
    setError(student);
    // if (!student.score) {
    //   student.score = 0;
    // }

    if (Object.values(student).every((value) => value)) {
      // setStudentList((prevStudent) => [
      //   ...prevStudent,
      //   {
      //     id: `${Math.ceil(Math.random() * 1000)}`,
      //     ...student,
      //   },
      // ]);
      try {
        axios.post(apiUrl, {
          name: student.name,
          instructor: student.instructor,
          course: student.course,
          score: student.score,
          id: `${Math.ceil(Math.random() * 1000)}`,
        });
          await axios
          .get(`${apiUrl}`)
          .then((res) => setStudentList(res.data));
      } catch (error) {
        console.log(error.message);
      }

      setStudent({ name: "", instructor: "", course: "", score: "" });
    }
    console.log(student);
  };

  const handleSetStudent = (value) =>
    setStudent((prevStudent) => ({ ...prevStudent, ...value }));

  const removeStudent = async(id) => {
    try {
      setIsDeleteLoading(true);
      await axios
        .delete(`${apiUrl}/${id}`);
        await axios
        .get(`${apiUrl}`)
        .then((res) => setStudentList(res.data));
      setIsDeleteLoading(false);
    } catch (error) {
      setIsDeleteLoading(false);
      console.log(error.message);
    }
  };

  return (
    //Renderlanacak veri return içine yazılır

    <div className="App">
      <StudentForm
        createStudentObj={createStudentObj}
        handleSetStudent={handleSetStudent}
        error={error}
        student={student}
      />
      <div className="container">
        {isLoading ? (
          <h1 className="loadingText">Loading</h1>
        ) : studentList.length ? (
          <StudentList
            studentList={studentList}
            removeStudent={removeStudent}
            isDeleteLoading={isDeleteLoading}
          />
        ) : (
          <h4 className="loadingText">List is empty</h4>
        )}
      </div>
    </div>
  );
}

export default App;
