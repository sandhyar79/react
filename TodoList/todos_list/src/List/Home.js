import React from 'react';
import Todo from './Todo';
import TodoList from './TodoList';
import SearchBox from './SearchBox';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            id: `${new Date().getTime()}`,
            itemName: '',
            editItem: false,
            searchItems: false,
            date: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearButton = this.clearButton.bind(this);
        this.deleteButton = this.deleteButton.bind(this);
        this.searchItem = this.searchItem.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            itemName: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            itemName: this.state.itemName
        };
        console.log(this.state.date)
        const updatedItem = [
            ...this.state.items,
            newItem
        ];
        this.setState({
            items: updatedItem,
            itemName: '',
            id: `${new Date().getTime()}`,
            editItem: false
        });
    }
    clearButton = () => {
        this.setState({
            items: []
        });
    }
    deleteButton = (id) => {
        const selectedItems = this.state.items.filter(
            item => item.id !== id
        );
        this.setState({
            items: selectedItems
        });
    }
    editButton = (id) => {
        const selectedItemForedition = this.state.items.filter(
            item => item.id !== id
        );
        const findItems = this.state.items.find(
            item => item.id === id
        );
        this.setState({
            items: selectedItemForedition,
            editItem: true,
            itemName: findItems.itemName,
            id: findItems.id
        });
    }
    searchItem = (e) => {
        const searchItem = this.state.items.filter(
            item => item.itemName === e.target.value
        );
        const remainingItem = this.state.items.filter(
            item => item.itemName !== e.target.value
        )
        this.setState({
            items: searchItem,
            searchItems: true,
            itemName: searchItem.itemName,
            id: searchItem.id
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4 shadow">
                        <h1>
                            <center>To-Do List</center>
                        </h1>
                    </div>
                    <div className="col-10 mx-auto col-md-8 mt-4 shadow">
                        <Todo itemName={this.state.itemName}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            editItemLabel={this.state.editItem}
                            date={this.state.date} />
                        <SearchBox searchItem={this.searchItem} />
                        <div>
                            <TodoList items={this.state.items}
                                clearButton={this.clearButton}
                                deleteButton={this.deleteButton}
                                editButton={this.editButton} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;