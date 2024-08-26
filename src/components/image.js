
export default function Image(props){
    return(
        <img
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
        />
    )
}