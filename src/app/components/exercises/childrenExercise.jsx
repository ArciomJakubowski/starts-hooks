import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
import Divider from "../common/divider";

const ChildrenExercise = () => {
    const AddSerialNumber = ({ children }) => {
        console.log(children);

        return React.Children.map(children, (child, index) => {
            console.log(child.props);
            console.log(index);
            console.log(child.props.text);
            const config = {
                ...child.props,
                text: `${child.props.text} ${index + 1}`
            };
            console.log(config);
            return React.cloneElement(child, config);
        });
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider />
            <AddSerialNumber>
                <Component text="Компонент списка" />
                <Component text="Компонент списка" />
                <Component text="Компонент списка" />
            </AddSerialNumber>
        </CollapseWrapper>
    );
};

const Component = ({ text }) => {
    return <div>{text}</div>;
};

Component.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string
};
export default ChildrenExercise;
