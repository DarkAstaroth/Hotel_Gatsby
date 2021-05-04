exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query{
            allDatoCmsHabitacion{
                nodes{
                    slug
                }
            }
        }
    `);

    //console.log(resultado.data.allDatoCmsHabitacion.nodes);

    if (resultado.error) {
        reporter.panic('No hubo resultados', resultado.errors);
    }

    // si hay paginas, crear los archivos
    const habitaciones = resultado.data.allDatoCmdHabitacion.nodes;
    habitaciones.forEach(habitacion =>{
        actions.createPage({

        })
    })
 }