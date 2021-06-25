// props
type ButtonProps = {
    children?: string;
}

// named export
export function Button(props:ButtonProps) {
    return (
        <button>{props.children || 'default'}</button>
    )
}