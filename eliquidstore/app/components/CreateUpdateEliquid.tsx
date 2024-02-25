import Modal from "antd/es/modal/Modal";
import { EliquidRequest } from "../services/eliquids";
import Input from "antd/es/input/Input";
import { useEffect, useState } from "react";

interface Props {
    mode: Mode;
    values: Eliquid;
    isModalOpen: boolean;
    handleCancel: () => void;
    handleCreate: (request: EliquidRequest) => void;
    handleUpdate: (id: string, request: EliquidRequest) => void;
}

export enum Mode {
    Create,
    Edit,
}

export const CreateUpdateEliquid = ({
    mode,
    values,
    isModalOpen,
    handleCancel,
    handleCreate,
    handleUpdate,
}: Props) => {
    const [name, setName] = useState<string>("");
    const [flavor, setFlavor] = useState<string>("");
    const [capacity, setCapacity] = useState<number>(10);

    useEffect(() => {
        setName(values.name)
        setFlavor(values.flavor)
        setCapacity(values.capacity)
    }, [values])

    const handleOnOk = async () => {
        const eliquidRequest = {name, flavor, capacity};

        mode == Mode.Create ? handleCreate(eliquidRequest) : handleUpdate(values.id, eliquidRequest);
    };

    return (
        <Modal title={mode == Mode.Create ? "Добавить жижу" : "Редактировать жижу"} 
            open={isModalOpen} 
            cancelText={"Отмена"}
            onOk={handleOnOk}
            onCancel={handleCancel}>
            <div className="eliquid__modal">
                <Input 
                    value={name}
                    onChange={(e) => setName(e.Target.value)}
                    placeholder="Название"/>
                <Input 
                    value={flavor}
                    onChange={(e) => setFlavor(e.Target.value)}
                    placeholder="Вкус"/>
                <Input 
                    value={capacity}
                    onChange={(e) => setCapacity(e.Target.value)}
                    placeholder="Объем"/>
            </div>
        </Modal>
    )
}