import React from 'react';
import './itemTable.css'

const ModeButtons = ({ isEditing, saveClick, editClick, funkyDelete }) => {

    return isEditing ? (
        <td>
            <button className="save-button" onClick={saveClick}>Save</button>
        </td>
  ) : (
        <td>
            <button className="edit-button" onClick={editClick}>Edit </button>
                or
            <button className="delete-button" onClick={funkyDelete}> Delete</button>
        </td>
  )
}

export default ModeButtons;