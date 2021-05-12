import React from 'react';
import {getTags} from '../../../dataService/adverts';


const InputsTags = ({onChange, value, }) => {

    const [tagsList , setTagsList] = React.useState([]);
    // TODO intentar capturar cuando seleccionamos el check  y pasar el valor al array de estado en el padre.
    const handleChange = () => {
        console.log('Cambio', )
    }

    React.useEffect(() => {
        getTags().then(setTagsList);
    }, [])

    return (
        <div className="formField-label">
        <label > Select tags</label>
            <div className="tagList" style={{display:'flex'}}>
                {tagsList.map(tag => {
                    console.log(tag);
                    return(<label style={{width:'25%', marginBottom: '20px'}}>{tag}
                        <input key={tag} className="formField-input" type="checkbox" name="tags" value={value} onChange={handleChange}/>
                    </label>)
                    }) 
                }
            </div>
        </div>
    )
}

export default InputsTags;