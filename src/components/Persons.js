const Persons = ({searchMatch, handleDelete}) => {
    return (
        <div>
            <h2>Contacts</h2>
            {searchMatch.map(person => 
            <h5 key={person.id}>
                {person.name} 
                {person.number}
                <button onClick={() => handleDelete(person.id, person.name)}>Delete</button>
                </h5>)}
        </div>
    )
}

export default Persons