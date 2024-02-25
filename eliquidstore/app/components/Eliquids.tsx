import Card from "antd/es/card/Card"
import { CardName } from "./Cardname"
import Button from "antd/es/button/button"

interface Props {
    eliquids: Eliquid[];
    handleDelete: (id: string) => void;
    handleOpen: (eliquid: Eliquid) => void;
}

export const Eliquids = ({eliquids, handleDelete, handleOpen}: Props) => {
    return (
        <div className="cards">
            {eliquids.map((eliquid : Eliquid) => (
                <Card key={eliquid.id} title={<CardName name={eliquid.name} flavor={eliquid.flavor} capacity={eliquid.capacity}/>} bordered={false}>

                    <div className="card__buttons">
                        <Button onClick={() => handleOpen(eliquid)} style={{flex: 1}}>Изменить</Button>
                        <Button onClick={() => handleDelete(eliquid.id)} danger style={{flex: 1}}>Удалить</Button>
                    </div>
                </Card>
                
            ))}
        </div>
    )
}