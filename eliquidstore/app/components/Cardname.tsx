interface Props {
    name: string;
    flavor: string;
    capacity: number;
}

export const Cardname = ({name, flavor, capacity}: Props) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <p className="card_name">{name}</p>
            <p className="card_flavor">{flavor}</p>
            <p className="card_capacity">{capacity}</p>
        </div>
    )
}