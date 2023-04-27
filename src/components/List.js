import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1991} />
                <Item marca='Alfa Romeo' ano_lancamento={1980} />
            </ul>
        </>
    )
}

export default List