// TaskDetail.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom';

// const TaskDetail = () => {
//   const { taskId } = useParams();

//   return (
//     <div>
//       <h2>Task Detail</h2>
//       <p>Task ID: {taskId}</p>
//     </div>
//   );
// };

// export default TaskDetail;

// TaskDetail.jsx
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const TaskDetail = () => {
  const { taskId } = useParams();
  const { state } = useLocation();
  const taskData = state?.taskData || {};

  return (
    <div>
      <h2>Task Detail</h2>
      <p>Task ID: {taskId}</p>
      <p>Task: {taskData}</p>
    </div>
  );
};

export default TaskDetail;


