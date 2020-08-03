import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = { count: 0 };
    }
    componentDidMount() {
        console.log("*********************just do it!")
    }
  
    componentWillUnmount() {
        console.log("*********************bye bye!")
    }

    onClickAdd=() => {
        this.props.inParent()
        this.setState(state => {
          return {count:state.count+1}
        })
    }
    onClickDel=() => {
        this.props.delParent()
        this.setState({ count: this.state.count - 1 })
    }
    componentWillUnmount(){
        this.props.moveParent(this.state.count)
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