import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForms from './todoForms'
import TodoList from './todoList';

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastros"></PageHeader>
                <TodoForms/>
                <TodoList/>
            </div>
        );
    }
}