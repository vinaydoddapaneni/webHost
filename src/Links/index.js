import React from 'react';
import './bootstrap.min.css';
import '../App.css'

class Links extends React.Component {
    render() {
        return (
            <div className='App'>
                <div className='row'>
                    <div className='col-6'><br /><br />
                        {/* ted.com */}
                        <a href={'https://www.ted.com/#/'} target="_blank" rel="noopener noreferrer" className='btn btn-success'>Ted</a><br/><br/>
                        {/* scientificamerican.com */}
                        <a href={'https://www.scientificamerican.com/'} target="_blank" rel="noopener noreferrer" className='btn btn-danger'>Scientific American</a><br/><br/>
                        {/* listenaminute.com  */}
                        <a href={'https://www.listenaminute.com/'} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Listen a Minute</a>
                    </div>
                    <div className='col-6'><br /><br />
                        {/* lingorank.com  */}
                        <a href={'https://www.lingorank.com/'} target="_blank" rel="noopener noreferrer" className='btn btn-warning'>Lingo Rank</a><br/><br/>
                        {/* www.rong-chang.com  */}
                        <a href={'https://www.rong-chang.com/'} target="_blank" rel="noopener noreferrer" className='btn btn-dark'>rong-chang</a><br/><br/>
                        {/* englishteststore.net  */}
                        <a href={'https://www.englishteststore.net/'} target="_blank" rel="noopener noreferrer" className='btn btn-info'>English Test Store</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Links;