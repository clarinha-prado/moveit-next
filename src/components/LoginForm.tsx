import { useContext } from 'react';
import styles from '../styles/components/LoginForm.module.css';

import { LoginContext } from '../contexts/LoginContext';

export function LoginForm() {

    const {
        isLoggedIn,
        userName,
        isSubmitEnabled,
        handleFocus,
        handleBlur,
        handleChange,
        handleClick
    } = useContext(LoginContext);

    return (
        <div className={styles.loginContainer}>
            <section>
                <div className={styles.logoContainer}>
                    <img className={styles.logoLateral} src="logo-azul.png" alt="move-it logo" />
                </div>
                <div className={styles.loginFieldsContainer}>
                    <img className={styles.logoMoveIt} src="logo-move-it.png" alt="move-it" />
                    <header>Bem-vindo</header>
                    <img className={styles.logoGitHub} src="login-github.png" alt="" />
                    <form className={styles.inputContainer}>
                        {/* {JSON.stringify(form)} */}
                        <input
                            type="text"
                            name="userName"
                            value={String(userName)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={handleChange} />

                        {isSubmitEnabled ? (
                            <button
                                type="button"
                                onClick={handleClick}
                            >
                                {'->'}
                            </button>
                        ) : (
                                <button disabled type="button"> {'->'} </button>
                            )}
                    </form>
                </div>
            </section>
        </div >
    );
} 