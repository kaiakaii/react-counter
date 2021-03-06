import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = { count: 0,size:0 };
    }


    onClickAdd=() => {
        this.setState(state => {
            return {count:state.count+1}
        })
        this.props.updateAdd()
    }
    onClickDel=() => {
        this.setState({ count: this.state.count - 1 })
        this.props.updateDel()
    }
    static getDerivedStateFromProps(props,state) {
        if(props.groupSize !== state.size) {
            return {
                count : 0,
                size : props.groupSize
            }
        }
        return null;
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickAdd}>+</button>
                {this.state.count}
                <button onClick={this.onClickDel}>-</button>
            </div>
        );
    }
}


export default Counter;