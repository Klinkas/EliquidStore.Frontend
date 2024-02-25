export interface EliquidRequest {
    name: string;
    flavor: string;
    capacity: number;
}

export const getAllEliquids = async () => {
    const response = await fetch("http://localhost:5151/Eliquids");

    return response.json();
}

export const createEliquid = async (eliquidrequest: EliquidRequest) => {
    await fetch("http://localhost:5151/Eliquids", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(eliquidrequest),
    });
}

export const updateEliquid = async (id: string, eliquidrequest: EliquidRequest) => {
    await fetch(`http://localhost:5151/Eliquids/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(eliquidrequest),
    });
}

export const deleteEliquid = async (id: string) => {
    await fetch(`http://localhost:5151/Eliquids/${id}`, {
        method: "DELETE",
    });
}