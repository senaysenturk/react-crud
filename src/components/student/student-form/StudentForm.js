import React from 'react'

const StudentForm = ({createStudentObj, handleSetStudent, error, student, isAddLoading,isDisabled}) => {
  
  return (
    <div className="register-form">
    <h1>Student Register</h1>

    <form action="">
      <input
        type="text"
        onChange={(e) => {
            handleSetStudent({name:e.target.value});
        }}
        name="name"
        id="name"
        placeholder="Name"
        value={student.name}
      />
      {!error.name && (
        <span id="name-error" className="error-msg">
          Please enter name
        </span>
      )}

      <input
        type="text"
        onChange={(e) => {
            handleSetStudent({instructor:e.target.value});
        }}
        name="instructor"
        id="instructor"
        placeholder="Instructor"
        value={student.instructor}
      />
      {!error.instructor && (
        <span id="instructor-error" className="error-msg">
          Please enter instructor name
        </span>
      )}

      <input
        type="text"
        onChange={(e) => {
            handleSetStudent({
            course: e.target.value,
          });
        }}
        name="course"
        id="course"
        placeholder="Course"
        value={student.course}
      />
      {!error.course && (
        <span id="course-error" className="error-msg">
          Please enter course
        </span>
      )}

      <input
        type="input"
        name="score"
        id="score"
        placeholder="Score"
        value={student.score}
        onChange={(e) => {
            handleSetStudent({score: e.target.value });
        }}
      />
      {!error.score && (
        <span id="score-error" className="error-msg">
          Please enter score
        </span>
      )}

      <button disabled={isDisabled} className={isDisabled ? ("button disabled") : ("button")} onClick={createStudentObj}>
      {isAddLoading ? (
        <div className="lds-dual-ring align-right-top"></div>       
      ) : "Submit"}
      </button>
      
    </form>
  </div>
  )
}

export default StudentForm