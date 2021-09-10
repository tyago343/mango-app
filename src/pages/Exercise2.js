import React, { useEffect, useState } from 'react';
import { getFixedRanges } from '../utils/RangesApi';
import Range from '../components/Range';

function Exercise2() {
  const [fixedRanges, setFixedRanges] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    const { fixedRanges } = getFixedRanges();
    const sortedArr = fixedRanges.sort((a, b) => a - b);
    setFixedRanges(sortedArr);
    setMin(sortedArr[0]);
    setMin(sortedArr[sortedArr.length - 1]);
  }, []);

  const setMinValue = (e) => {
    const inputMin = e.target.value;
    setLabelMin(inputMin);
    if (inputMin >= min && inputMin < currentMax) {
      setCurrentMin(inputMin);
    }
  };
  const onMouseMoveMin = (e) => {
    const dragedWidth = e.clientX - offsetSliderWidth;
    const dragedWidthInPercent = (dragedWidth * 100) / sliderWidth;
    const newCurrentMin = parseInt((max * dragedWidthInPercent) / 100, 10);
    if (newCurrentMin >= min && newCurrentMin < currentMax) {
      minValueRef.current.style.width = `${dragedWidthInPercent}%`;
      minValueRef.current.dataset.content = newCurrentMin;
      setCurrentMin(newCurrentMin);
      setLabelMin(newCurrentMin);
    }
  };
  const onMouseUpMin = () => {
    document.removeEventListener('mouseup', onMouseUpMin);
    document.removeEventListener('mousemove', onMouseMoveMin);
    document.removeEventListener('touchend', onMouseMoveMin);
    document.removeEventListener('touchmove', onMouseUpMin);
  };
  const changeMinValue = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', onMouseMoveMin);
    document.addEventListener('mouseup', onMouseUpMin);
    document.addEventListener('touchmove', onMouseMoveMin);
    document.addEventListener('touchend', onMouseUpMin);
  };

  const setMaxValue = (e) => {
    const inputMax = e.target.value;
    setLabelMax(inputMax);
    if (inputMax > currentMin && inputMax <= max) {
      maxValueRef.current.style.width = `${(inputMax * 100) / max}%`;
      setCurrentMax(parseInt(inputMax, 10));
    }
  };
  const onMouseMoveMax = (e) => {
    const maxWalueThumb = maxValueRef;
    const dragedWidht = e.clientX - offsetSliderWidth;
    const dragedWidhtInPercent = (dragedWidht * 100) / sliderWidth;
    const newCurrentMax = parseInt((max * dragedWidhtInPercent) / 100, 10);
    if (newCurrentMax > currentMin && newCurrentMax <= max) {
      maxWalueThumb.current.style.width = `${dragedWidhtInPercent}%`;
      maxWalueThumb.current.dataset.content = newCurrentMax;
      setCurrentMax(newCurrentMax);
      setLabelMax(newCurrentMax);
    }
  };
  const onMouseUpMax = () => {
    document.removeEventListener('mouseup', onMouseUpMax);
    document.removeEventListener('mousemove', onMouseMoveMax);
    document.removeEventListener('touchend', onMouseUpMax);
    document.removeEventListener('touchmove', onMouseMoveMax);
  };
  const changeMaxValue = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', onMouseMoveMax);
    document.addEventListener('mouseup', onMouseUpMax);
    document.addEventListener('touchmove', onMouseMoveMax);
    document.addEventListener('touchend', onMouseUpMax);
  };
  return (
    <div className="card">
      <h2>Double range slider</h2>
      <div className="current-value">
        <label htmlFor="min-input">Min: </label>
        <input
          id="min-input"
          type="number"
          onChange={setMinValue}
          value={labelMin}
          min={min}
          max={currentMax - 1}
        />

        <br />
        <label htmlFor="max-input">Max: </label>
        <input
          id="max-input"
          type="number"
          onChange={setMaxValue}
          value={labelMax}
          min={currentMin + 1}
          max={max}
        />
      </div>

      <div className="values">
        <div>{min}</div>
        <div>{max}</div>
      </div>

      <div ref={sliderRef} id="slider">
        <div ref={minValueRef} id="min" data-content={currentMin}>
          <div
            ref={minValueDragRef}
            id="min-drag"
            onMouseDown={changeMinValue}
            onTouchStart={changeMinValue}
          />
        </div>
        <div ref={maxValueRef} id="max" data-content={currentMax}>
          <div
            ref={maxValueDragRef}
            id="max-drag"
            onMouseDown={changeMaxValue}
            onTouchStart={changeMaxValue}
          />
        </div>
      </div>
    </div>
  );
}
export default Exercise2;
