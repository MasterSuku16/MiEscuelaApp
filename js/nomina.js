const loadData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  };
  
  // funcion para obtener los datos de los nomina
  
  loadData("../data/nomina.json").then((nomina) => {
    // Haz algo con tus datos aquí
    const tableBody = document.querySelector("#tablenomina");
    nomina.forEach((nomina) => {
      let row = `
      <tr>
        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          ${nomina.id}
        </td>
        <td class="px-12 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
          ${nomina.fecha_pago}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${nomina.profesor.nombre}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${nomina.dias_trabajados}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${nomina.salario}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${nomina.retenciones}
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${nomina.vales_despensa}
        </td>
      </tr>
      `;
  
      // añadimos la fila al final del cuerpo de la tabla
      tableBody.innerHTML += row;
      console.log(nomina);
    });
  });