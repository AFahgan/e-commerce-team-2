import React from 'react';
import './NotFoundPage.css'
import { Link } from 'react-router-dom';

const NotFoundPage= () => {
    return (<div className='container-notFound'>
      <section>
        <h2 className='main-text'> Hmmm, we couldn't find the page you're looking for.</h2>
        <p className='p-text'>If you find yourself here after clicking a link on our website, please let us know.</p>
        <br />
        <p className='p-text'>Sorry about that. Head to our <Link to="/">Home Page</Link>.</p>
      </section>
      <section>
        <img src="../assets/404-error.png" alt="404 icon"  />
      </section>

      </div>
    )
}
export default NotFoundPage;