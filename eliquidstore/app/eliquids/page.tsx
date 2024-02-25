"use client";
import Button from "antd/es/button/button"
import { useEffect, useState } from "react";
import { EliquidRequest, createEliquid, deleteEliquid, getAllEliquids, updateEliquid } from "../services/eliquids";
import { Eliquids } from "../components/Eliquids";
import Title from "antd/es/typography/Title";
import { CreateUpdateEliquid, Mode } from "../components/CreateUpdateEliquid";

export default function EliquidsPage() {
    const defaultValues = {
        name: "",
        flavor: "",
        capacity: 10,
    } as Eliquid;

    const [values, setValues] = useState<Eliquid>({
        name: "",
        flavor: "",
        capacity: 10,
    } as Eliquid);

    const [eliquids, setEliquids] = useState<Eliquid[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState(Mode.Create)

    useEffect(() => {
        const getEliquids = async () => {
            const eliquids = await getAllEliquids();
            setLoading(false);
            setEliquids(eliquids);
        };

        getEliquids();
    }, [])

    const handleCreateEliquid = async (request: EliquidRequest) => {
        await createEliquid(request);
        closeModal();

        const eliquids = await getAllEliquids();
        setEliquids(eliquids);
    }

    const handleUpdateEliquid = async (id: string, request: EliquidRequest) => {
        await updateEliquid(id, request)
        closeModal();

        const eliquids = await getAllEliquids();
        setEliquids(eliquids);
    }

    const handleDeleteEliquid = async (id: string) => {
        await deleteEliquid(id);
        closeModal();

        const eliquids = await getAllEliquids();
        setEliquids(eliquids);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setValues(defaultValues)
        setIsModalOpen(false);
    }

    const openEditModal = (eliquid: Eliquid) => {
        setMode(Mode.Edit);
        setValues(eliquid);
        setIsModalOpen(true);
    }

    return (
        <div>
            <Button type="primary" style={{marginTip: "30px"}} size="large" onClick={openModal}>Добавить жижу</Button>

            <CreateUpdateEliquid mode={mode} values={values}
            isModalOpen={isModalOpen} handleCreate={handleCreateEliquid}
            handleUpdate={handleUpdateEliquid}
            handleCancel={closeModal}/>

            {loading ? (<Title>Загрузка ниггатина</Title>) : <Eliquids eliquids={eliquids} handleOpen={openEditModal} handleDelete={handleDeleteEliquid}/>}
        </div>
    )
}