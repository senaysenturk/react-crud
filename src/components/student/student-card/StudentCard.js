import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";

const StudentCard = ({
  student,
  removeStudent,
  editStudent,
  handleEditStudent,
}) => {
  const { name, instructor, course, score, id } = student;
  const [isLoading, setIsLoading] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  return (
    <div className="card" key={id}>
      <div className="card-buttons">
        {isEditable ? (
          <span className="save-button">
            <AiOutlineCheck
              onClick={() => {
                setIsEditable(false);
                setIsSaveEnabled(false);
                editStudent(id);
              }}
            />
          </span>
        ) : (
          <span
            id={id}
            className="edit-button"
            onClick={() => {
              setIsEditable(true);
              setIsSaveEnabled(true);
            }}
          >
            <AiOutlineEdit />
          </span>
        )}
        {isLoading ? (
          <div className="lds-dual-ring"></div>
        ) : (
          <span
            id={id}
            onClick={() => {
              setIsLoading(true);
              removeStudent(id);
            }}
            className="delete-button"
          >
            <AiOutlineDelete />
          </span>
        )}
      </div>
      <div className="card-content">
        <h3
          value={name}
          contentEditable={isEditable}
          suppressContentEditableWarning="true"
          onInput={(e) => {
            handleEditStudent({ name: e.currentTarget.textContent });
          }}
        >
          {name}
        </h3>
        <p
          value={instructor}
          contentEditable={isEditable}
          suppressContentEditableWarning="true"
          onInput={(e) => {
            handleEditStudent({ instructor: e.currentTarget.textContent });
          }}
        >
          {instructor}
        </p>
        <p
          value={course}
          contentEditable={isEditable}
          suppressContentEditableWarning="true"
          onInput={(e) => {
            handleEditStudent({ course: e.currentTarget.textContent });
          }}
        >
          {course}
        </p>
        <p
          value={score}
          contentEditable={isEditable}
          suppressContentEditableWarning="true"
          onInput={(e) => {
            handleEditStudent({ score: e.currentTarget.textContent });
          }}
        >
          {score}
        </p>
      </div>
    </div>
  );
};

export default StudentCard;
