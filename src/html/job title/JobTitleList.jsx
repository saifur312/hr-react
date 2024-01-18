import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import './../../App.css';

function JobTitleList() {
  const [jobTitleList, setJobTitleList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const jobTitleList = async () => {
      fetch('http://localhost:8080/jobtitle-list')
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return new Promise([]);
          }
        })
        .then((data) => setJobTitleList(data))
        .catch((err) => {
          console.log(err);
        });
    };
    jobTitleList();
  }, [setJobTitleList]);

  return (
    <div
      className="col-12 mx-auto"
      style={{ padding: '3% 8%', marginTop: '6px' }}
    >
      <h2 className="content-title">Job Titles</h2>
      <div className="form-group row col-lg-12">
        <table width="100%" className="table table-hover table-borderless">
          <tbody>
            <tr className="table-header">
              <th scope="col">SL</th>
              <th scope="col">Title</th>
              <th scope="col">Desc.</th>
              <th scope="col">Responsibility</th>
              <th scope="col">Status</th>
              {/* <th scope="col">Action</th> */}
            </tr>

            {jobTitleList.map((jobTitle, index) => {
              return (
                <tr key={jobTitle.jobTitleId}>
                  <td> {index + 1} </td>
                  <td> {jobTitle.title} </td>
                  <td> {jobTitle.description} </td>
                  <td> {jobTitle.responsibility} </td>
                  <td> {jobTitle.status ? 'Active' : 'InActive'} </td>
                  {/* <td>
                    <button
                      className="btn btn-success btn-sm"
                      // onClick={() => handleClick(jobTitle)}
                      onClick={() =>
                        navigate('/Update Job Title', {
                          state: { data: jobTitle },
                        })
                      }
                    >
                      Update
                    </button>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default JobTitleList;
