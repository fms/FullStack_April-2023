let exercisesArray: Exercise[] = [];
let editMode = false;
let counter: number = 1
let lastAssignedId = parseInt(localStorage.getItem('lastAssignedId') || '0') || 0;
loadFromLocalStorage()

class Workout {
    private static newId = 0;
    public id: number;
    public exercises: Exercise[];

    constructor(public name: string, public date: string, public duration: number, exercisesArray: Exercise[]) {
        Workout.newId++;
        this.id = Workout.newId;
        this.exercises = exercisesArray
    }
}

class Exercise {
    private static newId = 0;
    public id: number;

    constructor(public name: string, public sets: number, public reps: number, public weight: number) {
        Exercise.newId++;
        this.id = Exercise.newId;
    }
}

function addWorkout(event: MouseEvent) {
    event.preventDefault();

    const form = document.querySelector(".form ") as HTMLFormElement;
    const pendingExercisesDiv = document.querySelector(".pending-exercises") as HTMLDivElement;
    const workoutName = (document.querySelector(".form__workout-name") as HTMLInputElement).value;
    const workoutDate = (document.querySelector(".form__workout-date") as HTMLInputElement).value;
    const workoutDuration = Number((document.querySelector(".form__workout-duration") as HTMLInputElement).value);

    const workout = new Workout(workoutName, workoutDate, workoutDuration, exercisesArray);

    workoutBoxTemplate(workout);
    exercisesArray = [];
    form.reset();
    pendingExercisesDiv.textContent = "";
    counter = 1;
    saveToLocalStorage(workout);
}

function workoutBoxTemplate(workout: Workout) {
    const workoutBoxesDiv = document.querySelector(".workout-details") as HTMLDivElement;
    const existingWorkoutBox = document.getElementById(workout.id.toString());

    const workoutBox = document.createElement("div") as HTMLDivElement;
    workoutBox.classList.add("workout-box")

    const workoutBoxDetails = document.createElement("div") as HTMLDivElement;
    workoutBoxDetails.classList.add("workout-box-details")

    const workoutName = document.createElement("p") as HTMLParagraphElement;
    const workoutDate = document.createElement("p") as HTMLParagraphElement;
    const workoutDuration = document.createElement("p") as HTMLParagraphElement;

    const deleteButton = createButton("deleteButton", "Delete", (event: MouseEvent) => deleteWorkout(event, workout.id));
    const editButton = createButton("editButton", "Edit", (event: MouseEvent) => editWorkout(event, workoutBox, workout, deleteButton));

    workoutName.textContent = workout.name;
    workoutDate.textContent = workout.date;
    workoutDuration.textContent = `${workout.duration} Mins`;

    if (existingWorkoutBox) {
        existingWorkoutBox.replaceWith(workoutBox);
    } else {
        workoutBoxesDiv.appendChild(workoutBox);
    }

    setTimeout(() => {
        workoutBox.classList.add('show');
    }, 100);

    workoutBox.appendChild(workoutName)
    workoutBox.appendChild(workoutDate)
    workoutBox.appendChild(workoutBoxDetails);
    workoutExercisesInBox(workout, workoutBox)
    workoutBox.appendChild(workoutDuration)
    workoutBox.appendChild(deleteButton);
    workoutBox.appendChild(editButton);
    workoutBox.id = workout.id.toString();
    workoutBoxesDiv.appendChild(workoutBox);
}

function addPendingExercise() {
    const exerciseNameInput = document.querySelector(".form__exercise-name") as HTMLInputElement;
    const exerciseSetsInput = document.querySelector(".form__exercise-sets") as HTMLInputElement;
    const exerciseRepsInput = document.querySelector(".form__exercise-reps") as HTMLInputElement;
    const exerciseWeightInput = document.querySelector(".form__exercise-weight") as HTMLInputElement;

    const exerciseName = exerciseNameInput.value;
    const exerciseSets = Number(exerciseSetsInput.value);
    const exerciseReps = Number(exerciseRepsInput.value);
    const exerciseWeight = Number(exerciseWeightInput.value);

    const exercise = new Exercise(exerciseName, exerciseSets, exerciseReps, exerciseWeight);
    exercisesArray.push(exercise);
    exercisesPendingTemplate(exercise);

    exerciseNameInput.value = '';
    exerciseSetsInput.value = '';
    exerciseRepsInput.value = '';
    exerciseWeightInput.value = '';
}

function exercisesPendingTemplate(exercises: Exercise) {
    const pendingExercisesDiv = document.querySelector(".pending-exercises") as HTMLDivElement;
    const exercisesToAddArea = document.createElement("div");
    exercisesToAddArea.className = "exercises-to-add"

    const exerciseAddH3 = document.createElement("h3");
    const exerciseDivElement = document.createElement("div");
    exerciseDivElement.id = exercises.id.toString();
    const exerciseDetails = document.createElement("p");
    const removeExercise = createButton("deleteExercise", "Remove", (event: MouseEvent) => deletePendingExercise(event));

    exerciseAddH3.textContent = `Exercise: ${counter}`
    exerciseDetails.textContent = `${exercises.name} (${exercises.sets} X ${exercises.reps}) Weight: ${exercises.weight} kg`

    setTimeout(() => {
        exercisesToAddArea.classList.add('show');
    }, 100);

    exerciseDivElement?.appendChild(exerciseAddH3);
    exerciseDivElement?.appendChild(exerciseDetails);
    exerciseDivElement?.appendChild(removeExercise);
    exercisesToAddArea?.appendChild(exerciseDivElement);
    pendingExercisesDiv?.appendChild(exercisesToAddArea)
    counter++
}

function deletePendingExercise(event: MouseEvent) {
    let target = event.target as HTMLInputElement;
    let parentElement = target.parentElement as HTMLElement;

    if (parentElement) {
        const exerciseId = parseInt(parentElement.id);

        exercisesArray = exercisesArray.filter(exercise => exercise.id !== exerciseId);

        parentElement.parentElement?.classList.add('hide');
        setTimeout(() => {
            parentElement.parentElement?.remove();
        }, 500);
    }
}

function workoutExercisesInBox(workout: Workout, workoutBox: HTMLDivElement) {
    const excersicesAreaDiv = document.createElement("div") as HTMLDivElement;
    excersicesAreaDiv.classList.add("exersices-area-div");

    const addExercises = createButton("addExercise", "Add", () => addWorkoutInBox(workout, workoutBox));
    addExercises.classList.add("hidden")
    excersicesAreaDiv.appendChild(addExercises);

    workout.exercises.forEach((exercise) => {
        const workoutExercises = document.createElement("p") as HTMLParagraphElement;

        const exerciseWithButtonsDiv = document.createElement("div") as HTMLParagraphElement;
        exerciseWithButtonsDiv.classList.add("exerciseWithButtonsDiv");

        const changeExercises = createButton("changeExercise", "Change", (event: MouseEvent) => changeWorkoutInBox(event, workout, exercise.id)) as HTMLInputElement;
        const xExercise = createButton("xExercise", "X", (event: MouseEvent) => deleteExerciseInBox(event, workout, exercise.id)) as HTMLInputElement;

        workoutExercises.textContent = `${exercise.name} (${exercise.sets} X ${exercise.reps}) Weight: ${exercise.weight} kg`;

        exerciseWithButtonsDiv.appendChild(workoutExercises);
        exerciseWithButtonsDiv.appendChild(changeExercises);
        exerciseWithButtonsDiv.appendChild(xExercise);
        excersicesAreaDiv.appendChild(exerciseWithButtonsDiv);
    });

    workoutBox.appendChild(excersicesAreaDiv);
}

function addWorkoutInBox(workout: Workout, workoutBox: HTMLDivElement) {
    const form = document.querySelector(".form") as HTMLFormElement;
    let exerciseNameInput = (document.querySelector(".form__exercise-name") as HTMLInputElement).value;
    let exerciseSetsInput = Number((document.querySelector(".form__exercise-sets") as HTMLInputElement).value);
    let exerciseRepsInput = Number((document.querySelector(".form__exercise-reps") as HTMLInputElement).value);
    let exerciseWeightInput = Number((document.querySelector(".form__exercise-weight") as HTMLInputElement).value);

    const exercise = new Exercise(exerciseNameInput, exerciseSetsInput, exerciseRepsInput, exerciseWeightInput);

    workout.exercises.push(exercise);

    const exerciseDetails = document.createElement("p") as HTMLParagraphElement;
    exerciseDetails.textContent = `${exercise.name} (${exercise.sets} X ${exercise.reps}) Weight: ${exercise.weight} kg`;

    const exercisesAreaDiv = workoutBox.querySelector(".exersices-area-div") as HTMLDivElement;
    exercisesAreaDiv.appendChild(exerciseDetails);
    form.reset()
}

function deleteExerciseInBox(event: MouseEvent, workout: Workout, exerciseId: number) {
    let target = event.target as HTMLInputElement;
    const exerciseToDelete = workout.exercises.find(exercise => exercise.id === exerciseId);

    if (target && exerciseToDelete) {
        const exerciseToDeleteIndex = workout.exercises.indexOf(exerciseToDelete)

        workout.exercises.splice(exerciseToDeleteIndex, 1)

        target.parentElement?.classList.add('removing');
        setTimeout(() => {
            target.parentElement?.remove();
        }, 500);
    }
}

function changeWorkoutInBox(event: MouseEvent, workout: Workout, exerciseId: number) {
    const form = document.querySelector(".form") as HTMLFormElement;
    let target = event.target as HTMLInputElement;
    let parentElement = target.parentElement as HTMLDivElement;
    let pExercise = parentElement.firstChild as HTMLParagraphElement;

    let exerciseNameInput = (document.querySelector(".form__exercise-name") as HTMLInputElement).value;
    let exerciseSetsInput = Number((document.querySelector(".form__exercise-sets") as HTMLInputElement).value);
    let exerciseRepsInput = Number((document.querySelector(".form__exercise-reps") as HTMLInputElement).value);
    let exerciseWeightInput = Number((document.querySelector(".form__exercise-weight") as HTMLInputElement).value);

    if (target) {
        pExercise.textContent = `${exerciseNameInput} (${exerciseSetsInput} X ${exerciseRepsInput}) Weight: ${exerciseWeightInput} kg`

        const exerciseToUpdate = workout.exercises.find(exercise => exercise.id === exerciseId);

        if (exerciseToUpdate) {
            exerciseToUpdate.name = exerciseNameInput;
            exerciseToUpdate.sets = exerciseSetsInput;
            exerciseToUpdate.reps = exerciseRepsInput;
            exerciseToUpdate.weight = exerciseWeightInput;
            form.reset();
        }
    }
}

function deleteWorkout(event: MouseEvent, workoutId: Number) {
    let target = event.target as HTMLInputElement;
    let parentElement = target.parentElement as HTMLElement;

    parentElement.classList.add('hide');
    setTimeout(() => {
        parentElement.remove();
    }, 500);
    deleteFromLocalStorage(workoutId);
}

function editWorkout(event: MouseEvent, workoutBox: HTMLDivElement, workout: Workout, deleteButton: HTMLInputElement) {
    const addExercise = workoutBox.querySelectorAll(".addExercise") as NodeListOf<HTMLElement>;
    const xExercise = workoutBox.querySelectorAll(".xExercise") as NodeListOf<HTMLElement>;
    const changeExercise = workoutBox.querySelectorAll(".changeExercise") as NodeListOf<HTMLElement>;

    let target = event.target as HTMLInputElement;

    if (target && !editMode) {
        target.classList.add("hidden");
        deleteButton.classList.add("hidden");
        addExercise.forEach(button => button.style.display = "flex");
        xExercise.forEach(button => button.style.display = "flex");
        changeExercise.forEach(button => button.style.display = "flex");

        const updateButton = createButton("updateButton", "Update", (event: MouseEvent) => updateButtonHandler(event, workout, target, cancelButton, updateButton, workoutBox));
        const cancelButton = createButton("cancelButton", "Cancel", () => removeEditButtons(target, cancelButton, updateButton, workoutBox));
        const nameInput = createInput("text", "workout-name temp-input", workout.name, "Workout Name");
        const dateInput = createInput("date", "workout-date temp-input", workout.date, "Date");
        const durationInput = createInput("number", "workout-duration temp-input", workout.duration.toString(), "Duration");

        workoutBox.appendChild(nameInput);
        workoutBox.appendChild(dateInput);
        workoutBox.appendChild(durationInput);
        workoutBox.appendChild(updateButton);
        workoutBox.appendChild(cancelButton);
        editMode = true;
    }
}

function updateButtonHandler(event: MouseEvent, workout: Workout, editButton: HTMLInputElement, cancelButton: HTMLInputElement, updateButton: HTMLInputElement, workoutBox: HTMLDivElement) {
    event.preventDefault();

    const newWorkoutName = (document.querySelector(".workout-box input[type='text']") as HTMLInputElement).value;
    const newWorkoutDate = (document.querySelector(".workout-box input[type='date']") as HTMLInputElement).value;
    const newWorkoutDuration = Number((document.querySelector(".workout-box input[type='number']") as HTMLInputElement).value);

    workout.name = newWorkoutName;
    workout.date = newWorkoutDate;
    workout.duration = newWorkoutDuration;

    const workoutNameElement = workoutBox.querySelector('.workout-name') as HTMLInputElement;
    const workoutDateElement = workoutBox.querySelector('.workout-date') as HTMLInputElement;
    const workoutDurationElement = workoutBox.querySelector('.workout-duration') as HTMLInputElement;

    workoutNameElement.textContent = newWorkoutName;
    workoutDateElement.textContent = newWorkoutDate;
    workoutDurationElement.textContent = `${newWorkoutDuration} Mins`;

    console.log(workout);
    updateLocalStorage(workout);

    removeEditButtons(editButton, cancelButton, updateButton, workoutBox);
}

function removeEditButtons(editButton: HTMLInputElement, cancelButton: HTMLInputElement, updateButton: HTMLInputElement, workoutBox: HTMLDivElement) {
    const tempInputs = workoutBox.querySelectorAll(".temp-input");
    const deleteButton = workoutBox.querySelector(".deleteButton");
    const xExercise = document.querySelectorAll(".xExercise") as NodeListOf<HTMLElement>;
    const changeExercise = document.querySelectorAll(".changeExercise") as NodeListOf<HTMLElement>;

    tempInputs.forEach(input => input.remove());
    deleteButton?.classList.remove("hidden");
    xExercise.forEach(button => button.style.display = "none");
    changeExercise.forEach(button => button.style.display = "none");

    editButton.classList.remove("hidden");
    cancelButton.remove();
    updateButton.remove();
    location.reload();

    editMode = false;
}

function saveToLocalStorage(workoutDetails: Workout) {
    lastAssignedId++;

    workoutDetails.id = lastAssignedId;

    const workouts = localStorage.getItem("workouts")
    let parsedWorkouts: Workout[] = workouts ? JSON.parse(workouts) : [];
    console.log(parsedWorkouts);

    if (Array.isArray(parsedWorkouts)) {
        parsedWorkouts.push(workoutDetails);
        console.log(parsedWorkouts);
    } else {
        parsedWorkouts = [workoutDetails];
        console.log(parsedWorkouts);
    }
    console.log(parsedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(parsedWorkouts));

    localStorage.setItem('lastAssignedId', String(lastAssignedId));
}

function loadFromLocalStorage() {
    const workouts = localStorage.getItem("workouts");

    if (workouts) {
        let parsedWorkouts = JSON.parse(workouts);

        if (Array.isArray(parsedWorkouts)) {
            parsedWorkouts.forEach((workout: Workout) => {
                workoutBoxTemplate(workout);
            })
        }
    }
}

function deleteFromLocalStorage(workoutId: Number) {
    const workouts = localStorage.getItem("workouts")
    let parsedWorkouts: Workout[] = JSON.parse(workouts!);

    const index = parsedWorkouts.findIndex(workout => workout.id === Number(workoutId));

    if (index !== -1) {
        parsedWorkouts.splice(index, 1);
        console.log(parsedWorkouts);
        localStorage.setItem("workouts", JSON.stringify(parsedWorkouts));
    }
}

function updateLocalStorage(updatedWorkout: Workout) {
    const workouts = localStorage.getItem("workouts");
    let parsedWorkouts: Workout[] = workouts ? JSON.parse(workouts) : [];

    const index = parsedWorkouts.findIndex(workout => workout.id === updatedWorkout.id);

    if (index !== -1) {
        parsedWorkouts[index] = updatedWorkout;
        localStorage.setItem("workouts", JSON.stringify(parsedWorkouts));
    }
}

function createButton(className: string, value: string, clickHandler: any) {
    const button = document.createElement("input");
    button.type = "button";
    button.className = className;
    button.value = value;
    button.addEventListener("click", clickHandler);
    return button;
}

function createInput(type: string, className: string, value: string, placeholder: string) {
    const input = document.createElement("input") as HTMLInputElement;
    input.type = type;
    input.className = className;
    input.value = value;
    input.placeholder = placeholder;
    return input;
}