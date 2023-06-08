import React from 'react';
import Switch from 'react-switch';

const ToggleSwitch = ({ checked, onChange}) => {
  return (
    <div className="toggle-switch">
      <span className="toggle-label">Inactive</span>
      <Switch
        checked={checked}
        onChange={onChange}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={24}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <span className="toggle-label">Active</span>
    </div>
  );
};

export default ToggleSwitch;
