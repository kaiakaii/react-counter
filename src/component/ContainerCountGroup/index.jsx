
import { connect } from 'react-redux'
import CountGroup from '../CountGroup'


const mapDispatchToProps = (dispatch) => {
    return {
        updateAdd: () => dispatch({ type: 'INCREMENT' }),
        updateDel: () => dispatch({ type: 'DECREMENT' }),
        updateSize: (groupSize ,inputValue)=> {
            dispatch({ type: 'CHANGE_SIZE', value: groupSize,inputValue: inputValue })}
    }
}

const mapStateToProps = (state) => {
    console.log("================="+state.counter.groupSize);
    
    return {
        total: state.counter.total,
        groupSize: state.counter.groupSize
    }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CountGroup);