import { Component } from 'react';
import styled from 'styled-components';


const GroupBtn = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`

class AppFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttons: [
                {text: 'Все сотрудники', type: 'all'}, 
                {text: 'На повышение', type: 'increase'}, 
                {text: 'З/П больше 1000$', type: 'moreThen1000'}
            ],
            filter: ''
        }
    }

    changeFilter = (e) => {
        const filter = e.currentTarget.getAttribute('data-filter');
        this.setState({filter});
        this.props.updateFilter(filter);
    }

    render() {
            const buttons = this.state.buttons.map((item, i) => {
                const active = this.props.filter === item.type;
                const clazz = active ? 'btn-light' : 'btn-outline-light'
                return <button 
                        onClick={this.changeFilter} 
                        data-filter={item.type} 
                        className={`btn ${clazz}`} 
                        style={{'width': '100%', 'margin': '2px'}} 
                        key={i}
                        type="button">{item.text}</button>
            });
            return (
            <GroupBtn>
                {buttons}
            </GroupBtn>
        )
    }
};

export default AppFilter;