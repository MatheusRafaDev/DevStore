import styled from "styled-components";


const StyledMenu = styled.div `
display: flex;
    flex-direction: column;
    
    background-color: #2B3031;
    
    height: 100vh;
    padding-bottom: 0em;
    position: sticky;
    top: 0px;
        
    .header-left-box {
        display: flex;
        flex-direction: row;
        margin: 2em;
        align-items: center;
        justify-content: center;
        
    }
    .svg-cabecalho-left-box {
        border-right: 10px solid transparent;
    }
    .devStore {
        color: white;
        font-size: 28px;
        font-weight: 700;
    }
    .devStore span {
        color: #119FDC;
    }
    .black-box {
        background-color: #262626;
        width: 356px;
        height: 61px;
    }
    .left-box-management {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        
        
        height: 70px;
    }
    .left-box-management div {
        color: white;
        font-size: 18px;
        font-weight: 800;
        margin-left: 1em;
    }
    .left-box-product {
        display: flex;
        flex-direction: row;
        
        height: 55px;
        background-color: white;
        border-left: 4px solid  #119FDC;
        color: #1A1A1A;
        font-size: 18px;
        
        align-items: center;
        padding-left: 4.3em;
    }
    .left-box-product div {
        font-weight: 800;
        color: #1A1A1A;
    }
`


export { StyledMenu }