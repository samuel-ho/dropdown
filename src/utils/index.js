
export const createOptionsObj = (optionsArr) => {
    let checkboxes = {};
    for(let option of optionsArr) {
        checkboxes[option] = false;
    }
    return checkboxes;
}