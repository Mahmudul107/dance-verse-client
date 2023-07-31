import React from "react";

const FeedbackModal = ({ feedback }) => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Admin Feedback</h3>
          <p className="py-4">{feedback}</p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn btn-sm">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackModal;
