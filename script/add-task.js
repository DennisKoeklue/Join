const BASE_URL = "https://joinproject-51c1f-default-rtdb.europe-west1.firebasedatabase.app/";
let addTaskTemp = []

async function pushAddTask() {
    try {
        const response = await fetch(BASE_URL + ".json");
        if (!response.ok) {
            throw new Error("HTTP error: ${response.status}")
        }
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log("HTTP error: ${response.status}");
    }
}

pushAddTask()




function createTask() {
    addtoTask();
    clearInputs();
}

function addtoTask(e) {
    e?.preventDefault?.();

    const get = id => (document.getElementById(id)?.value ?? '').trim();

    const result = {
        title: get('title'),
        description: get('description'),
        duedate: get('due-date'), 
        assigned: get('assigned'),
        category: get('category'),
        subtasks: get('subtasks'),
        priority: document.querySelector('input[name="priority"]:checked')?.value ?? null
    };
    console.table(result);
    return result;
}

function clearInputs() {
    title.value = '';
    description.value = '';
    duedate.value = '';
    assigned.value = 'Select contacts to';
    category.value = 'Select task category';
    subtasks.value = '';
}

function PrioBTN(){
    document.getElementById("prio-urgent").style.backgroundColor = "#FF3D00";
    document.getElementById("prio-urgent").style.color = "#FFFFFF";
    document.getElementById("prio-urgent-svg").style.fill = "#FFFFFF";
}
