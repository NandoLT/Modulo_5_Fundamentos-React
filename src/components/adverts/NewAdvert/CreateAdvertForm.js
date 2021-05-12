import React from 'react';
import {Button} from '../../commons/Button';
import InputsTags from './InputsTags';

import '../../commons/FormField.css';

const CreateAdvertForm = ({onSubmit}) => {
    const [advertFields, setAdvertFields] = React.useState({
        name:'',
        price:0,
        sale:false,
        tags:['motor'],
        photo:null,
    });

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
    
    const handleChangeClon = event => {
        console.log(event);
        console.log(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(advertFields);
    };

    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <label className="formField-label"> Name
                <input className="formField-input" type="text" name="name" value={name} onChange={handleChange}/>
            </label> 
            <label className="formField-label"> Price
                <input className="formField-input" type="number" name="price" value={price} onChange={handleChange}/>
            </label>
            <InputsTags multiple name="tags" value={tags} onChange={handleChange}/>
            <label className="formField-label" style={{display:'flex', flexDirection:'row', justifyContent:'space-around', padding:'10px 0px'}}> 
                <label style={{paddingRight: '15px'}}><input type="radio" value="true" name="sale" onChange={handleChange}/><span>Vender</span></label>
                <label style={{paddingRight: '15px'}}><input type="radio" value="false" name="sale" onChange={handleChange}/><span>Comprar</span></label>
            </label>
            <input name="photo" type="file" onChange={handleChange}/>
            <Button
                type="submit"
                className="loginForm-submit"
                variant="primary"
                // disabled={isLoading || !username || !password}
                disabled={ !name || !price || !sale || !tags }
            >
            Create
            </Button>
        </form>
    )
}

export default CreateAdvertForm;