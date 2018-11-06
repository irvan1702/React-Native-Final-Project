import React, {Component} from 'react';
import{ View, Text, Image, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { fetchNewsDetail, fetchNewsSuccess } from '../../actions/index';
import styles from './News.styles';

export default class NewsWebView extends Component{
    static navigationOptions={
        title: 'News Web View',
    }

    constructor(props) {
        super(props);
    }



    _renderItem = () => {
        //const {title,publishedAt} = item
        const {item} = this.props.navigation.state.params;
        console.log("Item",item)
        return (
                <View style={styles.listItem}>
                    <Text>{item.title}</Text>
                    <Text>{item.publishedAt}</Text>
                </View>
        )
    }

    // render(){
    //     const {news} = this.props;
    //     return (
    //         <View>
    //             <FlatList data={ news } renderItem={ this._renderItem } />
    //         </View>
    //     )
    // }
} 
// const mapStateToProps = (state) => ({
//     news: state.newsDetail,
//     loading: state.loading
// });
//
// const mapDispatchToProps = {
//     fetchNewsDetail
// };
//
// //Connect everything
// export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
