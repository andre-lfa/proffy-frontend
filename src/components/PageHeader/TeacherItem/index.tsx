import React from 'react';
import whatsappIcon from '../../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/33098462?s=460&u=a51b9ea995f188368a62f333a8f43ca0aca360a7&v=4" alt=""/>
                        <div>
                            <strong>André LFA</strong>
                            <span>Quimica</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br/><br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida de pessoas através de experiências.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem; 