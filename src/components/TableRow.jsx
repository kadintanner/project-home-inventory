import NameCell from './NameCell'
import DescriptionCell from './DescriptionCell'
import CostCell from './CostCell'
import DateCell from './DateCell'
import LocationCell from './LocationCell'
import { useState } from 'react'
import axios from 'axios'
import ModeButtons from './ModeButtons'
import CategoryCell from './CategoryCell'

const TableRow = ({ initialIsEditing, initialItemData, deleteFunc, id }) => {

    const [editMode, setEditMode] = useState(initialIsEditing)
    const [name, setName] = useState(initialItemData.name)
    const [description, setDescription] = useState(initialItemData.description)
    const [cost, setCost] = useState(initialItemData.cost)
    const [date, setDate] = useState(initialItemData.date)
    const [location, setLocation] = useState(initialItemData.location)
    const [category, setCategory] = useState(initialItemData.category)

    const changeNormalMode = async () => {
        let bodyObj = {
            name: name,
            description: description,
            cost: cost,
            date: date,
            location: location,
            category: category
        }

        const response = await axios.put(`/editItem/${id}`, bodyObj)

        if (!response.data.error) {
            setEditMode(false)
        } else {
            alert(response.data.error)
        }

    }

    const changeEditMode = () => setEditMode(true)


    return (
        <>
            <tr>
                <NameCell
                    isEditing={editMode}
                    value={name}
                    onValueChange={setName}
                />

                <DescriptionCell
                    isEditing={editMode}
                    value={description}
                    onValueChange={setDescription}
                />

                <CostCell
                    isEditing={editMode}
                    value={cost}
                    onValueChange={setCost}
                />

                <DateCell
                    isEditing={editMode}
                    value={date}
                    onValueChange={setDate}
                />

                <LocationCell
                    isEditing={editMode}
                    value={location}
                    onValueChange={setLocation}
                />

                <CategoryCell
                    isEditing={editMode}
                    value={category}
                    onValueChange={setCategory}
                />

                <ModeButtons
                    isEditing={editMode}
                    saveClick={changeNormalMode}
                    editClick={changeEditMode}
                    funkyDelete={deleteFunc}
                />
                <td>

                </td>
            </tr>
        </>
    )
}

export default TableRow