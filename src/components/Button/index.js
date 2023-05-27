const Button = ({ content, type, border, width, height, background, children, ...props }) => {
    return (<button
        type={type}
        style={{
            
            cursor: 'pointer',
            border: 'solid 1px ',
            borderColor: border,
            padding: '5px',
            width: width,
            height: height,
            background: background,
            ...props
        }}>
        {children} {" "}  {content}
       
    </button>)
}
export default Button