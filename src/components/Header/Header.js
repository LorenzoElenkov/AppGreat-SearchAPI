import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import styles from './Header.module.css';

const Header = (props) => {
    const [userState, setUserState] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setUserState(true);
            } else {
                setUserState(false);
            }
        })
    }, []);

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                setUserState(false);
            }).catch(err => {
                console.log(err);
            })
    };

  return (
    <nav>
        <span className={styles.siteTitle}>GALLERY LOOKUP</span>
        {userState && <span className={styles.userName}>{auth.currentUser.displayName}</span>}
        {userState && <button className={styles.signOutBut} onClick={handleSignOut}><div className={styles.signOutButInner} /> Sign out</button>}
    </nav>
  )
}

export default Header