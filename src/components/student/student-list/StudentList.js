import React from 'react'

const StudentList = ({studentList, removeStudent}) => {
  return (
    <div>
        <div className="card-list">
            {studentList.map((student, index) => (
              <div className="card" key={index}>
                <span
                  id={student.id}
                  onClick={()=> removeStudent(student.id)}
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
    </div>
  )
}

export default StudentList
