import { ContainerCabecalho } from "./styled"

export  default function Cabecalho() {

    return (
       <ContainerCabecalho>
            <div class="reader-right-box">
                <div class = "box-user"> 

                    <div class="user-image">  <img src="/assets/images/perfil.png" alt = "" /> <div class="absolute">  3   </div>  </div>
                    <div class="user-name"> olá, <b>  Bruno de Oliveira </b> </div>

                </div>

                <div class="box-image">

                    <div class="refresh-button"> <button> <img src="/assets/images/refresh2 1.png" alt = "" />  </button> </div>
                    <div class="left-button"> <button> <img src="/assets/images/log-out.png" alt = "" />  </button> </div>
                </div> 
                
            </div>           
        </ContainerCabecalho>
    )
}