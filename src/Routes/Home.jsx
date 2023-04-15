import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Box, Button, Heading, Input } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { del, postData } from '../Redux/Auth/action'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [name, setName] = useState("")
  const [level, setLevel] = useState("Easy")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuth } = useSelector((store) => store.reducer)

  const handleSubmit = () => {
    // dispatch(del(1))
    let userData = {
      name, level, score:0
    }
    console.log(userData);
    dispatch(postData(userData))
  }

  useEffect(() => {
    if (isAuth)
      navigate("/play")
  }, [isAuth])

  return (
    <div className='homebg'>
      <Navbar />
      <Box mt={3}>       
        <Heading >Arrange Number game</Heading>
        <form className='forms' >
        <Input placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
            <select value={level} onChange={(e)=>setLevel(e.target.value)}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
          <Button onClick={handleSubmit}>Submit</Button>
        </form>

    </Box>
    </div>
  )
}

export default Home
//frankfinn