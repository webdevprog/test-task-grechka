import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../redux/news-reducer';
import { NewsCards } from './NewsCards';

class NewsCardsContainer extends React.Component {

    componentDidMount() {
        this.props.getNews();
    }
    
    render() {
        return (<NewsCards news={this.props.newsList} />)
    }
}

let mapStateToProps = (state) => {
    return {
        newsList: state.newsPage.newsList
    }
}

export default connect(mapStateToProps, { getNews })(NewsCardsContainer);