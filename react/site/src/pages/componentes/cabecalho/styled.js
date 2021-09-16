import styled from 'styled-components';


const ContainerCabecalho = styled.div `
.reader-right-box {
    margin-top: 0em;
    padding-right: 0em;
}
.box-user {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    padding: 1.3em;
    align-items: center;
}
* {
    box-sizing: border-box;
    cursor: default;
    font-family: 'Roboto';
}

.box-image {
    margin-right: 2em;
}
.box-image {
    display: flex;
    flex-direction: row;
    padding: 0.5em;
}

.reader-right-box {
    display: flex;
    flex-direction: row;
    background-color:  #fff;
    padding: 1.3em;
    align-items: center;
    justify-content: space-between;
}


.left-button button {
    border-radius: 50%;
    background-color: #6CC3DF;
    width: 44px;
    height: 44px;
    border: none;
    margin: .4em;
}

button {
    cursor: pointer;
}

.refresh-button button {
    border-radius: 50%;
    background-color: #6CC3DF;
    width: 44px;
    height: 44px;
    border: none;
    margin: .4em;
}

.user-name b {
    color: #000;
}
.user-name {
    font-size: 16px;
}
.user-name {
    padding-left: 1em;
}

.absolute {
    color: white;
    background-color: #119FDC;
    border: 3px solid white;
    border-radius: 50%;
    position: absolute;
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: .7em;
}
.user-image img {
    width: 57px;
    height: 57px;
    border-radius: 50%;
    height: 57px;
}
.box-user {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
b {
    font-weight: bold;
}

`

export { ContainerCabecalho }