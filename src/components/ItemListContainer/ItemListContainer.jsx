import ItemCount from "../ItemCount/ItemCount"

export default function ItemListContainer (props){

    const onAdd = (cantidad) => {
        alert(`Se agregó ${cantidad}`);
    }

    return(
        <>
        {/* <div className="musicos">
        <h6>
            <strong>{props.name}</strong> ({props.instrument})
        </h6>
        </div> */}
        <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
        </>
    )
}