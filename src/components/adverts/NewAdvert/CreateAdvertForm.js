import React from 'react';
import FormField from '../../commons/FormField';

const CreateAdvertForm = ({onSubmit}) => {
    const [advertFields, setAdvertFields] = React.useState({
        name:'',
        price:0,
        sale:false,
        tags:[],
        photo:null,
    });

    const {name, price, sale, tags, photo} = advertFields;

    return (
        // <form className="loginForm" onSubmit={handleSubmit}>
        <form className="loginForm">
            <div className="row">
                <FormField
                    type="text"
                    name="name"
                    label="Name"
                    className="createAdvert-field"
                    value={name}
                    // onChange={handleChangeCredentials}
                />
                <FormField
                    type="number"
                    name="price"
                    label="Price"
                    className="createAdvert-field"
                    value={price}
                    // onChange={handleChangeCredentials}
                />
                <FormField
                    type="select"
                    name="tags"
                    label="Tags"
                    className="createAdvert-field"
                    value={tags}
                    // onChange={handleChangeCredentials}
                />
                <FormField
                    type="radio"
                    name="sale"
                    label="sale"
                    className="createAdvert-field"
                    value={sale}
                    // onChange={handleChangeCredentials}
                />
                <FormField
                    type="radio"
                    name="sale"
                    label="Buy"
                    className="createAdvert-field"
                    value={sale}
                    // onChange={handleChangeCredentials}
                />
                <FormField
                    type="file"
                    name="photo"
                    label="Image"
                    className="createAdvert-field"
                    value={photo}
                    // onChange={handleChangeCredentials}
                />
            </div>
            <div className="row">

            </div>

        </form>
    )
}

export default CreateAdvertForm;