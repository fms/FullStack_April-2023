
async function handleAddTask(event: SubmitEvent) {
    event.preventDefault();

    // Get form fields
    const formData = new FormData(event.target as HTMLFormElement);
    const title = formData.get('title');
    const description = formData.get('description');

    // New task to add
    const newTask = { title, description };

    const response = await fetch('/api/tasks/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    });

  
}
