import React from 'react';
import Modal from 'react-modal';


const EmployeeModal = ({ isOpen, onClose, data }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2 style={{ float: 'left' }}>Employee Details </h2>
      
      <button className='btn btn-danger btn-sm float-right' onClick={onClose} style={{ float: 'right' }}>X</button>
      {/* Display data here */}
      {data && (
        <table width="20%" className="table table-hover table-borderless" style={{ textAlign: 'left' }}>
          <tbody >
            <tr> 
              <th>EmployeeId: </th> <td> {data.employeeId}</td>
              <th>NID: </th> <td> {data.NID}</td>
              <th>FingerId: </th> <td> {data.fingerId}</td>
            </tr>
            <tr> 
              <th>FullName: </th> <td> {data.fullName}</td>
              <th>NickName: </th> <td> {data.nickName}</td>
              <th>DepartmentId: </th> <td> {data.departmentId}</td>
            </tr>
            <tr> 
              <th>SectionId: </th> <td> {data.sectionId}</td>
              <th>JobId: </th> <td> {data.jobId}</td>
              <th>CategoryId: </th> <td> {data.categoryId}</td>
            </tr>
            <tr> 
              <th>AddressId: </th> <td> {data.addressId}</td>
              <th>Religion: </th> <td> {data.religion}</td>
              <th>Gender: </th> <td> {data.gender}</td>
            </tr>
            <tr> 
              <th>MobileNo: </th> <td> {data.mobileNo}</td>
              <th>LandPhone: </th> <td> {data.landPhone}</td>
              <th>Email: </th> <td> {data.email}</td>
            </tr>
            <tr> 
              <th>Tin: </th> <td> {data.tin}</td>
              <th>Dob: </th> <td> {data.dob}</td>
              <th>Age: </th> <td> {data.age}</td>
            </tr>
            <tr> 
              <th>AppliacationDate: </th> <td> {data.appliacationDate}</td>
              <th>InterviewDate: </th> <td> {data.interviewDate}</td>
              <th>ConfirmDate: </th> <td> {data.confirmDate}</td>
            </tr>
            <tr> 
              <th>JoinDate: </th> <td> {data.joinDate}</td>
              <th>IncrementDate: </th> <td> {data.incrementDate}</td>
              <th>PromotionDate: </th> <td> {data.promotionDate}</td>
            </tr>
            <tr> 
              <th>RetiermentDate: </th> <td> {data.retiermentDate}</td>
              <th>PfID: </th> <td> {data.pfID}</td>
              <th>PfJoinDate: </th> <td> {data.pfJoinDate}</td>
            </tr>
            <tr> 
              <th>FinalSettleDate: </th> <td> {data.finalSettleDate}</td>
              <th>Nationality: </th> <td> {data.nationality}</td>
              <th>EmergencyContact: </th> <td> {data.emergencyContact}</td>
            </tr>
            <tr> 
              <th>BloodGroup: </th> <td> {data.bloodGroup}</td>
              <th>MaritalStatus: </th> <td> {data.maritalStatus}</td>
              <th>BasicSalary: </th> <td> {data.basicSalary}</td>
            </tr>
            <tr> 
              <th>Grade: </th> <td> {data.grade}</td>
              <th>LeaveBalance: </th> <td> {data.leaveBalance}</td>
              <th>Status: </th> <td> {data.status}</td>
            </tr>
            <tr> 
              <th>ImageFile: </th> <td> {data.imageFile}</td>
              <th>Filler1: </th> <td> {data.filler1}</td>
              <th>Filler2: </th> <td> {data.filler2}</td>
            </tr>
            <tr> 
              <th>Filler3: </th> <td> {data.filler3}</td>
              <th>Filler4: </th> <td> {data.filler4}</td>
              <th>Filler5: </th> <td> {data.filler5}</td>
            </tr>
            <tr> 
              <th>CreatedDate: </th> <td> {data.createdDate}</td>
              <th>CreatedBy: </th> <td> {data.createdBy}</td>
              <th>CreatedIp: </th> <td> {data.createdIp}</td>
            </tr>
            <tr> 
              <th>UpdatedDate: </th> <td> {data.updatedDate}</td>
              <th>UpdatedBy: </th> <td> {data.updatedBy}</td>
              <th>UpdatedIp: </th> <td> {data.updatedIp}</td>
            </tr>
          </tbody>
        </table>
      )}
      <button className='btn btn-danger btn-lg' onClick={onClose}>Close</button>
    </Modal>
  );
};

export default EmployeeModal;