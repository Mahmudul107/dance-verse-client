import React from "react";

const MyClassesTable = ({classData, index}) => {
  const { className, classImage, price, status, feedback } = classData;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={classImage} alt="Class Photo" />
          </div>
        </div>
      </td>
      <td>{className}</td>
      <td>{enrolled_students}</td>
      <td
        className={`${
          status === "Approved"
            ? "text-green-600"
            : status === "Denied"
            ? "text-red-600"
            : ""
        }`}
      >
        {status}
      </td>
      <td>
        {classData.feedback && (
          <>
            <label htmlFor="my_modal_6" className="btn-small">
              View feedback
            </label>
            <FeedbackViewModal feedback={feedback} />
          </>
        )}
      </td>
      <td>
        <button className="btn-small">Update</button>
      </td>
    </tr>
  );
};

export default MyClassesTable;
