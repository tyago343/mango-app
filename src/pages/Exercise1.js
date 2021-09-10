import React, { useEffect, useState } from 'react';
import Range from '../components/Range';
import { getRanges } from '../utils/RangesApi';

function Exercise1() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  useEffect(async () => {
    const { min: fetchedMin, max: fetchedMax } = await getRanges();
    setMin(fetchedMin);
    setMax(fetchedMax);
  }, []);
  return <Range minProp={min} maxProp={max} />;
}

export default Exercise1;
