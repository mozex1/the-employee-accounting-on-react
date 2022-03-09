import styled from "styled-components";
import logo from './logo.png';

const AppInfoDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 25px;
    background-color: rgba(27, 33, 52, 1);
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0,0,0, .15);
    color: #fff;
    h1 {
        font-size: 20px;
        font-weight: 300;
    }
    h2 {
        font-weight: 500;
        font-size: 30px;
    }
    img {
        margin-left: 300px;
        height: 200px;
        width: 120px;
    }

`
const Wrapper = styled.div`
    
`

const AppInfo = ({employyes, rise}) => {
    return (
        <AppInfoDiv>
            <Wrapper>
                <h1>Учет сотрудников в компании</h1>
                <h2>Общее число сотрудников: {employyes}</h2>
                <h2>Премию получат: {rise}</h2>
            </Wrapper>
            <img src={logo} alt='logo'></img>
        </AppInfoDiv>
    )
};

export default AppInfo;