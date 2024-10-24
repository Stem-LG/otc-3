export function ListItem({ i, note, deleteNote }) {
    return (
        <div
            style={{
                display: "flex",
                gap: "50px",
                alignItems: "center",
            }}
        >
            <button
                onClick={() => {
                    deleteNote(i);
                }}
            >
                delete
            </button>
            <li
                style={{
                    color: "red",
                }}
            >
                {note}
            </li>
        </div>
    );
}
