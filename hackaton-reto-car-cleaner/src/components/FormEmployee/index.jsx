import React from "react";
import {Input} from '../';
import Button from '../Button/index'
import "./style.css";

const FormEmployee = () => {
    
    return (
        <form className="form-employee">
            <Input
                type="text"
                name="name"
                placeholder="Nombre"
            />
            <Input
                type="text"
                name="email"
                placeholder="Correo electrónico"
            />
            <Input
                type="number"
                name="phone"
                placeholder="Teléfono"
            />
             <Input
                type="password"
                name="password"
                placeholder="Crear contraseña"
            />
             <Input
                type="password"
                name="confirm-password"
                placeholder="Confirmar contraseña"
            />
            <Button text = "SIGUIENTE"/>          
        </form>
    )

}

export default FormEmployee;