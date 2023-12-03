function CustomButton({buttonDescription, disabledButton}) {
    return (
        <button
            type="type"
            onClick={() => console.log(buttonDescription)}
            disabled={disabledButton}
            > {buttonDescription}
        </button>

    )
}

export default CustomButton;