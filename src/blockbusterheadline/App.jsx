import React, { Component } from 'react';
import Header from '../components/header'
import NewsLists from '../components/newslists'
import Pagination from '../components/pagination'
import ActivityInfo from '../components/activityInfo'
import Loading from '../components/loading'
import { newsCategory } from '../components/newsCategory'
import News from '../components/newsClass'


const news = new News(newsCategory.technology)

class App extends Component {
    state = {
        data: {},
        isLoading: true
    }

    searchTerm = term => {
        this.setState({ isLoading: true })
        news.search(term)
            .then(data => {
                this.setState({ data, isLoading: false })
            })
            .catch(err => {
                console.log(err)
                alert('Something Went Wrong Term')
                this.setState({ isLoading: false })
            })
    }

    changeCategory = (category) => {
        this.setState({ isLoading: true })
        news.changeCategory(category)
            .then(data => {
                this.setState({ data, isLoading: false })
            })
            .catch(err => {
                console.log(err)
                alert('Something Went Wrong Category')
                this.setState({ isLoading: false })
            })
    }

    componentDidMount() {
        news.getNews()
            .then(data => {
                this.setState({ data, isLoading: false })
            })
            .catch(err => {
                console.log(err)
                alert('Something Went Wrong Component')
                this.setState({ isLoading: false })
            })
    }

    privious = () => {
        if (this.state.data.isPrivious) {
            this.setState({ isLoading: true })
        }
        news.privious()
            .then(data => {
                this.setState({ data, isLoading: false })
            })
            .catch(err => {
                console.log(err)
                alert('Something Went Wrong Privious')
                this.setState({ isLoading: false })
            })
    }

    next = () => {
        if (this.state.data.isNext) {
            this.setState({ isLoading: true })
        }
        news.next()
            .then(data => {
                this.setState({ data, isLoading: false })
            })
            .catch(err => {
                console.log(err)
                alert('Something Went Wrong Next')
                this.setState({ isLoading: false })
            })
    }

    handlePageChange = value => {
        this.setState({
            data: {
                ...this.state.data,
                currentPage: Number.parseInt(value)
            }
        })
    }

    gotoPage = () => {
        this.setState({ isLoading: true })
        news.setCurrentPage(this.state.data.currentPage)
            .then(data => {
                this.setState({ data, isLoading: false })
            })
            .catch(err => {
                console.log(err)
                alert('Something Went Wrong gotoPage')
                this.setState({ isLoading: false })
            })
    }

    render() {
        const {
            article,
            isNext,
            isPrivious,
            currentPage,
            totalPage,
            totalResults,
            category } = this.state.data
        return (
            <div className="container my-4">
                <div className="row mb-4">
                    <div className="col-sm-6 offset-md-3">
                        <Header category={category} changeCategory={this.changeCategory} search={this.searchTerm}/>
                        <ActivityInfo totalResults={totalResults} totalPage={totalPage} currentPage={currentPage} />
                        {this.state.isLoading ? (
                            <Loading />
                        ) : (

                                <div>
                                    <NewsLists news={article} />
                                    <Pagination
                                        next={this.next}
                                        privious={this.privious}
                                        isNext={isNext}
                                        isPrivious={isPrivious}
                                        currentPage={currentPage}
                                        totalPage={totalPage}
                                        handlePageChange={this.handlePageChange}
                                        gotoPage={this.gotoPage}
                                    />
                                </div>

                            )}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;