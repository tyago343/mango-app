import React, { useEffect, useState } from 'react';
import { getFixedRanges } from '../utils/RangesApi';
import Range from '../components/Range';


function Exercise2() {
  const [fixedRanges, setFixedRanges] = useState([]);
  useEffect(()=> {
    const { fixedRanges } = getFixedRanges();
    setFixedRanges(fixedRanges)
  }, [])
  return (
    <Range fixedRanges={fixedRanges} />
  );
}
export default Exercise2;
