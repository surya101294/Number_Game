import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'

const LeaderBoard = () => {
  const [data, setdata] = useState([])
  useEffect(async () => {
    let res = await axios.get(`https://test-szax.onrender.com/users`)
    setdata(res.data)
  }, [])
  return (
    <div className='leaderbg'>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Player Name</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>

          {data.length > 0 ? data.map((el, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{el.name}</td>
              <td>{el.score}</td>
            </tr>
          ))
            : <td>
              No Records Available, Please Play The Game...
            </td>
          }
        </tbody>
      </table>
    </div>
  )
}

export default LeaderBoard
