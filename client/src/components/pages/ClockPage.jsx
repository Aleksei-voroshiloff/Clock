import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ClockCard from '../ui/ClockCard';

export default function ClockPage() {
    const [clocks, setClocks] = useState([]);

    useEffect(() => {
        axios.get('/api/clocks').then((res) => setClocks(res.data));
      }, []);


  return (
    <Row>
      <div className='cardsList'>
        {clocks.map((clock) => (
          <ClockCard key={clock.id} clock={clock} />
        ))}
      </div>
    </Row>
  )
}
