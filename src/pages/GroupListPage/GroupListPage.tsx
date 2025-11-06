/*
Page pipeline:
Load a table of all students -> upon selection display a report viewer with </> buttons
for navigating between students, and a button to close review.
*/

import React from "react";
import StudentList from "../../components/StudentList";

type props = {
  courseId: number,
  assignmentId: number,
}

const GroupListPage: React.FC<props> = ({ courseId, assignmentId }) => {
  // These IDs will be used to retrieve student lists and their assignments from database
  console.log(courseId);
  console.log(assignmentId);
  
  return (
    <>
      <StudentList courseId={1}/>
    </>
  );
}

export default GroupListPage;