import NameCell from './NameCell'
import DescriptionCell from './DescriptionCell'
import CostCell from './CostCell'
import DateCell from './DateCell'
import LocationCell from './LocationCell'
import formatCurrency from '../utils/formatCurrency'
import { useState } from 'react'
import axios from 'axios'

const TableRow = ({ initialIsEditing, initialItemData, deleteFunc, id }) => {

    const [editMode, setEditMode] = useState(initialIsEditing)
    const [name, setName] = useState(initialItemData.name)
    const [description, setDescription] = useState(initialItemData.description)
    const [cost, setCost] = useState(initialItemData.cost)
    const [date, setDate] = useState(initialItemData.date)
    const [location, setLocation] = useState(initialItemData)

    const changeNormalMode = async () => {
        let bodyObject = {
            name: name,
            description: description,
            cost: cost,
            date: date,
            location: location
        }

        const response = await axios.put(`/editItem/${id}`, bodyObject)

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