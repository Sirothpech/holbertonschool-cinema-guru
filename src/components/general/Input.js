// src/components/general/Input.js
import React from 'react';
import PropTypes from 'prop-types';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`input-container ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
        <input
          type={type}
          className="input-field"
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setValue: PropTypes.func.isRequired,
  icon: PropTypes.object, // PropTypes.element si vous utilisez un composant React pour l'icône
  inputAttributes: PropTypes.object,
};

Input.defaultProps = {
  className: '',
  icon: null,
  inputAttributes: {},
};

export default Input;
