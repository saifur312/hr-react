// import React, { useState } from 'react';

// import './../App.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { useFormik } from 'formik';

// function Login() {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');

//   const [validated, setValidated] = useState(false);
//   // const navigate = useNavigate();
//   // const handleSubmit = (event) => {
//   //   const form = event.currentTarget;
//   //   if (form.checkValidity() === false) {
//   //     event.preventDefault();
//   //     event.stopPropagation();
//   //   }

//   //   setValidated(true);
//   // };

//   const validate = (values) => {
//     const errors = {};
//     if (!values.userId) {
//       errors.userId = 'Use Id is Required';
//     } else if (values.userId.length > 8) {
//       errors.userId = 'Must be 8 digits or less';
//     }

//     if (!values.password) {
//       errors.password = 'Password is Required';
//     } else if (values.password.length < 8) {
//       errors.password = 'Must be 8 characters or more';
//     }

//     return errors;
//   };

//   const formik = useFormik({
//     initialValues: {
//       userId: '',
//       password: '',
//     },
//     validate,
//     // onSubmit: values => {
//     //     alert(JSON.stringify(values, null, 2));
//     // },
//   });

//   // let handleSubmit = async (e) => {
//   //     navigate('/verify-login')
//   // }

//   return (
//     <Container>
//       {/* <TopMenuBar /> */}

//       {/* <LeftSidebar /> */}

//       <Container>
//         <Row className="justify-content-md-center mt-4">
//           {/* <Col sm={1}>sm=8</Col> */}
//           <Col md={6}>
//             {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
//             <Form
//               onSubmit={formik.handleSubmit}
//               action="employee-login"
//               method="POST"
//             >
//               <Form.Group className="mb-3" controlId="userId">
//                 <Form.Label> User Id :</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter user Id"
//                   onChange={formik.handleChange}
//                   value={formik.values.userId}
//                 />
//               </Form.Group>
//               {formik.touched.userId && formik.errors.userId ? (
//                 <div>{formik.errors.userId}</div>
//               ) : null}

//               <Form.Group className="mb-3" controlId="password">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   onChange={formik.handleChange}
//                   value={formik.values.password}
//                 />
//               </Form.Group>

//               {formik.touched.password && formik.errors.password ? (
//                 <div>{formik.errors.password}</div>
//               ) : null}

//               <Row>
//                 <Col md={6}>
//                   <Button
//                     className="justify-content-md-start "
//                     variant="primary"
//                     type="submit"
//                   >
//                     Send Code
//                   </Button>
//                 </Col>

//                 <Col md={6}>
//                   <Button
//                     className="justify-content-md-end"
//                     variant="primary"
//                     type="submit"
//                   >
//                     Forgot Password
//                   </Button>
//                 </Col>
//               </Row>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Login;
