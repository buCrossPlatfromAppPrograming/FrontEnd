
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View, Modal, Button } from "react-native";
import NextButton from "../../components/NextButton";
import { TouchableOpacity } from 'react-native';

const images = [
    { id: 'oldpeople', src: require('../../../assets/images/Normal4/1.png') },
    { id: 'handicappedseating', src: require('../../../assets/images/Normal4/2.png') },
    { id: 'publictransport', src: require('../../../assets/images/Normal4/3.png') },
    { id: 'pregnantwoman', src: require('../../../assets/images/Normal4/4.png') },
    { id: 'subway', src: require('../../../assets/images/Normal4/5.png') },
    { id: 'restroom', src: require('../../../assets/images/Normal4/6.png') },
    { id: 'Nocellphoneuse', src: require('../../../assets/images/Normal4/7.png') },
    { id: 'cellphonevibrate', src: require('../../../assets/images/Normal4/8.png') },
    { id: 'train', src: require('../../../assets/images/Normal4/9.png') },
];

const hintImages = [
    require('../../../assets/images/Normal4/1.png'),
    require('../../../assets/images/Normal4/2.png'),
    require('../../../assets/images/Normal4/3.png'),
    require('../../../assets/images/Normal4/4.png'),
    require('../../../assets/images/Normal4/5.png'),
    require('../../../assets/images/Normal4/6.png'),
    require('../../../assets/images/Normal4/7.png'),
    require('../../../assets/images/Normal4/8.png'),
    require('../../../assets/images/Normal4/9.png'),
];

const Normal4 = ({ navigation, route }) => {
    
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
        }, 3000);
        
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
            {selectedImage && <Image source={selectedImage} style={{ width: 50, height: 50 }} />}
            {!selectedImage && images.map((img, index) => (
                <TouchableOpacity key={index} onPress={() => handleImageSelection(index)}>
                    <Image source={img} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>  
            ))}
            <TouchableOpacity onPress={() => setShowHint(true)}>
                <Text>힌트 보기</Text>
            </TouchableOpacity>
            <NextButton onPress={() => navigation.navigate('HomeScreen')}/>
            <Modal visible={showHint} animationType="slide">
                <View>
                    {selectedHintImage && <Image source={selectedHintImage} style={{ width: 200, height: 200 }} />}
                    <Button title="닫기" onPress={() => setShowHint(false)} />
                </View>
            </Modal>
        </View>
    );
};

export default Normal4;
