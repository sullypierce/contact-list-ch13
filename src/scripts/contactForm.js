import jsonCollection from "./contactCollection.js"
import contactList from "./contactList.js";
const contactForm = {
    formOnDom: () => {
        const formRef = document.getElementById("formContainer")
        formRef.innerHTML = contactForm.makeForm();
        document.getElementById("saveContact").addEventListener("click", () => {
            const name = document.getElementById("getName").value;
            const number = document.getElementById("getNumber").value;
            const address = document.getElementById("getAddress").value;
            jsonCollection.saveContact({ name, number, address })
            .then(contactList.postList)
        })
    },
    makeForm: () => {
        return `<fieldset>
        <legend>New Contact</legend>
        <label for="getName">Name</label>
        <input type="text" id="getName">
      
        <label for="getNumber">Phone Number</label>
        <input type="text" id="getNumber">
      
        <label for="getAddress">Address</label>
        <input type="text" id="getAddress">
      </fieldset>
      <button id="saveContact">Save</button>`
    }
}

export default contactForm