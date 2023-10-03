import {classNames} from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss'
import {ReactNode} from "react";

interface ModalProps {
    className?: string;
    children?: ReactNode;
}

export const Modal = (props: ModalProps) => {

    const {
        className,
        children,
    } = props

    return (
        <div className={classNames(cls.Modal, {}, [className])}>
            <div className={cls.overlay}>
                <div className={cls.content}>

                </div>
            </div>
        </div>
    );
};

export default Modal;