function MyForm () {
    return (
        <>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
            <form>
                <table>
                    <tr>
                        <td><label><b>Name :</b></label></td>
                        <td><input type="text" placeholder="Name" required></input></td>
                    </tr>
                    <tr>
                        <td><label><b>Family name :</b></label></td>
                        <td><input type="text" placeholder="Family name" required></input></td>
                    </tr>
                    <tr>
                        <td><label><b>Email :</b></label></td>
                        <td><input type="text" placeholder="Email" required></input></td>
                    </tr>
                    <tr>
                        <td><label><b>Phone number :</b></label></td>
                        <td><input type="number" min={10000000} max={99999999} required></input></td>
                    </tr>
                </table>
                <button style={{backgroundColor: "blue", color: "white"}}>Validate</button>
            </form>
        </div>
        </>
    );
}

export default MyForm;