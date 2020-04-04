import React from 'react';
import Helmet from 'react-helmet'

class Result extends React.Component {
    static async getInitialProps({ query }) {
        const { id } = query
        return { id }
    }

    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        }
    }

    render() {
        return (
            <>
            <Helmet>
        <meta property="og:title" content={"デザイナー自己診断書"} />
        <meta property="og:description" content={"UIUXデザイナー"} />
        <meta property="og:type" content={"website"} />
        <meta property="og:site_name" content={"UIUX"} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={`@uchibashi`} />
        </Helmet>
            <div>
                URLのPathからuserId: {this.state.id}
            </div>
            </>
        )
    }
}

export default Result