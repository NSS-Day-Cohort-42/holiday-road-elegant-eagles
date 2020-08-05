export const eateryHTMLConverter = (eateryObject) => {
    return `
        <div>
            <h4>${eateryObject.businessName}</h4>
        </div>
        <button id="detailButton--${eateryObject.id}">Details</button>
        <dialog class="eatery--${eateryObject.id}">
            <button id="closeWindow">x</button>
            <div class="description">${eateryObject.description}</div>
            <div class="location">${eateryObject.city}, ${eateryObject.state}</div>
        </dialog>
    `
}

//what it will look like in the preview window