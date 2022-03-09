import {Component} from 'react';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    state = { // Сокращенный синтаксис конструктора
        name: '',
        salary: '',
    };

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    addEmployees = (e) => {
        e.preventDefault();
        if (this.state.name.length > 2  && this.state.salary.length > 2) {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            });
        } 
        console.log('Vvvedite pravilno');   
    }

    static onLog = () => {
        console.log('hey');
    }

    render(){
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.addEmployees}>
                    <input onChange={this.onValueChange} type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={this.state.name} />
                    <input onChange={this.onValueChange} type="number"
                        className="form-control new-post-label"
                        placeholder="Зарплата в USD?"
                        name="salary"
                        value={this.state.salary} />
    
                    <button type="submit" className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;