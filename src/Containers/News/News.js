import React from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { fetchNews, fetchNewsSuccess } from '../../actions/index';
import styles from './News.styles';

class News extends React.Component {
    static navigationOptions = {
      title: 'News',
    };

    constructor(props) {
        super(props);
    }

    onItemPress = () => {
        const {item} = this.props
        this.props.navigation.navigate('NewsDetail', {
            item
        })
    }

    _renderItem = ({item}) => {
        const{name} = item
        return (
            <TouchableOpacity onPress={this.onItemPress}>
                <View style={styles.listItem}>
                        <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount() {
        this.props.fetchNews();
    }
    render() {
        const { news } = this.props;
        return(
            <View>
                    <FlatList data={ news } renderItem={ this._renderItem } />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    news: state.news,
    loading: state.loading
});

const mapDispatchToProps = {
    fetchNews
};

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(News);
