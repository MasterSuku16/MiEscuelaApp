const loadData = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

// funcion para obtener los datos de los estudiantes

loadData("../data/grupos.json").then((grupos) => {
  // Haz algo con tus datos aquí
  const tableBody = document.querySelector("#tableGrupos");
  grupos.forEach((grupo) => {
    let row = `
    <tr>
      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        ${grupo.id}
      </td>
      <td class="px-12 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
        ${grupo.cuatrimestre}
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        ${grupo.generacion}
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        ${grupo.grupo}
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        ${grupo.carrera.nombre}
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        ${grupo.jefe_grupo.nombre}
        </br>
        ${grupo.jefe_grupo.email}
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <p>${grupo.profesor_tutor.nombre}</p>
        <p>${grupo.profesor_tutor.email}</p>
      </td>
    </tr>
    `;

    // añadimos la fila al final del cuerpo de la tabla
    tableBody.innerHTML += row;
    console.log(grupos);
  });
});
