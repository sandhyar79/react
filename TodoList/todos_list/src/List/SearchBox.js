import React from 'react';
import '../App.css';
class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="search_box my-5">
                <div className="input-group md-form form-sm form-1 pl-0">
                    <div className="input-group-prepend">
                        <span className="input-group-text purple lighten-3" id="basic-text1">
                            <i className="fas fa-search text-white"
                                aria-hidden="true" />
                        </span>
                    </div>
                    <input className="form-control my-0 py-1"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={this.props.searchItem} />
                </div>
            </div>
        );
    }
}
export default SearchBox;
