import React from 'react';

const Form = ({children, todoLength}) => {

    return (
        <div>
            {todoLength}tasks remaining
            <div>
                {children}
            </div>
        </div>
    )
}

export default Form;