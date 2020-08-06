import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../redux/news-page-reducer';
import { NewsPage } from './NewsPage';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class NewsPageContainer extends React.Component {

    componentDidMount() {
        this.props.getNews(this.props.match.params.newsId);
    }
   
    render() {
        return <NewsPage news={this.props.news} />
    }
}

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news
    }
}

export default compose(
    connect(mapStateToProps, { getNews }),
    withRouter
)(NewsPageContainer)