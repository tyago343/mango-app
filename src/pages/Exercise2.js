import React, { useEffect, useState } from 'react';
import { getFixedRanges } from '../utils/RangesApi';
import Range from '../components/Range';

function Exercise2() {
  const [fixedRanges, setFixedRanges] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  useEffect(async () => {
    const { fixedRanges: fetchedRanges } = await getFixedRanges();
    const sortedArr = fetchedRanges.sort((a, b) => a - b);
    setFixedRanges(sortedArr);
    setMin(sortedArr[0]);
    setMax(sortedArr[sortedArr.length - 1]);
  }, []);
  return (
    <Range fixedRangeProp={fixedRanges} minProp={min} maxProp={max} />
  );
}
export default Exercise2;
