const AddANew = ({ addName,
    newName,
    handleNameInput,
    newNumber,
    handleNumberInput }) =>
    <div>
        <h2>add a new</h2>
        <form onSubmit={addName}>
            <div>
                name: <input value={newName}
                    onChange={handleNameInput} />
            </div>

            <div>
                number: <input value={newNumber}
                    onChange={handleNumberInput} />
            </div>

            <div>
                <button type="submit">add</button>
            </div>
            {/* <div>debug: {newName}</div> */}
        </form>
    </div>

export default AddANew