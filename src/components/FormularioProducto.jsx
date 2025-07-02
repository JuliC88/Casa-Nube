import React from 'react';

const FormularioProducto = ({ form, setForm, onAgregar, onActualizar, setOpen }) => {
    const [errores, setErrores] = React.useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevosErrores = {};
        if (!form.title.trim()) nuevosErrores.title = 'El título es obligatorio';
        if (!form.price || form.price <= 0) nuevosErrores.price = 'Precio inválido';
        if (!form.description.trim()) nuevosErrores.description = 'La descripción es obligatoria';
        if (!form.image.trim()) nuevosErrores.image = 'La URL de la imagen es obligatoria';

        setErrores(nuevosErrores);

        if (Object.keys(nuevosErrores).length === 0) {
            if (form.id) {
                onActualizar(form);
            } else {
                onAgregar(form);
            }

            setForm({ id: null, title: '', price: '', description: '', image: '' });
            setOpen(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-admin">
            <h2>{form.id ? 'Editar Producto' : 'Agregar Producto'}</h2>

            <div>
                <label>Título:</label>
                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />
                {errores.title && <p style={{ color: 'red' }}>{errores.title}</p>}
            </div>

            <div>
                <label>Precio:</label>
                <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    required
                    min="0"
                />
                {errores.price && <p style={{ color: 'red' }}>{errores.price}</p>}
            </div>

            <div>
                <label>Descripción:</label>
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                />
                {errores.description && <p style={{ color: 'red' }}>{errores.description}</p>}
            </div>

            <div>
                <label>URL de Imagen:</label>
                <input
                    type="text"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    required
                />
                {errores.image && <p style={{ color: 'red' }}>{errores.image}</p>}
            </div>

            <button type="submit">{form.id ? 'Guardar cambios' : 'Agregar Producto'}</button>
        </form>
    );
};

export default FormularioProducto;