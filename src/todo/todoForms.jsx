
import React, { Component } from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search, add, clear } from './todoActions';


class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    keyHandler(e) {
        const {add, search, description} = this.props;

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            this.props.clear();
        }
    }

    componentWillMount() {
        this.props.search();
    }

    render() {
        const {add, search, description} = this.props;

        return (
            <div role="form" className="todoForm">
                <Grid cols='12 9 10'>
                    <input id="description" className="form-control"
                        placeholder="Add a task"
                        onKeyUp={this.keyHandler}
                        value={this.props.description}
                        onChange={this.props.changeDescription} >
                    </input>
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton style="primary"
                        icon="plus"
                        onClick={() => add(description)}>
                    </IconButton>
                    <IconButton style="info"
                        icon="search"
                        onClick={search}>
                    </IconButton>
                    <IconButton style="default"
                        icon="close"
                        onClick={this.props.clear}>
                    </IconButton>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription, search, add, clear }, dispatch);

export default
    connect(mapStateToProps, mapDispatchToProps)
        (TodoForm);