import React, { Component } from 'react';
import { ContexProvider } from './useContext';
import Header from '../components/header'
import NewsLists from '../components/newslists'
import Pagination from '../components/pagination'
import ActivityInfo from '../components/activityInfo'
import Loading from '../components/loading'

class App extends Component {

    render() {
        return (
            <div className="container my-4">
                <div className="row mb-4">
                    <div className="col-sm-6 offset-md-3">

                        <ContexProvider >
                            <Header />
                            <ActivityInfo />
                            {this.props.isLoading ? (
                                <Loading />
                            ) : (

                                    <div>
                                        <NewsLists />
                                        <Pagination />
                                    </div>

                                )}
                        </ContexProvider>

                    </div>
                </div>
            </div>
        )
    }
}

export default App;