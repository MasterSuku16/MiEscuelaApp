const loadData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  };
  
  // funcion para obtener los datos de los estudiantes
  
  loadData("/MiEscuelaApp/data/asignatura.json").then((asignaturas) => {
    // Haz algo con tus datos aquí
    const tableBody = document.querySelector("#tableAsignaturas");
    asignaturas.forEach((asignatura) => {
      let row = `
      <tr>
        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          ${asignatura.id}
        </td>
        <td class="px-12 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
          ${asignatura.nombre}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${asignatura.codigo}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${asignatura.seriacion}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${asignatura.cuatrimestre}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${asignatura.carrera.nombre}
        </td>
       
      </tr>
      `;
  
      // añadimos la fila al final del cuerpo de la tabla
      tableBody.innerHTML += row;
      console.log(asignaturas);
    });
  });
  
  
  
  
  