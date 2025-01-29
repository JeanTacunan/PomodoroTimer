
### **Consigna Evaluación Parcial: Pomodoro Timer**

#### **Objetivo**
Desarrollar un temporizador Pomodoro que permita al usuario gestionar intervalos de trabajo y descanso. El temporizador debe incluir una interfaz atractiva y funcionalidades básicas como iniciar, pausar y reiniciar.
### **Desarollador **
- **Apellidos y nombres: TACUNAN PALOMINO JEAN POOL** 
#### **Requisitos Funcionales**
1. **Interfaz de Usuario (HTML y CSS)**:
   - Mostrar un temporizador grande que indique el tiempo restante en formato `MM:SS`.
   - Incluir botones para:
     - **Iniciar**: Comienza el temporizador.
     - **Pausar**: Detiene el temporizador.
     - **Reiniciar**: Vuelve al tiempo inicial.
   - Mostrar un mensaje o indicador que diga si el usuario está en un intervalo de **trabajo** o **descanso**.
   - Mejorar la estética del temporizador utilizando colores, fuentes y diseños modernos.

2. **Lógica del Temporizador (JavaScript)**:
   - El temporizador debe alternar entre dos intervalos:
     - **Trabajo**: 25 minutos.
     - **Descanso**: 5 minutos.
   - Cuando el temporizador llega a 0, debe cambiar automáticamente al siguiente intervalo (de trabajo a descanso o viceversa).
   - El temporizador debe actualizarse cada segundo.
   - El usuario debe poder pausar y reanudar el temporizador en cualquier momento.
   - Al hacer clic en **Reiniciar**, el temporizador debe volver al intervalo inicial (25 minutos de trabajo).

#### **Estructura Básica del Proyecto**

1. **HTML**:
   - Crea un contenedor para el temporizador.
   - Añade un elemento para mostrar el tiempo (`MM:SS`).
   - Incluye botones para **Iniciar**, **Pausar** y **Reiniciar**.
   - Añade un mensaje o indicador para mostrar si es tiempo de trabajo o descanso.

   ```html
   <div class="pomodoro-container">
       <h1>Pomodoro Timer</h1>
       <div id="timer">25:00</div>
       <div id="status">Tiempo de Trabajo</div>
       <button id="start">Iniciar</button>
       <button id="pause">Pausar</button>
       <button id="reset">Reiniciar</button>
   </div>
   ```

2. **CSS**:
   - Estiliza el temporizador para que sea grande y fácil de leer.
   - Diseña los botones para que sean atractivos y responsivos.
   - Usa colores diferentes para los intervalos de trabajo y descanso.
   - Aplica animaciones o transiciones para mejorar la experiencia del usuario.

   ```css
   body {
       font-family: Arial, sans-serif;
       background-color: #f4f4f4;
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100vh;
       margin: 0;
   }

   .pomodoro-container {
       text-align: center;
       background-color: #fff;
       padding: 20px;
       border-radius: 10px;
       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   }

   #timer {
       font-size: 3rem;
       font-weight: bold;
       margin: 20px 0;
       color: #333;
   }

   #status {
       font-size: 1.5rem;
       margin-bottom: 20px;
       color: #555;
   }

   button {
       padding: 10px 20px;
       margin: 5px;
       font-size: 1rem;
       cursor: pointer;
       border: none;
       border-radius: 5px;
       background-color: #007bff;
       color: white;
       transition: background-color 0.3s;
   }

   button:hover {
       background-color: #0056b3;
   }

   button:active {
       background-color: #004080;
   }
   ```

3. **JavaScript**:
   - Define las variables para el tiempo de trabajo (25 minutos) y descanso (5 minutos).
   - Usa `setInterval` para actualizar el temporizador cada segundo.
   - Maneja los eventos de los botones para iniciar, pausar y reiniciar el temporizador.
   - Cambia el intervalo automáticamente cuando el temporizador llega a 0.

   ```javascript
   let workTime = 25 * 60; // 25 minutos en segundos
   let breakTime = 5 * 60; // 5 minutos en segundos
   let timeLeft = workTime; // Tiempo inicial
   let timerInterval; // Variable para el intervalo
   let isWorking = true; // Estado del temporizador (trabajo o descanso)

   // Elementos del DOM
   const timerDisplay = document.getElementById('timer');
   const statusDisplay = document.getElementById('status');
   const startButton = document.getElementById('start');
   const pauseButton = document.getElementById('pause');
   const resetButton = document.getElementById('reset');

   // Función para iniciar el temporizador
   function startTimer() {
       if (!timerInterval) {
           timerInterval = setInterval(updateTimer, 1000);
       }
   }

   // Función para pausar el temporizador
   function pauseTimer() {
       clearInterval(timerInterval);
       timerInterval = null;
   }

   // Función para reiniciar el temporizador
   function resetTimer() {
       clearInterval(timerInterval);
       timerInterval = null;
       isWorking = true;
       timeLeft = workTime;
       updateDisplay();
   }

   // Función para actualizar el temporizador
   function updateTimer() {
       if (timeLeft > 0) {
           timeLeft--;
       } else {
           clearInterval(timerInterval);
           isWorking = !isWorking; // Cambia entre trabajo y descanso
           timeLeft = isWorking ? workTime : breakTime; // Asigna el nuevo tiempo
           startTimer(); // Reinicia el temporizador automáticamente
       }
       updateDisplay();
   }

   // Función para actualizar la pantalla
   function updateDisplay() {
       const minutes = Math.floor(timeLeft / 60);
       const seconds = timeLeft % 60;
       timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
       statusDisplay.textContent = isWorking ? 'Tiempo de Trabajo' : 'Tiempo de Descanso';
       document.body.style.backgroundColor = isWorking ? '#f4f4f4' : '#d4edda'; // Cambia el color de fondo
   }

   // Event listeners para los botones
   startButton.addEventListener('click', startTimer);
   pauseButton.addEventListener('click', pauseTimer);
   resetButton.addEventListener('click', resetTimer);

   // Inicializar la pantalla
   updateDisplay();
   ```


#### **Entrega**
- El proyecto debe incluir:
  - Un archivo HTML con la estructura básica.
  - Un archivo CSS con los estilos necesarios.
  - Un archivo JavaScript con la lógica del temporizador.
- Debe hacer un fork a este repositorio y luego clonarlo antes de comenzar el desarrollo.
- Al inicio del proyecto consigne sus apellidos y nombres
- La entrega se realizará mediante un repositorio de GitHub, cuya URL debe ser compartido a el docente medinate https://forms.gle/CBNt9LDcjbMYVidr6.


#### **Evaluación**
- **Funcionalidad**: El temporizador debe alternar entre trabajo y descanso correctamente.
- **Interfaz**: La interfaz debe ser clara, atractiva y fácil de usar.
- **Código**: El código debe estar bien estructurado y comentado.

Comentario de prueba con jenkins
