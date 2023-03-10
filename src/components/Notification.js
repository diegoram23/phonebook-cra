const Notification = ({ successMessage, errMessage }) => {
    if (successMessage !== null) {
        return (
            <h3 className="success-message"> {successMessage}</h3>
        )
    }

    if (errMessage !== null) {
        return (
            <h3 className="error-message"> {errMessage}</h3>
        )
    }

}

export default Notification