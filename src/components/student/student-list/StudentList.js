import React from 'react'
import StudentCard from '../student-card/StudentCard'

const StudentList = ({studentList, removeStudent,isDeleteLoading,editStudent, handleEditStudent}) => {
  return (
    <div>
        <div className="card-list">
            {studentList.map((student,index) => <StudentCard key ={student.id} student={student} removeStudent={removeStudent} isDeleteLoading={isDeleteLoading} editStudent={editStudent} handleEditStudent={handleEditStudent}/>)}
          </div>
    </div>
  )
}

export default StudentList
