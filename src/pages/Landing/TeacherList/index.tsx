import React from 'react';

import './styles.css';
import PageHeader from '../../../components/PageHeader';

import whatsappIcon from '../../../assets/images/icons/whatsapp.svg';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis!">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input type="text" id="week-day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horário</label>
                        <input type="text" id="time"/> 
                    </div>
                </form> 
            </PageHeader>
            <main>
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
            </main>
        </div>
    )
}

export default TeacherList;