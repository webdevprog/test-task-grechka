import React from 'react';
import { connect } from 'react-redux';
import { getNewsList, updateNewsListThunk } from '../../redux/news-list-reducer';
import { NewsCards } from './NewsCards';
import { Preloader } from '../common/Preloader/Preloader';
import ShowMore from '../common/ShowMore/ShowMore';

class NewsCardsContainer extends React.Component {

    componentDidMount() {
        this.props.getNewsList(0, 6);
    }

    render() {
        return (
            <div>
                {this.props.isFetching ?
                    <Preloader />
                    :
                    <div>
                        <NewsCards news={this.props.newsList} />
                        <ShowMore getNews={this.props.updateNewsListThunk} total={this.props.totalNews} step={6} />
                    </div>
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        newsList: state.newsListPage.newsList,
        totalNews: state.newsListPage.totalNews,
        isFetching: state.newsListPage.isFetching
    }
}

export default connect(mapStateToProps, { getNewsList, updateNewsListThunk })(NewsCardsContainer);