//receive object and create html template for info

const contactHtml = {
    makeContactCard: (contactObj) => {
        const contactCard = `  <div id="${contactObj.id}">
        <h2>${contactObj.name}</h2>
        <p>${ contactObj.number}</p>
        <p>${contactObj.address}</p>
      </div>`
      return contactCard
    }
}

export default contactHtml