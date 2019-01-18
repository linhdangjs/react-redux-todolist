import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }

    onSearch = () => {
        console.log(this.state.keyword);
        this.props.onSearchTask(this.state.keyword);
    }

    render() {
        
        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input 
                        type="text" 
                        name = "keyword"
                        className="form-control" 
                        placeholder="Nhập từ khóa..." 
                        value = { this.state.keyword }
                        onChange = { this.onChange }    
                    />
                    <span className="input-group-btn">
                        <button 
                            className="btn btn-primary" 
                            type="button"
                            onClick = { this.onSearch }
                        >
                            <span className="fa fa-search mr-5"></span>Tìm
           </button>
                    </span>
                </div>
            </div>
        );
    }
}

//chuyển state, dispatch của store chuyển thành các props của component này
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearchTask: (keyword) => {
            dispatch(actions.searchTask(keyword));
        }
    }
};

export default connect(null, mapDispatchToProps)(TaskSearch);
