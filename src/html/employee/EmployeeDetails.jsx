// EmployeeDetailsComponent.jsx
import React from 'react';
import { useLocation } from "react-router-dom";


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//const EmployeeDetails = ({ data }) => {
const EmployeeDetails = () => {
  // Access the data from the route's state
  const { employeeData } = useLocation().state;

  return (
    <div>
      <h2>Employee Details</h2>
      {/* Display data here */}
      {employeeData && (
        <Row >
          <Col md={12}>
            <table width="100%" className="table table-hover table-borderless" style={{ textAlign: 'left' }}>
              <tbody >
                {/* <tr> <th>EmployeeId: </th> <td> {employeeData.employeeId}</td></tr>
                <tr> <th>NID: </th> <td> {employeeData.NID}</td></tr>
                <tr> <th>FingerId: </th> <td> {employeeData.fingerId}</td></tr>
                <tr> <th>FullName: </th> <td> {employeeData.fullName}</td></tr>
                <tr> <th>NickName: </th> <td> {employeeData.nickName}</td></tr>
                <tr> <th>DepartmentId: </th> <td> {employeeData.departmentId}</td></tr>
                <tr> <th>SectionId: </th> <td> {employeeData.sectionId}</td></tr>
                <tr> <th>JobId: </th> <td> {employeeData.jobId}</td></tr>
                <tr> <th>CategoryId: </th> <td> {employeeData.categoryId}</td></tr>
                <tr> <th>AddressId: </th> <td> {employeeData.addressId}</td></tr>
                <tr> <th>Religion: </th> <td> {employeeData.religion}</td></tr>
                <tr> <th>Gender: </th> <td> {employeeData.gender}</td></tr>
                <tr> <th>MobileNo: </th> <td> {employeeData.mobileNo}</td></tr>
                <tr> <th>LandPhone: </th> <td> {employeeData.landPhone}</td></tr>
                <tr> <th>Email: </th> <td> {employeeData.email}</td></tr>
                <tr> <th>Tin: </th> <td> {employeeData.tin}</td></tr>
                <tr> <th>Dob: </th> <td> {employeeData.dob}</td></tr>
                <tr> <th>Age: </th> <td> {employeeData.age}</td></tr>
                <tr> <th>AppliacationDate: </th> <td> {employeeData.appliacationDate}</td></tr>
                <tr> <th>InterviewDate: </th> <td> {employeeData.interviewDate}</td></tr>
                <tr> <th>ConfirmDate: </th> <td> {employeeData.confirmDate}</td></tr>
                <tr> <th>JoinDate: </th> <td> {employeeData.joinDate}</td></tr>
                <tr> <th>IncrementDate: </th> <td> {employeeData.incrementDate}</td></tr>
                <tr> <th>PromotionDate: </th> <td> {employeeData.promotionDate}</td></tr>
                <tr> <th>RetiermentDate: </th> <td> {employeeData.retiermentDate}</td></tr>
                <tr> <th>PfID: </th> <td> {employeeData.pfID}</td></tr>
                <tr> <th>PfJoinDate: </th> <td> {employeeData.pfJoinDate}</td></tr>
                <tr> <th>FinalSettleDate: </th> <td> {employeeData.finalSettleDate}</td></tr>
                <tr> <th>Nationality: </th> <td> {employeeData.nationality}</td></tr>
                <tr> <th>EmergencyContact: </th> <td> {employeeData.emergencyContact}</td></tr>
                <tr> <th>BloodGroup: </th> <td> {employeeData.bloodGroup}</td></tr>
                <tr> <th>MaritalStatus: </th> <td> {employeeData.maritalStatus}</td></tr>
                <tr> <th>BasicSalary: </th> <td> {employeeData.basicSalary}</td></tr>
                <tr> <th>Grade: </th> <td> {employeeData.grade}</td></tr>
                <tr> <th>LeaveBalance: </th> <td> {employeeData.leaveBalance}</td></tr>
                <tr> <th>Status: </th> <td> {employeeData.status}</td></tr>
                <tr> <th>ImageFile: </th> <td> {employeeData.imageFile}</td></tr>
                <tr> <th>Filler1: </th> <td> {employeeData.filler1}</td></tr>
                <tr> <th>Filler2: </th> <td> {employeeData.filler2}</td></tr>
                <tr> <th>Filler3: </th> <td> {employeeData.filler3}</td></tr>
                <tr> <th>Filler4: </th> <td> {employeeData.filler4}</td></tr>
                <tr> <th>Filler5: </th> <td> {employeeData.filler5}</td></tr>
                <tr> <th>CreatedDate: </th> <td> {employeeData.createdDate}</td></tr>
                <tr> <th>CreatedBy: </th> <td> {employeeData.createdBy}</td></tr>
                <tr> <th>CreatedIp: </th> <td> {employeeData.createdIp}</td></tr>
                <tr> <th>UpdatedDate: </th> <td> {employeeData.updatedDate}</td></tr>
                <tr> <th>UpdatedBy: </th> <td> {employeeData.updatedBy}</td></tr>
                <tr> <th>UpdatedIp: </th> <td> {employeeData.updatedIp}</td></tr> */}
                
                <tr> 
                  <th>EmployeeId: </th> <td> {employeeData.employeeId}</td>
                  <th>NID: </th> <td> {employeeData.NID}</td>
                  <th>FingerId: </th> <td> {employeeData.fingerId}</td>
                </tr>
                <tr> 
                  <th>FullName: </th> <td> {employeeData.fullName}</td>
                  <th>NickName: </th> <td> {employeeData.nickName}</td>
                  <th>DepartmentId: </th> <td> {employeeData.departmentId}</td>
                </tr>
                <tr> 
                  <th>SectionId: </th> <td> {employeeData.sectionId}</td>
                  <th>JobId: </th> <td> {employeeData.jobId}</td>
                  <th>CategoryId: </th> <td> {employeeData.categoryId}</td>
                </tr>
                <tr> 
                  <th>AddressId: </th> <td> {employeeData.addressId}</td>
                  <th>Religion: </th> <td> {employeeData.religion}</td>
                  <th>Gender: </th> <td> {employeeData.gender}</td>
                </tr>
                <tr> 
                  <th>MobileNo: </th> <td> {employeeData.mobileNo}</td>
                  <th>LandPhone: </th> <td> {employeeData.landPhone}</td>
                  <th>Email: </th> <td> {employeeData.email}</td>
                </tr>
                <tr> 
                  <th>Tin: </th> <td> {employeeData.tin}</td>
                  <th>Dob: </th> <td> {employeeData.dob}</td>
                  <th>Age: </th> <td> {employeeData.age}</td>
                </tr>
                <tr> 
                  <th>AppliacationDate: </th> <td> {employeeData.appliacationDate}</td>
                  <th>InterviewDate: </th> <td> {employeeData.interviewDate}</td>
                  <th>ConfirmDate: </th> <td> {employeeData.confirmDate}</td>
                </tr>
                <tr> 
                  <th>JoinDate: </th> <td> {employeeData.joinDate}</td>
                  <th>IncrementDate: </th> <td> {employeeData.incrementDate}</td>
                  <th>PromotionDate: </th> <td> {employeeData.promotionDate}</td>
                </tr>
                <tr> 
                  <th>RetiermentDate: </th> <td> {employeeData.retiermentDate}</td>
                  <th>PfID: </th> <td> {employeeData.pfID}</td>
                  <th>PfJoinDate: </th> <td> {employeeData.pfJoinDate}</td>
                </tr>
                <tr> 
                  <th>FinalSettleDate: </th> <td> {employeeData.finalSettleDate}</td>
                  <th>Nationality: </th> <td> {employeeData.nationality}</td>
                  <th>EmergencyContact: </th> <td> {employeeData.emergencyContact}</td>
                </tr>
                <tr> 
                  <th>BloodGroup: </th> <td> {employeeData.bloodGroup}</td>
                  <th>MaritalStatus: </th> <td> {employeeData.maritalStatus}</td>
                  <th>BasicSalary: </th> <td> {employeeData.basicSalary}</td>
                </tr>
                <tr> 
                  <th>Grade: </th> <td> {employeeData.grade}</td>
                  <th>LeaveBalance: </th> <td> {employeeData.leaveBalance}</td>
                  <th>Status: </th> <td> {employeeData.status}</td>
                </tr>
                <tr> 
                  <th>ImageFile: </th> <td> {employeeData.imageFile}</td>
                  <th>Filler1: </th> <td> {employeeData.filler1}</td>
                  <th>Filler2: </th> <td> {employeeData.filler2}</td>
                </tr>
                <tr> 
                  <th>Filler3: </th> <td> {employeeData.filler3}</td>
                  <th>Filler4: </th> <td> {employeeData.filler4}</td>
                  <th>Filler5: </th> <td> {employeeData.filler5}</td>
                </tr>
                <tr> 
                  <th>CreatedDate: </th> <td> {employeeData.createdDate}</td>
                  <th>CreatedBy: </th> <td> {employeeData.createdBy}</td>
                  <th>CreatedIp: </th> <td> {employeeData.createdIp}</td>
                </tr>
                <tr> 
                  <th>UpdatedDate: </th> <td> {employeeData.updatedDate}</td>
                  <th>UpdatedBy: </th> <td> {employeeData.updatedBy}</td>
                  <th>UpdatedIp: </th> <td> {employeeData.updatedIp}</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default EmployeeDetails;
