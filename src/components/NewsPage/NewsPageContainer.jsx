import React from 'react';
import { connect } from 'react-redux';
import { getNews, getComments } from '../../redux/news-page-reducer';
import { NewsPage } from './NewsPage';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { NotFoundPage } from '../common/NotFoundPage/NotFoundPage';

class NewsPageContainer extends React.Component {

    componentDidMount() {
        this.props.getNews(this.props.match.params.newsId);
        this.props.getComments(this.props.match.params.newsId);
    }

    render() {
        if (this.props.news.length === 0) return <NotFoundPage />
        return <div>
            <NewsPage
                news={this.props.news}
                comments={this.props.comments} totalComments={this.props.totalComments}
            />
        </div>

    }
}

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        comments: state.newsPage.comments,
        totalComments: state.newsPage.totalComments
    }
}

export default compose(
    connect(mapStateToProps, { getNews, getComments }),
    withRouter
)(NewsPageContainer)