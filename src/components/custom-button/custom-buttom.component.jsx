import './custom-button.style.scss'


const CustomButton = ({children, isGoogleButton, inverted, ...otherProps}) => (
    <button className={ `${inverted ? 'inverted': ''}  ${isGoogleButton ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton