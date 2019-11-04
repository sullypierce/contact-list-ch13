
import contactHtml from "./contact.js"
import jsonCollection from "./contactCollection.js"

//make contact list and add to dom

const contactList = {
    //input should be an array of objects
    postList: () => {
        jsonCollection.getContacts().then((contactObjs) => {
        let containerRef = document.getElementById("listContainer")
        containerRef.innerHTML = "<h1>Contact List</h1>"
        contactObjs.forEach(contact => {
            containerRef.innerHTML += contactHtml.makeContactCard(contact)
        }
        )})
}
}
export default contactList