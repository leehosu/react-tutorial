import { connect } from "react-redux";
import Counter from "./Counter";

//redux 상태를 component 속성에 매핑
function mapStateToProps(state){
    return {
        countValue : state.count
    };
}

//action
var increaseAction = { type : "increase" };
var decreaseAction = { type : "decrease" };

//redux action을 component 속성에 매핑
function mapDispatchToProps(dispatch){
    return {
        increaseCount : function() {
            return dispatch(increaseAction);
        },
        decreaseCount : function() {
            return dispatch(decreaseAction);
        }
    };
}

//HOC
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default connectedComponent;  