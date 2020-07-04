import React from 'react';
import '../App.css';
const Todo = (props) => {
    return (
        <div className="todo shadow">
            <div className="card card-body my-3" style={{ borderColor: "black" }, { margin: "20px" }}>
                <form onSubmit={props.handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-list-alt"></i>
                            </div>
                        </div>
                        <input type="text"
                            className="form-control shadow"
                            placeholder="Add a Todo Item"
                            value={props.itemName}
                            onChange={props.handleChange} />

                        <span>
                            <button className={props.editItemLabel ? "btn btn-block btn-success" : "btn btn-block btn-primary"}>
                                {props.editItemLabel ? "Edit Item" : "Add Item +"}
                            </button>
                        </span>
                    </div>


                </form>
            </div>
        </div>
    );

}
export default Todo;