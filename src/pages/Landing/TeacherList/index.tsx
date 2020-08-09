import React from 'react';

import './styles.css';
import PageHeader from '../../../components/PageHeader';
import TeacherItem from '../../../components/PageHeader/TeacherItem';
import Input from '../../../components/Input';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis!">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" />
                    <Input name="week-day" label="Dia da semana" />
                    <Input name="time" type="time" label="Horário" />
                </form> 
            </PageHeader>
            <main>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;