import React, { useEffect, useState } from "react";


import './../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {useNavigate, useParams} from 'react-router-dom';



function Employee() {
    const [menu, setMenu] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect( () => {
        const menus = async() => {
            const response = await fetch("http://localhost:8080/user-menu-list?userId=" + params.id);
    
            // const data = await response.json();
            // setMenu(data.data);
            setMenu(await response.json());
            console.log("Fetched " + response.json);
        }
        menus()
    }, [params.id, setMenu])



    console.log("Menus " + menu);

    function testNav(url){
        console.log(url.menu);
        navigate('/'+ url.menu)
        //navigate('/Add_new_account')
        
    }

    return (
            <Container>
                <Row className="justify-content-md-center mt-4" >
                    {/* <Col sm={1}>sm=8</Col> */}
                    <Col md={6}>
                        {/* <h2>Employee Profile</h2> */}
                        <div> 
                            { menu.map( (menu) => {
                                return(
                                // <h4 href="#"> {menu} </h4>
                                // <h4> <Button variant="btn btn-primary" onClick={() => 
                                //     navigate('/login')}> {menu}  </Button>
                                // </h4>
                                <h4> <Button variant="btn btn-primary" onClick={() => 
                                    testNav({menu})}> {menu}  </Button>
                                </h4>
                            )
                            } ) }
                        </div>
                    </Col>
                </Row>
            </Container>

    );
}

export default Employee;