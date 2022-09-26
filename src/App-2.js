import { useState } from "react";
import "./App.css";

function App() {
  //Scriptlerin yazıldığı kısım
  // let name = "React";
  // const handleClick = (e) => {
  //   console.log("Clicked");
  // };

  const [name, setName] = useState("");
  const [instructor, setInstructor] = useState("");
  const [course, setCourse] = useState("");
  const [score, setScore] = useState("");
  const [myArray, setArray] = useState([]);
  const [nameError, setNameError] = useState(false);
  const [instructorError, setInstructorError] = useState(false);
  const [courseError, setCourseError] = useState(false);
  const [scoreError, setScoreError] = useState(false);
  const [query, setQuery] = useState("");

  const changeInputName = (e) => {
    setName(e.target.value);
  };

  const changeInputInstructor = (e) => {
    setInstructor(e.target.value);
  };

  const changeInputCourse = (e) => {
    setCourse(e.target.value);
  };
  const changeInputScore = (e) => {
    setScore(e.target.value);
  };

  const throwErrorMsg = (msg) => {
    throw new Error(msg);
  };

  const setError = () => {
    // const inputs = document.querySelectorAll("input");
    // inputs.forEach((input) => {
    //   if (!input.value) {
    //     input.nextSibling.classList.add("error-msg");
    //     input.nextSibling.innerText = `Please enter ${input.name}`;
    //   } else {
    //     input.nextSibling.classList.remove("error-msg");
    //     input.nextSibling.innerText = "";
    //   }
    // });
    // const pElement = document.querySelector(`#${id}`);
    // pElement.innerText = msg;
    // pElement.classList.add("error-msg");
  };

  const createStudentObj = (e) => {
    setNameError(false);
    setInstructorError(false);
    setCourseError(false);
    setScoreError(false);
    e.preventDefault();
    if (name && instructor && course && score) {
      const obj = {
        name: name,
        instructor: instructor,
        course: course,
        score: score,
        id: Math.floor(Date.now() + Math.random()),
      };

      //students.push(obj);
      //  console.log("obj:", obj);
      //...arr -> spread'dir.
      setArray([...myArray, obj]); //Asenkrondur. Satır bittiğinde arr'in değeri değişmez. Bu yüzden console.log(myArray)de bir önceki değer görünür
      //console.log(myArray);
      console.log([...myArray, obj]);

      setName("");
      setInstructor("");
      setCourse("");
      setScore("");
    } else {
      !name && setNameError(true);
      !instructor && setInstructorError(true);
      !course && setCourseError(true);
      !score && setScoreError(true);
    }
  };

  const removeStudent = (e) => {
    console.log("Parent: " + e.target.id);
    // const temp = [...myArray];
    // temp.splice(myArray.findIndex(
    //   (student) => student.id == e.target.parentNode.id
    // ), 1);
    // setArray([...temp]);

    // setArray([
    //   ...myArray.splice(
    //     myArray.findIndex((student) => student.id == e.target.parentNode.id),
    //     1
    //   ),
    // ]);
    setArray(myArray.filter((student) => student.id != e.target.id));
  };

  return (
    //Renderlanacak veri return içine yazılır

    <div className="App">
      <div className="register-form">
        <h1>Student Register</h1>

        <form action="">
          <input
            type="text"
            onChange={changeInputName}
            name="name"
            id="name"
            placeholder="Name"
            value={name}
          />
          {nameError ? (
            <span id="name-error" className="error-msg">
              Please enter name
            </span>
          ) : null}

          <input
            type="text"
            onChange={changeInputInstructor}
            name="instructor"
            id="instructor"
            placeholder="Instructor"
            value={instructor}
          />
          {instructorError ? (
            <span id="instructor-error" className="error-msg">
              Please enter instructor name
            </span>
          ) : null}

          <input
            type="text"
            onChange={changeInputCourse}
            name="course"
            id="course"
            placeholder="Course"
            value={course}
          />
          {courseError ? (
            <span id="course-error" className="error-msg">
              Please enter course
            </span>
          ) : null}

          <input
            type="input"
            name="score"
            id="score"
            placeholder="Score"
            value={score}
            onChange={changeInputScore}
          />
          {scoreError ? (
            <span id="score-error" className="error-msg">
              Please enter score
            </span>
          ) : null}

          <button className="button" onClick={createStudentObj}>
            Submit
          </button>
        </form>
      </div>
      <div className="container">
        <input
          type="input"
          name="search"
          id="search"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        {myArray.length ? (
          <div className="card-list">
            {myArray
              .filter((arr) => arr.name.toLowerCase().includes(query))
              .map((student, index) => (
                <div className="card" key={index}>
                  <span
                    id={student.id}
                    onClick={removeStudent}
                    className="removeButton"
                  >
                    x
                  </span>
                  <h3>{student.name}</h3>
                  <p>{student.instructor}</p>
                  <p>{student.course}</p>
                  <p>{student.score}</p>
                </div>
              ))}
          </div>
        ) : 
        // <table className="table">
        //   <thead>
        //     <tr>
        //       <th>Name</th>
        //       <th>Instructor</th>
        //       <th>Course</th>
        //       <th>Score</th>
        //       <th>Action</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {myArray.map((student, index) => (
        //       <tr key={index} data-index={index} id={student.id}>
        //         <td>{student.name}</td>
        //         <td>{student.instructor}</td>
        //         <td>{student.course}</td>
        //         <td>{student.score}</td>
        //         <td onClick={removeStudent}>X</td>
        //         {/* <td onClick={()=>{myArray.splice(index,1)
        //         setArray([...myArray])
        //         console.log(myArray)}
        //         }>x</td> */}
        //       </tr>
        //     ))}
        //   </tbody>
        // </table>

        null}
      </div>
    </div>
  );
}

export default App;
