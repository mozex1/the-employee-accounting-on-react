import React, { Component } from 'react'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {'name': 'John C.', 'salary': 800, 'increase': false, 'rise': false, 'id': 1}, 
                {'name': 'Alex M.', 'salary': 3000, 'increase': false, 'rise': false, 'id': 2}, 
                {'name': 'Tim I.', 'salary': 5600, 'increase': false, 'rise': false, 'id': 3} 
            ],
            term: '',
            filter: ''    
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // let index = data.findIndex(elem => elem.id === id); //
            // const newData = [...data.slice(0, index), ...data.slice(index + 1, data.length)]; // Можно и так
            const newData = data.filter(elem => elem.id !== id);
            return {
                data: newData
            }
        });  
    }

    addItem = (name, salary) => {
        this.setState(({data}) => {
            const newItem = {
                'name': name, 
                'salary': salary, 
                'increase': false,
                'rise': false,
                'id': this.maxId++
            } 
            const newData = [...data, newItem];
            return {
                data: newData
            }
        });
    }

    // onToggleIncrease = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id) {
    //                 return {...item, increase: !item.increase}
    //             }
    //             return item;
    //         })
    //     }))
        // this.setState(({data}) => {
        //     let index = data.findIndex(elem => elem.id === id);
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        //     return {
        //         data: newArr
        //     }
        // })
    // }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (!term.length) return items;
        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        });
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    updateFilter = (filter) => {
        this.setState({filter})
    }

    postFilter = (data, filter) => {
        switch (filter) {
            case 'increase': 
                return data.filter(item => item.increase);
            case 'moreThen1000':
                return data.filter(item => item.salary > 1000);
            default: return data;
        }
    }

    render() {
        const {data, term, filter} = this.state;
        const rise = this.state.data.filter(item => item.rise).length;
        const visibleData = this.postFilter(this.searchEmp(data, term), filter);
        return (
            <div className='app'>
                <AppInfo employyes={data.length}
                rise={rise}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} updateFilter={this.updateFilter}/>
                </div>
                <EmployeesList 
                onDelete={this.deleteItem}
                data={visibleData}
                onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                onAdd={this.addItem}/>
            </div>
        );
    }
    
    
}

export default App;