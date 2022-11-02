import React from 'react';
import {Text, View} from 'react-native';
import IconF from 'react-native-vector-icons/Feather';

const User = () => {
    return (
        <View>
            <Text>New product page!dkdfsdlkfkljs</Text>
            <IconF name='home' size={30} color="green" />        
        </View>
    );
}

export default User;

// import React, {useEffect} from 'react';
// import {Text} from 'react-native';
// import styled from "styled-components/native";
// import { BaseStyles } from "../_styles/coreStyles";

// const SettingProfile = () => {

//     return (
//         <Container>
//             <Title style={BaseStyles.baseText}>My Profile</Title>
//             <UserInfoWrapper>
//                 <UserInfoImage source={require('../assets/images/products/image1.png')} />
//                 <UserInfoData>
//                     <Text style={{fontSize: 20, fontWeight: '700', color: '#091C3F'}}>Hi, Ben Cline</Text>
//                     <Text style={{fontSize: 14, fontWeight: '400'}}>Welcome to Medtech</Text>
//                 </UserInfoData>
//             </UserInfoWrapper>
//             <LinkWrapper>
//                 <LinkSection>
//                     <Ionicons name="newspaper-outline" size={24} color="black" />
//                     <LinkInfo>
//                         <Text>Private Account</Text>
//                         <Text>&gt;</Text>
//                     </LinkInfo>
//                 </LinkSection>
//                 <LinkSection>
//                     <FontAwesome5 name="laptop-medical" size={24} color="black" />
//                     <LinkInfo>
//                         <Text>My Consults</Text>
//                         <Text>&gt;</Text>
//                     </LinkInfo>
//                 </LinkSection>
//                 <LinkSection>
//                     <Fontisto name="paste" size={24} color="black" />
//                     <LinkInfo>
//                         <Text>My orders</Text>
//                         <Text>&gt;</Text>
//                     </LinkInfo>
//                 </LinkSection>
//                 <LinkSection>
//                     <FontAwesome5 name="hornbill" size={24} color="black" />
//                     <LinkInfo>
//                         <Text>Billing</Text>
//                         <Text>&gt;</Text>
//                     </LinkInfo>
//                 </LinkSection>
//                 <LinkSection>
//                     <AntDesign name="questioncircleo" size={24} color="black" />
//                     <LinkInfo>
//                         <Text>Faq</Text>
//                         <Text>&gt;</Text>
//                     </LinkInfo>
//                 </LinkSection>
//                 <LinkSection>
//                     <AntDesign name="setting" size={24} color="black" />
//                     <LinkInfo ignoreBorder={true}>
//                         <Text>Settings</Text>
//                         <Text>&gt;</Text>
//                     </LinkInfo>
//                 </LinkSection>
//             </LinkWrapper>
//         </Container>
//     );
// }

// export default SettingProfile;

// const Container = styled.View`
//   padding: 48px 23px;
// `;

// const Title = styled.Text`
//   font-size: 16px;
//   font-weight: bold;
// `
// const UserInfoWrapper = styled.View`
//   margin-top: 26px;
//   flex-direction: row;
//   align-items: center;
// `

// const UserInfoImage = styled.Image`
//   width: 62px;
//   height: 62px;
//   border-radius: 62px;
// `

// const UserInfoData = styled.View`
//   margin-left: 16px;
// `

// const LinkWrapper = styled.View`
//   margin-top: 44px;
// `

// const LinkSection = styled.View`
//   flex-direction: row;
//   margin-bottom: 16px;
//   align-items: center;
// `

// const LinkIcon = styled.Image`
//   width: 20px;
//   height: 20px;
// `

// // const LinkInfo = styled.View<{ignoreBorder?: boolean}>`
// //   margin-left: 27px;
// //   flex: 1;
// //   padding-bottom: 14px;
// //   ${({ignoreBorder}) => !ignoreBorder ? `border-bottom-width: 1px;` : ''}
// //   border-color: #091C3F14;
// //   border-style: solid;
// //   justify-content: space-between;
// //   flex-direction: row;
// // `
