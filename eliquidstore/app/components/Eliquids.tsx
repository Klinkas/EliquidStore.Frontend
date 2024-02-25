import Card from "antd/es/card/Card"
import { CardName } from "./Cardname"
import Button from "antd/es/button/button"

interface Props {
    eliquids: Eliquid[]
}

export const Eliquids = ({eliquids}: Props) => {
    return (
        <div className="cards">
            {eliquids.map((eliquid : Eliquid) => (
                <Card key={eliquid.id} title={<CardName name={eliquid.name} flavor={eliquid.flavor} capacity={eliquid.capacity}/>} bordered={false}/>
            ))}
            <div className="card__buttons">
                <Button>Изменить</Button>
                <Button>Удалить</Button>
            </div>
        </div>
    )
}