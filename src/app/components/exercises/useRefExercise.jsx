import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const [state, setState] = useState(true);
    const inputRef = useRef();
    console.log(state);
    const HandleCLickChangeWidthAndTypeOf = () => {
        setState(!state);

        if (state === true) {
            inputRef.current.innerText = "Текст";
            inputRef.current.style.width = "80px";
            inputRef.current.style.height = "150px";
        } else {
            inputRef.current.innerText = "Блок";
            inputRef.current.style.width = "60px";
            inputRef.current.style.height = "40px";
        }
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={inputRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button
                className="btn btn-danger"
                onClick={HandleCLickChangeWidthAndTypeOf}
            >
                Change
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
