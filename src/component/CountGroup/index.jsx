import React from 'react';
import Counter from '../Counter/index';

class CountGroup extends React.Component {

    
    handelChange = event => {
        // console.log(this.props)
        this.props.updateSize(Number(event.target.value))
    }

    render() {
        const counterArray = [...Array(this.props.groupSize).keys()];
        return (
            <div>
                <span>Number of counters:</span><input type="number" value={this.props.groupSize} onChange={this.handelChange} />
                <hr/>
                <p>Total:{this.props.total}</p>
                {
                    counterArray.map((key) => <Counter key={key} 
                    updateAdd={this.props.updateAdd} 
                    updateDel={this.props.updateDel}
                    groupSize={this.props.groupSize} />)}
            </div>

        )
    }
    

}

export default CountGroup;