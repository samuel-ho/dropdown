
export const createInitialState = (optionsArr) => {
    let checkboxes = {};
    for(let option of optionsArr) {
        checkboxes[option] = false;
    }
    return checkboxes;
}