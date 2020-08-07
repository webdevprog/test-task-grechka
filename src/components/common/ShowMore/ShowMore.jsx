import React from 'react';
import { Button } from 'react-bootstrap';
import style from './show-more.module.scss'; 

class ShowMore extends React.Component {
    state = {
        isLoading: false,
        btnHide: false,
        start: 0,
        end: 0
    }

    handleClick = () => {
        this.setState({
            start: this.state.start === 0 ? this.props.step : this.state.start + this.props.step,
            end: this.state.start === 0 ? this.props.step + this.props.step : this.state.end + this.props.step,
        }, () => {
            this.setState({ isLoading: true });
            this.props.getNews(this.state.start, this.state.end, () => {
                this.setState({ isLoading: false });
                if ((this.props.total - this.state.start) <= this.props.step) { this.setState({ btnHide: true }); return; }
            });
        });
    }

    render() {
        return (
            <div className={style.showMoreWrapper}>
                {!this.state.btnHide ?
                    <Button
                        variant="primary"
                        disabled={this.state.isLoading}
                        onClick={!this.state.isLoading ? this.handleClick : null}
                    >
                        {this.state.isLoading ? 'Loading…' : 'Show More'}
                    </Button>
                    :
                    ''}
            </div>
        )

    }
}

export default ShowMore;