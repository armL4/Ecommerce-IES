// Array de objetos con las páginas y títulos
const navbarLinks = [
    { title: "Home", url: "index.html" },
    { title: "Categoría 1", url: "Categoria1.html" },
    { title: "Categoría 2", url: "category2.html" },
    { title: "Categoría 3", url: "category3.html" },
    { title: "Logout", url: "login.html", logout: true }
];

// Verifica si el usuario está logueado
if (localStorage.getItem('loggedIn')) {
    createNavbar();
}

// Función para crear el Navbar
function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const brand = document.createElement('a');
    brand.className = 'navbar-brand';
    brand.href = 'index.html';
    brand.textContent = 'Mi Librería';

    const ul = document.createElement('ul');
    ul.className = 'navbar-links';

    // Recorrer los links y crear los elementos <li> y <a>
    navbarLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.title;

        if (link.logout) {
            a.addEventListener('click', function(e) {
                e.preventDefault();
                logoutUser();
            });
        }

        li.appendChild(a);
        ul.appendChild(li);
    });

    container.appendChild(brand);
    container.appendChild(ul);
    navbar.appendChild(container);

    // Insertar el navbar en el body
    document.body.insertBefore(navbar, document.body.firstChild);
}

// Función para desloguear al usuario
function logoutUser() {
    // Borrar datos del usuario (por ejemplo, eliminar tokens o cookies)
    localStorage.removeItem('loggedIn'); // Elimina el ítem correcto
    window.location.href = 'login.html'; // Redirigir al login
}
