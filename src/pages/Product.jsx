import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'



export default function Product() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>oat</h1>
      <Button  variant='outline-primary' as={ Link } to= '/order'>
        สั่งชื้อ
      </Button> <br />

      <Link to="register">
      <Button  variant='outline-primary' as={ Link } to= '/login'>
        สมัคร
      </Button>
      </Link> <br></br>
      <Link to="/login">
      <Image src = 'https://picsum.photos/200/200?random=0' roundedCircle/>
      </Link>
      <br></br>
      <Button variant='outline-danger' onClick={ ()=>navigate("/")}>Home</Button>
    </div>
  )
}
