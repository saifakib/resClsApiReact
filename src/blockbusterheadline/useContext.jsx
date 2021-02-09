import React, { createContext, Component } from 'react'
import News from '../components/newsClass'
import { newsCategory } from '../components/newsCategory';

let Context = null;

const { Provider, Consumer } = Context = createContext()

const news = new News(newsCategory.technology)

class ContexProvider extends Component {

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
        return (
            <Provider value={{
                ...this.state.data,
                changeCategory: this.changeCategory,
                search: this.searchTerm,
                next: this.next,
                privious: this.privious,
                handlePageChange: this.handlePageChange,
                gotoPage: this.gotoPage
            }}>

                {this.props.children}

            </Provider>
        )
    }
}

export { ContexProvider, Consumer, Context };
