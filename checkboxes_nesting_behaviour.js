// Run on load
document.onclick = checkbox_nesting_behaviour;

/**
 * Checks all checkboxes that are a descendant of the `element` passed
 * @param {HTMLElement} element The element under which all children should be checked
 */
function check_all_children(element) {
    if (element.type === "checkbox" && element.classList.length === 0) {
        if (!element.checked) {
            element.checked = true;
        }
    }
    for (let child of element.children) {
        check_all_children(child);
    }
}

/**
 * Unchecks all checkboxes that are an ancestor of the `element` passed
 * @param {HTMLElement} element The element that was just unchecked
 */
function uncheck_all_parents(element) {
    if (element === null) {
        return
    }

    function uncheck(x) {
        if (x.type === "checkbox" && x.className.length === 0) {
            if (x.checked) {
                x.checked = false;
            }
        }
    }

    uncheck(element);
    for (let child of element.children) {
        uncheck(child);
    }

    uncheck_all_parents(element.parentElement);
}

function checkbox_nesting_behaviour(event) {
    const targetElement = event.target;
    if (targetElement.type === "checkbox") {
        if (targetElement.checked) {
            // Was just checked
            // Need to use parent because the checkbox itself doesn't have children.
            // The children belong to the <li> the checkbox is in.
            check_all_children(targetElement.parentElement);
        } else {
            // Was just uncheck
            uncheck_all_parents(targetElement);
        }
    }
}