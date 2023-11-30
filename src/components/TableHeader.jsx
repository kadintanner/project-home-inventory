const TableHeader = () => {

    return (
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Date</th>
            <th>Location</th>
            {/* <th>Category</th> */}
            <th></th> {/* this sits above edit buttons */}
        </tr>
    )
}

export default TableHeader