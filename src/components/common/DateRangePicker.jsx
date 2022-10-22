import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const DateRangePicker = () => {
  return (
    <>
      <RangePicker bordered={false} />
    </>
  );
};

export default DateRangePicker;
