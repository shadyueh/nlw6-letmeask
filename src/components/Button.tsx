// props
type ButtonProps = {
    text?: string;
}

// named export
export function Button(props:ButtonProps) {
    return (
        <button>{props.text || 'default'}</button>
    )
}