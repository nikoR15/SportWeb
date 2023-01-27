// // registrarse


const signUpButton = document.getElementById('btn_signUp');
const signInButton = document.getElementById('btn_login');
// const container = document.getElementById('container');

// REGISTRO...
const register = document.getElementById('register');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
// const confirmPassword = document.getElementById('confirmPassword');

const userRegistered = [];
let id = 0;

register.addEventListener("submit", registerUser);

function registerUser(event) {
	event.preventDefault();	
	id++;

	const user = {
		id: id,
		user: userName.value,
		email: email.value,
		pass: password.value,
		// confirmPassword: confirmPassword.value
	};

	if (
		userName.value === "" ||
		email.value === "" ||
		password.value === "" || ""
	) {
		alert("Por favor llene todos los campos")
	}

	// else if (password.value !== confirmPassword.value) {
	// 	alert("La contraseña no coincide");
	// }

	else if (userRegistered.find(user => user.user === userName.value)) {
		alert("El ususario ya éxiste");
	}

	else {
		userRegistered.push(user);
		localStorage.setItem("user", JSON.stringify(userRegistered));
		alert("Usuario registrado con éxito");

		userName.value = "";
		email.value = "";
		password.value = "";
	}
}

// LOGIN
const login = document.getElementById("Login");
const newEmail = document.getElementById("newEmail");
const newPassword = document.getElementById("newPassword");

login.addEventListener("submit", loginUser);

function loginUser(event) {
	event.preventDefault();
	const getLocal = localStorage.getItem("user");
	const validateUser = JSON.parse(getLocal);

	if (newEmail.value === "" || newPassword.value === "") {
		alert("Por favor llene todos los campos");
	}

	else if (!validateUser.find(user => user.email === newEmail.value)) {
		alert("El usuario no existe");
	}

	else if (
		validateUser.find(user => user.email === newEmail.value).pass !== newPassword.value
	) {
		alert("La contraseña no coincide");
	}

	else {
		alert("Usuario registrado con éxito");
        window.location.href = "./index.html"
	}
}

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



