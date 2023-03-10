const PersonForm = ({ handleNameChange, handleNumberChange, handleSubmitPerson, valueName, valueNumber, type }) => {

  return (
    <form onSubmit={handleSubmitPerson}>
      <div>
        Name:
        <input
          required
          value={valueName}
          onChange={handleNameChange}
        />
        <div>
          Phone:
          <input
            required
            value={valueNumber}
            onChange={handleNumberChange} />
        </div>
        <button type={type}>Add</button>
      </div>
    </form>
  )
}

export default PersonForm