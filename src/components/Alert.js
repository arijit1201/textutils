import React from 'react'

let Alert = (props) => {
    let alertType = ''
    if(props.alert)
        alertType = props.alert.typ.toLowerCase()
    return (
        props.alert && <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.typ}:</strong>{props.alert.msg}
            {/* <button type="button" className="btn-close" onClick = {() => props.showAlert(null)}  aria-label="Close"></button> */}
        </div>
    )
}

export default Alert
