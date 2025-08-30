
let holder = document.getElementById("holder");

let input = document.getElementById('input1');
let addt = document.getElementById("addt");


addt.addEventListener('click', (event) => {
    let task = document.createElement('div');
    task.innerText = `${input.value}`;
    let chkbox = document.createElement('input');
    chkbox.type = "checkbox";
    task.appendChild(chkbox);

    input.value = "";
    task.classList.add('task');
    holder.appendChild(task);

    chkbox.addEventListener('click', () => {
        if (chkbox.checked) {
            task.style.textDecoration = 'line-through';
        } else {
            task.style.textDecoration = 'none';
        }
    });
});

let remt = document.getElementById("remt");

let remClicked = (event) => {
    let tasks = holder.querySelectorAll('.task');

    // Add click event listeners to all tasks
    const removeTask = function () {
        // Remove the clicked task
        holder.removeChild(this);

        // Remove event listeners from all other tasks
        tasks.forEach(task => task.removeEventListener('click', removeTask));
    };

    tasks.forEach(task => {
        task.addEventListener('click', removeTask);
    });
};

// Add event listener to the "Remove task" button
remt.addEventListener('click', remClicked);

