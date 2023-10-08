

const loadData = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};


loadData("/MiEscuelaApp/data/estudiantes.json").then((estudiantes) => {
  const tableBody = document.querySelector("#tableEstudiantes");
  estudiantes.forEach((person) => {
    let row = `
    <tr>
      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        ${person.id}
      </td>
      <td class="px-12 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
        ${person.nombre}
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        ${person.apellido_paterno}
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        ${person.apellido_materno}
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        ${person.fecha_nacimiento}
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        ${person.correo_electronico}
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        ${person.telefono}
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        ${person.direccion}
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        ${person.carrera.nombre}
      </td>
    </tr>
    `;

    tableBody.innerHTML += row;
    console.log(estudiantes);
  });
});