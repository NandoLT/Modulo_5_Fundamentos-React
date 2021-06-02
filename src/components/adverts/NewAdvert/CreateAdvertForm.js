import React from 'react';
import {Button} from '../../commons/Button';
import InputsTags from './InputsTags';


import '../../commons/FormField.css';

const CreateAdvertForm = ({onSubmit, ...props}) => {
    const initialState = {
        name:'',
        price:0,
        sale:null,
        tags:[],
        photo:null,
    }
    const [advertFields, setAdvertFields] = React.useState(initialState);

    const {name, price, sale, tags, photo} = advertFields;

    const handleChange = event => {
        const target = event.target;
        const image = target.files && target.files[0] ;
        const value = image ? image : target.value;
        const name = target.name;

        setAdvertFields(oldValues => {
            const newValues = {
                ...oldValues,
                [name]: value,
            };
            return newValues;
        });
    };

    const handleChangeCheckbox = (selectedTags) => {
        setAdvertFields(oldValues => {
            const newValues = {
                ...oldValues,
                tags: selectedTags,
            };
            // console.log('setTAGS', advertFields)
            return newValues;
        });
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(advertFields)
        onSubmit(advertFields);
    };
    
    const handleReset = (event) => {
        event.preventDefault();
        onSubmit(initialState);
    };

    return (
        <form className="loginForm" onSubmit={handleSubmit} onReset={handleReset}>
            <label className="formField-label"> Name
                <input className="formField-input" type="text" name="name" value={name} onChange={handleChange}/>
            </label> 
            <label className="formField-label">
            {!props.textButton ? 
                'Price' : 'Price Lower Than:'
            }
                <input className="formField-input" type="number" name="price" value={price} onChange={handleChange}/>
            </label>
            <InputsTags className="container-tags" multiple name="tags" onChange={handleChangeCheckbox}/>
            <label className="formField-label" style={{display:'flex', flexDirection:'row', justifyContent:'space-around', padding:'10px 0px'}}> 
                <label style={{paddingRight: '15px'}}><input type="radio" value="true" name="sale" onChange={handleChange}/><span>Sell</span></label>
                <label style={{paddingRight: '15px'}}><input type="radio" value="false" name="sale" onChange={handleChange}/><span>Buy</span></label>
            </label>
            {!props.textButton ? 
                <input name="photo" type="file" onChange={handleChange}/> : 
                null
            }
            {!props.textButton ?
                <Button
                    type="submit"
                    className="loginForm-submit"
                    variant="primary"
                    disabled={ !name || !price || !sale || !tags }
                >
                    Create
                </Button> : 
                <div>
                <Button
                    type="submit"
                    className="loginForm-submit"
                    variant="primary"
                    disabled={false}
                >
                {props.textButton}
                </Button>
                <Button
                    type="reset"
                    className="loginForm-submit"
                    // variant="primary"
                    disabled={false}
                >
                Reset
                </Button></div>
            }

        </form>
    )
}

export default CreateAdvertForm;