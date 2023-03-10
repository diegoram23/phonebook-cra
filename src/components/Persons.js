const Persons = ({searchMatch}) => {
    return (
        <div>
            <h2>Contacts</h2>
            {searchMatch.map(person => <h5 key={person.id}>{person.name} {person.number}</h5>)}
        </div>
    )
}

export default Persons