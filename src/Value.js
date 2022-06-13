import { connect } from "react-redux";

const Value = ({value}) => {

    return <span>{value}</span>
}

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

export default connect(mapStateToProps)(Value);