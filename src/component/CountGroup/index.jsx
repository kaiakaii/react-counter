import React from 'react';
import Counter from '../Counter/index';

class CountGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0, total: 0 }

    }
    handelChange = event => {
        this.setState({
            count: Number(event.target.value),
            total: 0
        })
    }
    inParent = () => {
        this.setState({
            total: this.state.total + 1
        })
    }
    delParent = () => {
        this.setState({
            total: this.state.total - 1
        })

    }
    moveParent = value => {
        console.log(value)
        this.setState({
            total: this.state.total - value
        })
    }

    render() {
        const counterArray = [...Array(this.state.count).keys()];
        return (
            
            <div>
                <span>Number of counters:</span><input type="number"  onChange={this.handelChange} />
                <p>Total:{this.state.total}</p>
                {counterArray.map((key) => <Counter key={key} inParent={this.inParent} delParent={this.delParent} size={this.state.count} />)}
            </div>

        )
    }

}

export default CountGroup;