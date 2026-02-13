import classes from "./DescriptionCard.module.css"

export default function DescriptionCard(props) {
    console.log(props.title)
    const { title, description } = props
    return (
        <div className={classes["card"]}>
            <h3 className={classes["title"]}>{title}</h3>
            <p className={classes["title"]}>{description}</p>
        </div>
    )
}