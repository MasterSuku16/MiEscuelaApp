const loadData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();

    return json;
  };
  
  // funcion para obtener los datos de los estudiantes
  
  loadData("/data/grupos.json").then((grupos) => {
    // Haz algo con tus datos aquí
    const tableBody = document.querySelector("#tableGrupos");
    grupos.forEach((grupo) => {
      let row = `
      <tr>
        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          ${grupo.id}
        </td>
        <td class="px-12 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
          ${grupo.nombre}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${grupo.apellido_paterno}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${grupo.apellido_materno}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${grupo.fecha_nacimiento}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${grupo.correo_electronico}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${grupo.division_academica.nombre}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            ${grupo.grados_academicos.forEach((grado)=>{  
                {grado.titulo}
            })}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${grupo.tipo_plaza_docente}
        </td>
      </tr>
      `;
  
      // añadimos la fila al final del cuerpo de la tabla
      tableBody.innerHTML += row;
      console.log(grupo);
    });
  });