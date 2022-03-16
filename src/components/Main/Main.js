import React, { useEffect, useRef, useState } from 'react';
import { auth, googleProvider } from '../../firebase';
import styles from './Main.module.css';
import { apiKey } from '../../pexels';
import ImgCard from './ImgCard';

const Main = (props) => {


    const [userState, setUserState] = useState(false);
    const [results, setResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const inputRef = useRef(null);

    const handleGoogleSignIn = () => {
        auth.signInWithPopup(googleProvider)
            .then(() => {
                setUserState(true);
                setResults([]);
            }).catch (err => {
                console.log(err);
            });
        
    };

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setUserState(true);
            } else {
                setUserState(false);
            }
        })
    }, []);

    const handleSearchSubmit = () => {
        // e.preventDefault();
        let query = inputRef.current.value;
        let tempResults = [];
        const url = "https://api.pexels.com/v1/search?query=" + query + "&orientation=landscape&per_page=16";
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Authorization': apiKey,
            }
        }).then(data => data.json()
            .then(photos => {
                photos.photos.map(photo => tempResults = [...tempResults, { id: photo.id, title: photo.alt, author: photo.photographer, authorURL: photo.photographer_url, link: photo.src.small}]);
                setResults(tempResults);
            })).catch(err => console.log(err));
    };

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    useEffect(() => {
        if (searchInput != '') {
            const queryResults = setTimeout(() => {
                handleSearchSubmit();
            }, 500);
    
            return () => {
                clearTimeout(queryResults);
            };
        }
    }, [searchInput]);

  return (
    <main>
        {!userState && <button className={styles.loginBut} onClick={handleGoogleSignIn}><div className={styles.loginButInner} />Login with Google</button>}
        {userState ? <form onSubmit={handleSearchSubmit} className={styles.formSearch}>
                <input type='search' placeholder='Search for a topic...' className={styles.searchInput} ref={inputRef} onChange={handleSearchInput}/>
                <div className={styles.resultsContainer}>
                {userState && results.length > 0 ? results.map(x => {
                        return <ImgCard key={x.id} id={x.id} link={x.link} author={x.author} authorlink={x.authorURL} description={x.title} />
                    })
                : null}
            </div>
        </form> : null}
        
    </main>
  )
}

export default Main;