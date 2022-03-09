import EmployeesListItem from '../employees-list-item/employees-list-item';
import styled, { keyframes } from 'styled-components';
import { flipInX } from 'react-animations'

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    const bounceAnimation = keyframes`${flipInX}`;

    const BouncyUl = styled.ul`
        animation: 1s ${bounceAnimation};
        margin-top: 30px;
        background-color: #3d5a80;
        border-radius: 4px;
        box-shadow: 15px 15px 30px rgba(0,0,0, .15);
        color: #fff;
    `;
    return (
        <BouncyUl className='list-group'>
            {data.map(item => {
                
                // return <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase} 
                // key={Math.random()}/>
                return <EmployeesListItem  
                {...item} key={item.id} 
                onDelete={() => onDelete(item.id)}
                onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}/>
            })}
        </BouncyUl>
    )
};

export default EmployeesList;