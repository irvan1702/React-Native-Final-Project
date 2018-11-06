import React, {Component} from 'react';
import{ View, Text, FlatList, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { fetchNewsDetail } from '../../actions/index';
import styles from './News.styles';

class NewsDetail extends Component{
    static navigationOptions={
        title: 'News Detail',
    }

    constructor(props) {
        super(props);
    }

    // onItemPress = (item) => {
    //     this.props.navigation.navigate('NewsWebView', {
    //         item
    //     })
    // }

    _renderItem = ({item}) => {
        const {title,publishedAt} = item
        return (
            //<TouchableOpacity onPress={this.onItemPress(item)}>
                <View style={styles.listItem}>
                    <Text>{item.title}</Text>
                    <Text>{item.publishedAt}</Text>
                </View>
            //</TouchableOpacity>
        )
    }

    componentDidMount() {
        this.props.fetchNewsDetail();
    }

    render(){
        const {news} = this.props;
        console.log(this.props)
        return (
            <View>
                <FlatList data={ news } renderItem={ this._renderItem } />
            </View>
        )
    }
} 
const mapStateToProps = (state) => ({
    news: state.newsDetail,
    loading: state.loading
});

const mapDispatchToProps = {
    fetchNewsDetail
};

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
