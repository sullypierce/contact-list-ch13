

const jsonCollection = {
    getContacts: () => {
        return fetch("http://localhost:8088/contacts").then(jsonData => jsonData.json())
    },
    saveContact: (contactObj) => {
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactObj)
        }
        ).then(data => data.json())
    }
}
export default jsonCollection