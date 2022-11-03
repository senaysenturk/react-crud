import React, { useState } from "react";

const StudentCard = ({ student, removeStudent }) => {
  const { name, instructor, course, score, id } = student;
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  return (
    <div className="card" key={id}>
      {isDeleteLoading ? (
        <div className="lds-dual-ring align-right-top"></div>
      ) : (
        <span
          id={id}
          onClick={() => {
            setIsDeleteLoading(true);
            removeStudent(id);
          }}
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
