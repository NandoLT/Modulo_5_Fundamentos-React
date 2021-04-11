import React from 'react';

const ConfirmDelete = ({confirmDelete, onConfirm, onDelete}) => {
    return (
        <div className={`modal ${confirmDelete ? "is-active" : "" }`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                <p className="modal-card-title">Delete Confirmation</p>
                </header>
                <section className="modal-card-body">
                Are you sure to delete advert?
                </section>
                <footer className="modal-card-foot">
                <button 
                    className="button is-success"
                    onClick={() => onDelete()}
                >
                    Confirm
                </button>
                <button 
                    className="button"
                    onClick={() => onConfirm()}
                >
                    Cancel
                </button>
                </footer>
            </div>
        </div>
    )
}


export default ConfirmDelete;