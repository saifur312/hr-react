import React, { useEffect, useState } from "react";


import './../../App.css';

function JobTitleList() {

    const [jobTitleList, setJobTitleList] = useState([]);

    useEffect(() => {
        const jobTitleList = async () => {
            fetch("http://localhost:8080/jobtitle-list")
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        return new Promise([])
                    }
                })
                .then(data => setJobTitleList(data))
                .catch(err => {
                    console.log(err)
                })
        }
        jobTitleList()
    }, [setJobTitleList])



    return (

        <div className="col-12 card bg-light mx-auto" style={{ padding: "3% 8%", marginTop: "6px" }}>
            <div className="form-group row col-lg-12">
                <table width="100%" className="table table-hover table-borderless">
                    <tbody className="text-center">
                        <tr className="table-header">
                            <th scope="col">SL</th>
                            <th scope="col">Title</th>
                            <th scope="col">Desc.</th>
                            <th scope="col">Responsibility</th>
                            <th scope="col">Status</th>
                        </tr>

                        {jobTitleList.map((jobTitle, index) => {
                            return (

                                <tr key={jobTitle.jobTitleId}>
                                    <td> {index + 1}  </td>
                                    <td> {jobTitle.title} </td>
                                    <td> {jobTitle.description}  </td>
                                    <td> {jobTitle.responsibilty} </td>
                                    <td> {jobTitle.staus} </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default JobTitleList;