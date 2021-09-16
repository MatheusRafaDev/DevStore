import { StyledMenu } from "./styled"


export default function Menu() {
    return (
       <StyledMenu> 
        <header className="header-left-box">
            <div className="svg-cabecalho-left-box"> <img src="/assets/images/logo.png" alt = "" /> </div>
            <div className="devStore"> <span>Dev</span>Store</div>
        </header>
        <div className="black-box"></div>
        <div className="left-box-management">
            <div> Gerenciamento </div>
            <img src="/assets/images/seta.png" alt = "" />
        </div>
        <div className="left-box-product">
            <div> Produtos </div>
        </div> 
    </StyledMenu>
)}