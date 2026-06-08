const Event = (props) => {

    return (
        <td className={'event ' + props.color}>
            <h5>{props.event}</h5>
        </td>
    )
}

export default Event; 