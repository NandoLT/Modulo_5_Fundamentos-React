import React from 'react';
import {getTags} from '../../../dataService/adverts';


const InputsTags = ({onChange}) => {
    const [tagsList , setTagsList] = React.useState([]);
    const [tagsElements, setTagsElements] = React.useState([])
    let tagsElemenstMem = []

    const handleChange = event => {
        const target= event.target;
        tagsElemenstMem = tagsElements;
        if(target.checked) {
            tagsElemenstMem.push(target.value);
        } else {
            tagsElemenstMem.splice(tagsElemenstMem.indexOf(target.value), 1);
        }
        setTagsElements(tagsElemenstMem);
        onChange(tagsElements);
    }   
    
    React.useEffect(() => {
        getTags().then(setTagsList);
    }, [])

    const inArraytagsList = tag => {
        return tagsElements.indexOf(tag) !== -1;
    }


    return (
        <div className="formField-label">
        <label > Select tags</label>
            <div className="tagList" style={{display:'flex'}}>
                {tagsList.map(tag => {
                    return(<label style={{width:'25%', marginBottom: '20px'}}>{tag}
                        <input key={tag} className="formField-input" type="checkbox" name="tags" checked={inArraytagsList(tag)} value={tag} onChange={handleChange}/>
                    </label>)
                    }) 
                }
            </div>
        </div>
    )
}

export default InputsTags;