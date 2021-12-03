import React, {useContext,  useState} from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsulta } = useContext(RecetasContext);

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const obtenerDatosRecetas = e => {
        e.preventDefault();
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }
    
    return ( 
        <form
            className="col-12"
            onSubmit={e=>{
                e.preventDefault();
                buscarRecetas(busqueda); 
                guardarConsulta(true);
            }
            }
        >
            <fieldset className="text-center">
                <legend>Busca tragos por categoría o ingredientes</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosRecetas}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosRecetas}
                    >
                        <option value="">- Selecciona Categoría -</option>
                        {
                            categorias.map(categoria=>(
                                <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Tragos"
                    />
                </div>

           </div>
       </form>
     );
}
 
export default Formulario;