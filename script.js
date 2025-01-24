let workTime = 25 * 60; // 25 minutos en segundos
let breakTime = 5 * 60; // 5 minutos en segundos
let timeLeft = workTime;
let timerInterval;
let isWorking = true;
let isDarkMode = false;

const timerDisplay = document.getElementById('timer');
const statusDisplay = document.getElementById('status');
const progressBar = document.getElementById('progress');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const themeToggleButton = document.getElementById('theme-toggle');

// Inputs para personalizar tiempos
const workTimeInput = document.getElementById('workTimeInput');
const breakTimeInput = document.getElementById('breakTimeInput');

// Función para iniciar el temporizador
function startTimer() {
    // Ajustar tiempos según la personalización
    workTime = parseInt(workTimeInput.value) * 60;
    breakTime = parseInt(breakTimeInput.value) * 60;
    timeLeft = isWorking ? workTime : breakTime;
    timerInterval = setInterval(updateTimer, 1000);
}

// Función para pausar el temporizador
function pauseTimer() {
    clearInterval(timerInterval);
}

// Función para reiniciar el temporizador
function resetTimer() {
    clearInterval(timerInterval);
    isWorking = true;
    timeLeft = workTime;
    updateDisplay();
    progressBar.style.width = '100%';
}

// Función para actualizar el temporizador
function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval);
        isWorking = !isWorking;
        timeLeft = isWorking ? workTime : breakTime;
        showNotification();
        startTimer();
    }
    updateDisplay();
    updateProgress();
}

// Función para actualizar el progreso visual
function updateProgress() {
    const totalTime = isWorking ? workTime : breakTime;
    const progress = (timeLeft / totalTime) * 100;
    progressBar.style.width = `${progress}%`;
}

// Función para actualizar la interfaz
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    statusDisplay.textContent = isWorking ? 'Tiempo de Trabajo' : 'Tiempo de Descanso';
}

// Función para mostrar notificaciones
function showNotification() {
    const notification = new Notification(isWorking ? '¡Hora de trabajar!' : '¡Hora de descansar!');
}

// Función para cambiar entre tema oscuro y claro
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('light', !isDarkMode);
    themeToggleButton.textContent = isDarkMode ? 'Tema Claro' : 'Tema Oscuro';
}
//Funcion para cambiar el color de la barra de progreso
function updateProgress() {
    // Calcular el porcentaje de tiempo restante
    let percentage = (timeLeft / (isWorking ? workTime : breakTime)) * 100;

    // Actualizar la barra de progreso
    progress.style.width = `${percentage}%`;

    // Cambiar el color según el porcentaje
    if (percentage > 66) {
        progress.style.backgroundColor = 'green'; // Verde
    } else if (percentage > 33) {
        progress.style.backgroundColor = 'yellow'; // Amarillo
    } else {
        progress.style.backgroundColor = 'red'; // Rojo
    }
}
//Funcion para aplicar la configuracion
function applySettings() {
    const workTimeValue = workTimeInput.value;
    const breakTimeValue = breakTimeInput.value;

    // Validar que los valores no estén vacíos y sean números positivos
    if (!workTimeValue || !breakTimeValue) {
        alert('Por favor ingrese valores válidos para los tiempos.');
        return;
    }

    if (isNaN(workTimeValue) || isNaN(breakTimeValue) || workTimeValue <= 0 || breakTimeValue <= 0) {
        alert('Los tiempos deben ser números positivos.');
        return;
    }

    // Convertir los valores a segundos y asignarlos
    workTime = parseInt(workTimeValue) * 60;
    breakTime = parseInt(breakTimeValue) * 60;

    // Restablecer el temporizador al nuevo tiempo de trabajo
    resetTimer();
    alert('Configuración aplicada correctamente.');
}
//Funcion para que se mantenga
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Asegurarse de que la fuente se mantenga como Roboto
    timerDisplay.style.fontFamily = 'Roboto, sans-serif';  // Forzar la fuente Roboto

    statusDisplay.textContent = isWorking ? 'Tiempo de Trabajo' : 'Tiempo de Descanso';
}


// Solicitar permiso para notificaciones
if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

// Agregar eventos a los botones
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
themeToggleButton.addEventListener('click', toggleTheme);
