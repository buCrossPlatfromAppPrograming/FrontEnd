
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View, Modal, Button } from "react-native";
import NextButton from "../../components/NextButton";
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
            <NextButton onPress={() => navigation.navigate('Home')}/>
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