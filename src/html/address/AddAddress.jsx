import { useState, useEffect } from 'react';
import './../../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { allDistrict } from '../../utils/DistrictBD';
import { allSubDistrict } from '../../utils/SubDistrict';

function AddAddress() {
  const [employeeId, setEmployeeId] = useState('');
  const [addressId, setAddressId] = useState('');
  const [addressType, setAddressType] = useState('');
  const [division, setDivision] = useState('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [city, setCity] = useState('');
  const [village, setVillage] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [areaCode, setArea] = useState('');
  const [region, setRegion] = useState('');
  const [roadNo, setRoadNo] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [apartmentNo, setApartmentNo] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [employees, setEmployees] = useState('');
  const navigate = useNavigate();

  //const districtList = districts;
  const divisions = [
    'Dhaka',
    'Chattogram',
    'Rajshahi',
    'Sylhet',
    'Barishal',
    'Rangpur',
    'Mymensing',
    'Khulna',
  ];

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(`http://localhost:8080/employee-list`);
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchEmployees();
  }, [setEmployees]);

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/address-add-save', {
        method: 'POST',
        body: JSON.stringify({
          employeeId: employeeId,
          addressId: addressId,
          addressType: addressType,
          division: division,
          district: district,
          subDistrict: subDistrict,
          city: city,
          village: village,
          postalCode: postalCode,
          areaCode: areaCode,
          region: region,
          roadNo: roadNo,
          houseNo: houseNo,
          apartmentNo: apartmentNo,
          status: status,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        // Handle the data (EmployeeDto) as needed
        console.log(data);
        setMessage('Data saved successfull');
        // Navigate to the Employee Details route with the data as state
        navigate('/Add Address');

        setEmployeeId('');
        setAddressId('');
        setAddressType('');
        setDivision('');
        setDistrict('');
        setSubDistrict('');
        setCity('');
        setVillage('');
        setPostalCode('');
        setRegion('');
        setRoadNo('');
        setHouseNo('');
        setApartmentNo('');
        setStatus('');
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      <Col md={10}>
        <Form
          onSubmit={handleSubmit}
          action=""
          method="POST"
          className="card-body label"
          style={{ backgroundColor: '#323234', color: '#fff' }}
        >
          <div className="row">
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="employeeId" className="col-form-label col-lg-4">
                <span className="float-left">Employee ID </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <select
                  className="form-control"
                  id="employeeId"
                  name="employeeId"
                  onChange={(event) => setEmployeeId(event.target.value)}
                >
                  <option value="0">Select One</option>
                  {employees &&
                    employees.map((emp) => (
                      <option key={emp.employeeId} value={emp.employeeId}>
                        {emp.fullName}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="addressId" className="col-form-label col-lg-4">
                <span className="float-left">Address Id</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  id="addressId"
                  name="addressId"
                  type="text"
                  required="required"
                  className="form-control"
                  readonly="readonly"
                  onChange={(event) => setAddressId(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="addressType" className="col-form-label col-lg-4">
                <span className="float-left">Address Type</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <select
                  id="addressType"
                  name="addressType"
                  className="form-control"
                  onChange={(event) => setAddressType(event.target.value)}
                >
                  <option value="0">Select One</option>
                  <option value="Present">Present</option>
                  <option value="Permanent">Permanent</option>
                  <option value="Permanent">Both</option>
                </select>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="division" className="col-form-label col-lg-4">
                <span className="float-left">Division</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <select
                  id="division"
                  name="division"
                  className="form-control"
                  onChange={(event) => setDivision(event.target.value)}
                >
                  <option value="0">Select One</option>
                  {divisions.sort().map((div) => (
                    <option value={div}> {div} </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="district" className="col-form-label col-lg-4">
                <span className="float-left">District </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <select
                  id="district"
                  name="district"
                  className="form-control"
                  onChange={(event) => setDistrict(event.target.value)}
                >
                  <option value="0">Select One</option>
                  {allDistrict()
                    .sort()
                    .map((distr) => (
                      <option value={distr}> {distr} </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="subDistrict" className="col-form-label col-lg-4">
                <span className="float-left">Sub District</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <select
                  id="subDistrict"
                  name="subDistrict"
                  className="form-control"
                  onChange={(event) => setSubDistrict(event.target.value)}
                >
                  <option value="0">Select One</option>
                  {allSubDistrict()
                    .sort()
                    .map((subdist) => (
                      <option value={subdist}>{subdist}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="city" className="col-form-label col-lg-4">
                <span className="float-left">City</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  id="city"
                  name="city"
                  type="text"
                  required="required"
                  className="form-control"
                  onChange={(event) => setCity(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="village" className="col-form-label col-lg-4">
                <span className="float-left">Village</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  id="village"
                  name="village"
                  type="text"
                  required="required"
                  className="form-control"
                  onChange={(event) => setVillage(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="postalCode" className="col-form-label col-lg-4">
                <span className="float-left">Postal Code </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  required="required"
                  className="form-control"
                  onChange={(event) => setPostalCode(event.target.value)}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="area" className="col-form-label col-lg-4">
                <span className="float-left">Area </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  id="area"
                  name="area"
                  type="text"
                  required="required"
                  className="form-control"
                  onChange={(event) => setArea(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="region" className="col-form-label col-lg-4">
                <span className="float-left">Region</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  id="region"
                  name="region"
                  type="text"
                  className="form-control"
                  onChange={(event) => setRegion(event.target.value)}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="roadNo" className="col-form-label col-lg-4">
                <span className="float-left">Road No</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  id="roadNo"
                  name="roadNo"
                  type="text"
                  className="form-control"
                  onChange={(event) => setRoadNo(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="houseNo" className="col-form-label col-lg-4">
                <span className="float-left">House No</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  id="houseNo"
                  name="houseNo"
                  type="text"
                  className="form-control"
                  onChange={(event) => setHouseNo(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="apartmentNo" className="col-form-label col-lg-4">
                <span className="float-left">Apartment No</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  id="apartmentNo"
                  name="apartmentNo"
                  type="text"
                  className="form-control"
                  onChange={(event) => setApartmentNo(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="status" className="col-form-label col-lg-4">
                <span className="float-left">Status</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <select
                  id="status"
                  name="status"
                  className="form-control"
                  onChange={(event) => setStatus(event.target.value)}
                >
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
            </div>
          </div>
          <Row>
            <Col md={4}>
              <Button className="justify-content-md-start m-4" type="submit">
                Submit
              </Button>
            </Col>

            <Col md={4}>
              <button className="btn btn-success m-4" type="submit">
                Save
              </button>
            </Col>

            <Col md={4}>
              <button className="justify-content-md-end btn btn-danger m-4">
                Cancel
              </button>
            </Col>
          </Row>
        </Form>

        <div style={{ color: 'red' }}> {message} </div>
      </Col>
    </Row>
  );
}
export default AddAddress;
