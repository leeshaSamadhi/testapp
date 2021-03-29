import React from "react";

export const Form = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>

<div className="form-group">
        <label htmlFor="name">Job Title</label>
        <input className="form-control" id="name" />
      </div>
            <div className="form-group">
                <label htmlFor="jobdesc">Job Description</label>
                <input
                    
                    className="form-control"
                    id="jobdesc"
                    placeholder="Job Description"
                />
            </div>
            <label>Job Type</label>
            <div className="form-group">
                <input type="radio" name="time" id="jobtype" value="fullTime" />
                <label htmlFor="jobtype">Full Time</label>
                <br/>
                <input type="radio" name="fulltime" id="jobtype" value="partTime" />
                <label htmlFor="jobtype">Part Time</label>
            </div>
                <div className="form-group">
                    <button className="form-control btn btn-primary" type="submit">
                        Submit
        </button>
                </div>
    </form>
  );
};
export default Form;
