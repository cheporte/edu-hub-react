import React from "react";

import styles from "./StudentList.module.css";

type props = {  courseId: number,
}

const StudentList: React.FC<props> = ({ courseId }) => {
  console.log(courseId);
  
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Name/Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Submission Status</th>
          <th scope="col">Last Updated</th>
          <th scope="col">Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>john.doe@eduhub.com</td>
          <td>Submissed</td>
          <td>Yesterday</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  );
}

export default StudentList;