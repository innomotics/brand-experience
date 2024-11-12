export function waitForElement(selector, doc, timeout = 3000) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        const checkIfElementExist = () => {
            const dialog = doc.querySelector(selector);
            if (dialog) {
                resolve(dialog);
            }
            else {
                if (Date.now() - startTime < timeout) {
                    setTimeout(checkIfElementExist);
                }
                else {
                    reject();
                }
            }
        };
        checkIfElementExist();
    });
}
//# sourceMappingURL=waitForElement.js.map
