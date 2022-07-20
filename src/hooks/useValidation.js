import React, { useCallback } from "react";

export function useFormWithValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        // if (name === 'name' && input.validity.patternMismatch) {
        //     input.setCustomValidity('Имя должно содержать только латиницу, кириллицу, пробел или дефис.')
        // } else {
        //     input.setCustomValidity('');
        // }
        //
        // if (name === 'email') {
        //     if (!isEmail(value)) {
        //         input.setCustomValidity('Некорректый адрес почты.');
        //     } else {
        //         input.setCustomValidity('');
        //     }
        // }

        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, errors, isValid, resetForm };
}