import React from 'react';

const Form = ({handleChange}) => {


    return (
        <div className='mt-4'>
            <form className='col-12'>
                <div className='form-group row'>
                    <label className="col-sm-3 col-form-label" for='name'>Search by monster name</label>
                    <div className='col-sm-7'>
                        <input 
                            id='name'
                            className='form-control'
                            type='text' 
                            name='name'
                            onChange={handleChange}
                            />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;