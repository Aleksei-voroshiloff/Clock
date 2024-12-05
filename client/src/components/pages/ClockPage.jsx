import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ClockCard from '../ui/ClockCard';

export default function ClockPage() {
    const [clocks, setClocks] = useState([]);
    console.log(clocks);
    
    useEffect(() => {
        axios.get('/api/clocks').then((res) => setClocks(res.data));
      }, []);
      console.log(clocks);

  return (
    <Row>
      <div className='cardsList row'>
        {clocks.map((clock) => (
          <ClockCard key={clock.id} clock={clock} />
        ))}
      </div>
    </Row>
  )
}
