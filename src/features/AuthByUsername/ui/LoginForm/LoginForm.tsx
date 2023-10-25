import {classNames} from '../../../../shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from '../../../../shared/ui/Button/Button';
import {Input} from '../../../../shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "../../model/slice/loginSlice";
import {memo, useCallback} from "react";
import {getLoadingState, getLoginState} from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import {loginByUserName} from "features/AuthByUsername/model/services/loginByUserName/loginByUserName";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch()
    const {username, password, isLoading} = useSelector(getLoginState)

    // console.log(loginForm)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({username, password}))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                value={username}
                className={cls.input}
                onChange={onChangeUsername}
                placeholder={t('Введите username')}
            />
            <Input
                type="text"
                value={password}
                className={cls.input}
                onChange={onChangePassword}
                placeholder={t('Введите пароль')}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
