
// import '@styles/react/libs/flatpickr/flatpickr.scss';
import "flatpickr/dist/flatpickr.css";
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Flatpickr from 'react-flatpickr';
import { Label } from 'reactstrap';

const CustomTimePicker = props => {
  const { id, name, title, value, onChange, placeholder } = props;
  return (
    <Fragment>
      <Label for={id}>{title}</Label>
      <Flatpickr
        name={name}
        value={value}
        placeholder={placeholder}
        id={id}
        className="form-control "
        onChange={onChange}
        options={{
          enableTime: true,
          noCalendar: true,
          dateFormat: 'h:i K',
          time_24hr: false
        }}
      />
    </Fragment>
  );
};
CustomTimePicker.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

export default CustomTimePicker;
