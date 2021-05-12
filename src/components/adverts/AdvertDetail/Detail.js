import React from "react";
import no_image from '../../../assets/no-image.png';

const Detail = ({advert, onConfirm}) => {

    return (
        <div className="container has-text-centered">
            <div className="columns is-vcentered">
                <div className="column is-5">
                    <figure className="image is-4by3">
                        {advert.photo ? 
                            <img src={`http://localhost:3001${advert.photo}`} />
                            :
                            <img src={no_image} /> 
                            }
                    </figure>
                </div>
                <div className="column is-6 is-offset-1">
                    <h1 className="title is-2">
                        {advert.name}
                    </h1>
                    <button className="button is-info">
                        {advert.sale ? 'Sale' : 'Buy'}
                    </button>
                    <br />
                    <table className="table is-fullwidth">
                        <tbody>
                            <tr>
                                <td><strong>Price</strong></td>
                                <td>{advert.price}€</td>
                            </tr>
                            <tr>
                                <td>
                                <div className="content">
                                    {advert.tags.map(tag => (
                                        <span className="tag is-success" key={tag + advert.id}>{tag}</span>
                                    ))}
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button 
                className="button is-danger is-large modal-button" 
                data-target="modal-ter" 
                aria-haspopup="true"
                onClick={() => onConfirm()}
            >
                Delete Advert
            </button>
        </div>
    );
};

export default Detail;