import {useState ,  useContext} from 'react'
import{ Col, Form}from "react-bootstrap"


const UserRagisterScreen = () => {
    const [name, setName] = useState("");
    const [name, setEmail] = useState("");
    const [name, setPassword] = useState("");
    

    
    return (
        <div>
            <Col xs={12} sm={12} md={6} lg={6}>
                <Form>
                   < Form.Group>
                   <Form.Label>name</Form.Label>
                   </Form.Group>
                   <Form.Control>

                   </Form.Control>

                </Form>
                
            </Col>
        </div>
    )
}

export default UserRagisterScreen
