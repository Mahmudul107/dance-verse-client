import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const SelectedClassesCard = ({ classData, index, handleRemoveClass }) => {
  const { _id, classImage, className, price } = classData;
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
      <td>{price} $</td>

      <td>
        <Link to={`/payment/${_id}`}>
          {" "}
          <button className="btn-small bg-green-300 px-2 py-1 rounded-md ">Pay Now</button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleRemoveClass(_id)}
          className="btn-small text-red-500 rounded-full"
        >
          <AiTwotoneDelete className="w-6 h-6" />
        </button>
      </td>
    </tr>
  );
};

export default SelectedClassesCard;
