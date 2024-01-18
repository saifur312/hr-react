import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import './../../App.css';
//import { useNavigate } from 'react-router-dom';

function DummyList() {
  const [dummy, setDummy] = useState([]);
  //const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/dummy-list`);
        const data = await response.json();
        setDummy(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setDummy]);

  return (
    <div className="col-12  mx-auto" style={{ marginTop: '6px' }}>
      <div className="form-group row col-lg-12">
        <table width="100%" className="table table-hover table-borderless">
          <tbody>
            <tr className="table-header">
              <th scope="col">SL</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Serial</th>
            </tr>

            {dummy.map((d, index) => {
              return (
                <tr key={d.id}>
                  <td> {index + 1} </td>
                  <td> {d.id} </td>
                  <td> {d.name} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default DummyList;
