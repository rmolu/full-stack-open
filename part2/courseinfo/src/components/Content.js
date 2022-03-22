import Part from "./Part"

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part) => <p key={part.id}>{part.name} {part.exercises} </p>)}
            <b>total of {parts.reduce((sum, current) => sum + current.exercises, 0)} exercises</b>
        </>
    )
}

export default Content