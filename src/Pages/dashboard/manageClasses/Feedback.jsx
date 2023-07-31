import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Feedback = () => {
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleFeedback = (event) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    console.log(id, feedback);
    
      axiosSecure.patch(`/class-feedback/${id}`, {
        feedback,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: `You feedback successfully send`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
    event.target.reset();
    navigate("/manageClasses");
  };


  return (
    <div className="my-10">
      <form onSubmit={handleFeedback} className="max-w-md mt-10 mx-auto">
        <div>
          <textarea
            name="feedback"
            id=""
            cols="30"
            rows="8"
            className="my-input text-sm font-normal"
            placeholder="Your Feedback..."
            required
          ></textarea>
        </div>
        <button className="my-btn mt-5 w-full">Send Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
