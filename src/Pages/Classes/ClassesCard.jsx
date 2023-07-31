import React from 'react';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const ClassesCard = ({ data ,handleSelectClass}) => {
    const { _id, classImage, className, email, price, name, availableSeats } = data;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className={`grid md:grid-cols-2 gap-3 p-2 rounded-md ${availableSeats === 0 ? 'bg-red-300' :''}`}>
            <figure>
                <img src={classImage} alt="class image" className="w-full h-80 object-cover" />
            </figure>
            <div className=" flex flex-col">
                <h3 className="text-2xl font-semibold">{className}</h3>
                <h5 className="text-lg font-medium">Instructor: {name}</h5>
                <p><span className="font-medium">Available Seats:</span> {availableSeats}</p>
                <p><span className="font-medium">Price:</span> ${price}</p>
                {/* <p><span className="font-medium">Summery:</span> {summary.slice(0,200)}</p> */}
                <button onClick={()=>handleSelectClass(data)} className={`mt-5 md:mt-auto ${isAdmin || isInstructor || availableSeats === 0 ? 'disabled-btn' : ''}`}>Select Now</button>
            </div>
        </div>
    );
};

export default ClassesCard;