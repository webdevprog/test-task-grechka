import React from 'react';
import { connect } from 'react-redux';
import { getNewsList } from '../../redux/news-list-reducer';
import { NewsCards } from './NewsCards';

class NewsCardsContainer extends React.Component {

    componentDidMount() {
        this.props.getNewsList();
    }
    
    render() {
        return (<NewsCards news={this.props.newsList} />)
    }
}

let mapStateToProps = (state) => {
    return {
        newsList: state.newsListPage.newsList
    }
}

export default connect(mapStateToProps, { getNewsList })(NewsCardsContainer);