import { useState } from "react"
import "./AppStyle.css"

function NewTodoForm ({onSubmit}) {

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)
        setNewItem("")
    }
    
    return <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">Create new task</label>
            <input value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item" />
        </div>
        <button className="btn">Add</button>
        </form>
    </>
}

export default NewTodoForm