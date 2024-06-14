
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View, Modal, Button } from "react-native";
import NextButton from "../../components/NextButton";
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 183fc938202e8735012dd87b6c77a3f84bbc3223
import { TouchableOpacity } from 'react-native';

const images = [
    require('../../../assets/images/Nomar3/기차.png'),
    require('../../../assets/images/Nomar3/노약자.png'),
    require('../../../assets/images/Nomar3/노약자석.jpeg'),
    require('../../../assets/images/Nomar3/대중교통.png'),
    require('../../../assets/images/Nomar3/임산부.jpeg'),
    require('../../../assets/images/Nomar3/지하철.png'),
    require('../../../assets/images/Nomar3/화장실.png'),
    require('../../../assets/images/Nomar3/휴대폰 사용금지.png'),
    require('../../../assets/images/Nomar3/휴대폰 진동.png'),
];

const hintImages = [
    require('../../../assets/images/Nomar3/기차.png'),
    require('../../../assets/images/Nomar3/노약자.png'),
    require('../../../assets/images/Nomar3/노약자석.jpeg'),
    require('../../../assets/images/Nomar3/대중교통.png'),
    require('../../../assets/images/Nomar3/임산부.jpeg'),
    require('../../../assets/images/Nomar3/지하철.png'),
    require('../../../assets/images/Nomar3/화장실.png'),
    require('../../../assets/images/Nomar3/휴대폰 사용금지.png'),
    require('../../../assets/images/Nomar3/휴대폰 진동.png'),
];


const Normal4 = ({navigation, route}) => {
    
<<<<<<< HEAD
=======
import { TouchableOpacity } from 'react-native';

const images = [
    require('./assets/images/Nomal3/기차.png'),
    require('./assets/images/Nomal3/노약자.png'),
    require('./assets/images/Nomal3/노약자석.png'),
    require('./assets/images/Nomal3/대중교통.png'),
    require('./assets/images/Nomal3/임산부.png'),
    require('./assets/images/Nomal3/지하철.png'),
    require('./assets/images/Nomal3/화장실.png'),
    require('./assets/images/Nomal3/휴대폰 사용금지.png'),
    require('./assets/images/Nomal3/휴대폰 진동.png'),
];

const hintImages = [
    require('./assets/hints/기차힌트.png'),
    require('./assets/hints/노약자힌트.png'),
    require('./assets/hints/노약자석힌트.png'),
    require('./assets/hints/대중교통힌트.png'),
    require('./assets/hints/임산부힌트.png'),
    require('./assets/hints/지하철힌트.png'),
    require('./assets/hints/화장실힌트.png'),
    require('./assets/hints/휴대폰사용금지힌트.png'),
    require('./assets/hints/휴대폰진동힌트.png'),
];

const Game = () => {
>>>>>>> 54516aac7f3a207414362a4cb039315be3b1c0b5
=======
>>>>>>> 183fc938202e8735012dd87b6c77a3f84bbc3223
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedHintImage, setSelectedHintImage] = useState(null);
    const [answerIndex, setAnswerIndex] = useState(null);
    const [showHint, setShowHint] = useState(false);
    
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 9);
        setSelectedImage(images[randomIndex]);
        setAnswerIndex(randomIndex);
        setSelectedHintImage(hintImages[randomIndex]);
        
        const timeout = setTimeout(() => {
            setSelectedImage(null);
        }, 10000);
        
        return () => clearTimeout(timeout);
    }, []);

    const handleImageSelection = (index) => {
        if (index === answerIndex) {
            alert('정답입니다!');
        } else {
            alert('틀렸습니다.');
        }
    };

    return (
        <View>
            {selectedImage && <Image source={selectedImage} />}
            {!selectedImage && images.map((img, index) => (
                <TouchableOpacity key={index} onPress={() => handleImageSelection(index)}>
                    <Image source={img} style={{ width: 100, height: 100 }} />
                </TouchableOpacity>  
            ))}
            <TouchableOpacity onPress={() => setShowHint(true)}>
                <Text>힌트 보기</Text>
            </TouchableOpacity>
<<<<<<< HEAD
<<<<<<< HEAD
            <NextButton onPress={() => navigation.navigate('HomeScreen')}/>
=======
            <NextButton onPress={() => navigation.navigate('Hard4')}/>
>>>>>>> 54516aac7f3a207414362a4cb039315be3b1c0b5
=======
            <NextButton onPress={() => navigation.navigate('Hard4')}/>
>>>>>>> 183fc938202e8735012dd87b6c77a3f84bbc3223
            <Modal visible={showHint} animationType="slide">
                <View>
                    {selectedHintImage && <Image source={selectedHintImage} />}
                    <Button title="닫기" onPress={() => setShowHint(false)} />
                </View>
            </Modal>
        </View>
    );
};

export default  Normal4 ;
