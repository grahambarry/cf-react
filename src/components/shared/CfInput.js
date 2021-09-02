import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {validateInput} from "../utilities/Validator";
import './cfInput.scss'

const CfInput = ({value, label, placeholder, validators, type, onChange}) => {
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        const {value} = event.target;
        setError(validateInput(validators, value));
        onChange(value);
    };

    return (
        <div className="a-input">
          <div className="a-input-container">
              { label && <label className="a-label" htmlFor="app-input-field">{label}</label>}

              { type === 'textarea' ? (
                  <textarea
                      className='input'
                      placeholder={placeholder}
                      value={value}
                      defaultValue={value}
                      onChange={handleChange}/>
              ) : (
                  <input
                      type={type}
                      value={value}
                      className='input'
                      placeholder={placeholder}
                      onChange={handleChange}/>
              )}
              {error && <span className='text-danger'>{error.message}</span>}
          </div>
        </div>
    )
};

CfInput.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validators: PropTypes.array,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

CfInput.defaultProps = {
  value: '',
  label: '',
  placeholder: '',
  type: 'text',
  validators: []
};

export default CfInput;

// <div class="a-input amm-flex-1" :class="{'is-disabled': disabled, 'is-compact': compact}">
// <div class="`amm-flex pos-relative ${!!errors.length || status ? 'has-status padding-bottom-17':''} ${status ? `is-${status.type}`:''} ${clear ? 'is-clear':''} ${highlight ? 'is-highlighed':''} ${!label ? 'has-label':''}`">
//   <div class="a-input-container amm-flex amm-flex-1 flex-align-center pos-relative">
//     <slot/>
//     <div class="amm-flex amm-flex-1 pos-relative wrap-target">
//       <input
//         ref="field"
//         v-bind="$attrs"
//         :type="type"
//         :placeholder="placeholder"
//         :value="value"
//         :disabled="disabled"
//         :readonly="readonly"
//         :class="['input amm-flex-1', {'has-placeholder': placeholder.length > 1, capitalize}, inputClass]"
//         v-on="listeners"
//         @focus="onFocus">
//       <label v-if="label" class="a-label">
//         {{ label }}
//       </label>
//     </div>
//   </div>
//   <ErrorMessage v-if="!!errors.length || status" :message="message"/>
// </div>
// </div>