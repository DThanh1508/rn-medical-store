import React, {Component} from 'react';
import {Modal,Text, View, Button, StyleSheet} from 'react-native';

export default class Modal_ extends Component {
    // state = {};
    //
    // constructor(props) {
    //     super(props)
    // }
    //
    // static propTypes = {};
    //
    // componentDidMount() {
    // }

    constructor() {
        super();
        this.state = {
            visibility: false,
        };
    }
    setModalVisibility(visible) {
        this.setState({
            visibility: visible,
        });
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.visibility}
                >
                    <View style={styles.modalContainer}>
                        <View>
                            <Text>I'm a simple Modal</Text>
                            <Button
                                color="#000"
                                onPress={() => this.setModalVisibility(!this.state.visibility)}
                                title="Hide Modal"
                            />
                        </View>
                    </View>
                </Modal>
                <Button
                    color="#000"
                    onPress={() => this.setModalVisibility(true)}
                    title="Show Modal"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 22,
    },
    modalContainer:{
        marginTop: 22,
    },
});
