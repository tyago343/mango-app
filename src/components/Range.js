/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useRef } from 'react';
import propTypes from 'prop-types';

function Range({ minProp = 1, maxProp = 10, fixedRangeProp = [] }) {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  const [currentMin, setCurrentMin] = useState(minProp);
  const [currentMax, setCurrentMax] = useState(maxProp);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [offsetSliderWidth, setOffsetSliderWidth] = useState(0);
  const sliderRef = useRef(null);
  const minValueRef = useRef(null);
  const minValueDragRef = useRef(null);
  const maxValueRef = useRef(null);
  const maxValueDragRef = useRef(null);
  useEffect(async () => {
    setMin(minProp);
    setMax(maxProp);
    setCurrentMin(minProp);
    setCurrentMax(maxProp);
    minValueRef.current.style.width = `${0}%`;
    maxValueRef.current.style.width = `${(max * 100) / max}%`;
    setSliderWidth(sliderRef.current.offsetWidth);
    setOffsetSliderWidth(sliderRef.current.offsetLeft);
  }, [minProp, maxProp]);
  const setMinValue = (e) => {
    const inputMin = e.target.value;
    if (inputMin <= currentMin && inputMin < currentMax) {
      return setMin(inputMin);
    }
    setMin(inputMin);
    setCurrentMin(inputMin);
  };
  const onMouseMoveMin = (e) => {
    const dragedWidth = e.clientX - offsetSliderWidth;
    const dragedWidthInPercent = ((dragedWidth * 100)) / sliderWidth;
    const newCurrentMin = parseInt((dragedWidthInPercent * max) / 100, 10);
    if (newCurrentMin >= min && newCurrentMin < currentMax) {
      minValueRef.current.style.width = `${dragedWidthInPercent}%`;
      minValueRef.current.dataset.content = newCurrentMin;
      setCurrentMin(newCurrentMin);
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
    if (inputMax > currentMin && inputMax >= currentMax) {
      setMax(inputMax);
    } else {
      setMax(inputMax);
      setCurrentMax(inputMax);
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
          value={min}
          min={min}
          max={currentMax - 1}
        />

        <br />
        <label htmlFor="max-input">Max: </label>
        <input
          id="max-input"
          type="number"
          onChange={setMaxValue}
          value={max}
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
Range.propTypes = {
  minProp: propTypes.number.isRequired,
  maxProp: propTypes.number.isRequired,
  fixedRangeProp: propTypes.arrayOf(propTypes.number),
};
Range.defaultProps = {
  fixedRangeProp: [],
};
export default Range;
