// import '@styles/react/libs/flatpickr/flatpickr.scss';
import "flatpickr/dist/flatpickr.css";
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Flatpickr from 'react-flatpickr';
import { Label } from 'reactstrap';

const CustomDatePicker = props => {
  const { name, title, value, onChange, minDate, maxDate } = props;
  return (
    <Fragment>
      <Label for={title}>{title}</Label>
      <Flatpickr
        name={name}
        value={value}
        id="hf-picker"
        className="form-control"
        onChange={onChange}
        options={{
          altInput: true,
          altFormat: 'F j, Y',
          dateFormat: 'Y-m-d',
          maxDate: maxDate,
          minDate: minDate
        }}
      />
    </Fragment>
  );
};
CustomDatePicker.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

export default CustomDatePicker;