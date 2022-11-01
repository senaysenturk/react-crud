import React from "react";

const StudentCard = ({ student, removeStudent, isDeleteLoading }) => {
  const { name, instructor, course, score, id } = student;
  console.log(id);
  return (
    <div className="card" key={id}>
      {isDeleteLoading ? (
        <div class="lds-dual-ring align-right-top"></div>
      ) : (
        <span
          id={id}
          onClick={() => removeStudent(id)}
          className="align-right-top"
        >
          x
        </span>
      )}

      <h3>{name}</h3>
      <p>{instructor}</p>
      <p>{course}</p>
      <p>{score}</p>
    </div>
  );
};

export default StudentCard;
