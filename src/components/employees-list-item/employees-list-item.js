import './employees-list-item.scss';

const EmployeesListItem = (props) => {
        const {name, salary, onDelete, onToggleProp, increase, rise} = props;
        // let className = "list-group-item d-flex justify-content-between";
        // if(increase){
        //     className += " increase"
        // }
        return (
            <li className={"list-group-item d-flex justify-content-between " + (increase ? " increase" : "") + (rise ? " like" : "")}>
                <span onClick={onToggleProp} className="list-group-item-label" data-toggle="rise">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={onToggleProp}
                        className="btn-cookie btn-sm mcoc"
                        data-toggle="increase">
                        <i className="fas fa-cookie mcoc"></i>
                        <p>Повысить</p>
                    </button>

                    <button type="button"
                    onClick={onDelete}
                        className="btn-trash btn-sm mtrash">
                        <i className="fas fa-trash mtrash"></i>
                        <p>Удалить</p>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

export default EmployeesListItem;