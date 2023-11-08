const TableHeader = () => {

    return (
        <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Date</th>
            <th>Location</th>
            <th></th> {/* this will sit above edit buttons */}
        </tr>
    )
}

export default TableHeader