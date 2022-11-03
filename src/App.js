import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import StudentForm from "./components/student/student-form/StudentForm";
import StudentList from "./components/student/student-list/StudentList";

function App() {
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
  const [isAddLoading, setIsAddLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

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
    getStudents();
  }, []);

  const createStudentObj = async (e) => {
    e.preventDefault();
    setError(student);

    if (Object.values(student).every((value) => value)) {
      try {
        setIsDisabled(true);
        setIsAddLoading(true);

        const response = await axios.post(apiUrl, { ...student });
        if (response.status === 201) {
          const res = await axios.get(`${apiUrl}`);
          setStudentList(res.data);
        }
        setIsDisabled(false);
        setIsAddLoading(false);
      } catch (error) {
        setIsAddLoading(false);
        setIsDisabled(false);
        console.log(error.message);
      }

      setStudent({ name: "", instructor: "", course: "", score: "" });
    }
    console.log(student);
  };

  const handleSetStudent = (value) =>
    setStudent((prevStudent) => ({ ...prevStudent, ...value }));

  const removeStudent = async (id) => {
    try {
      const deleteRes = await axios.delete(`${apiUrl}/${id}`);
      if (deleteRes.status === 200) {
        const res = await axios.get(`${apiUrl}`);
        setStudentList(res.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <StudentForm
        createStudentObj={createStudentObj}
        handleSetStudent={handleSetStudent}
        error={error}
        student={student}
        isAddLoading={isAddLoading}
        isDisabled={isDisabled}
      />
      <div className="container">
        {isLoading ? (
          <h1 className="loadingText">Loading</h1>
        ) : studentList.length ? (
          <StudentList
            studentList={studentList}
            removeStudent={removeStudent}
          />
        ) : (
          <h4 className="loadingText">List is empty</h4>
        )}
      </div>
    </div>
  );
}

export default App;
