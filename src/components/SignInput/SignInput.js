import React from 'react';

const SignInput = ({ type, handleDataChange, values }) => {

    const typeCheck = () => type === 'email' || 'password' ? type : 'text';

    return (
        <div>
            <input className="form__input"
                   type={typeCheck()}
                   name={type}
                   id={type}
                   required
                   onChange={handleDataChange}
                   value={values.name || ''}
            />
            <p className="form__error-text" id="name-error"></p>
        </div>
    );
};

export default SignInput;