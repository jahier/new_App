import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import LinearGradient from "react-native-linear-gradient";
import BogoHedertop from "../common/BogoHedertop";
import Imagepath from "../asstes/Imagepath";
import Buttun from "../common/Buttun";
import AwesomeButton from "react-native-really-awesome-button";



const Your_Active_Engagement = ({ navigation }) => {
    const data = [
        {
            screenname: 'UserData'
        },
        {
            screenname: 'UserData'
        },
        {
            screenname: 'UserData'
        }
    ]
    const renderItem = ({ item }) => {
        return (
            <View>
                <View style={styles.mainCampaignConteant}>
                    <View style={styles.profileMainConteant}>
                        <View style={styles.profileConteant}></View>
                        <View style={styles.userNameConteant}>
                            <Text style={styles.userName}>Jane Doe</Text>
                            <Text style={styles.followers}>1,500+ followers</Text>
                            <Text style={styles.SocialOption}>Tiktok
                                <Text style={{ color: '#3A3A3A' }}>|</Text> Instagram <Text style={{ color: '#3A3A3A' }}>|</Text> Facebook
                            </Text>
                        </View>
                    </View>
                    <View style={styles.loremMainConteant}>
                        <View>
                            <Text style={styles.visitting}>Visiting by</Text>
                            <Text style={styles.submission}>Content submission</Text>
                        </View>
                        <View>
                            <Text style={styles.Waiting}>Waiting for merchant</Text>
                            <Text style={styles.Content}>Content submission</Text>
                        </View>
                    </View>
                    <View style={styles.btnConteant}>
                        <Buttun
                            title='Manage Campaign'
                            style={{ backgroundColor: '#1478A8' }}
                            onPress={() => navigation.navigate(item.screenname)} />
                    </View>

                </View>
            </View >
        )
    }
    return (
        <View style={styles.mainContent}>
            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
                <View>
                    <BogoHedertop
                        image={Imagepath.lefArow}
                        righttext='Help'
                        txtstye={{ top: 10 }}
                        style={{ marginTop: 20, alignItems: 'center', width: '100%', justifyContent: 'center', height: 50 }}
                    />
                </View>
                <Text style={styles.hedding}>Your Active  Engagement</Text>
                <View style={styles.loremTopContent}>
                    <Text style={styles.currentlyEngaged}>12 Influencers engaged currently</Text>
                </View>
                <View style={styles.whiteConteant}>
                    {/* <View style={styles.barConteant}></View> */}
                    <View style={{ flex: 1, bottom: scale(15), marginTop: scale(15) }}>
                        <FlatList
                            // vertical
                            showsHorizontalScrollIndicator={false}
                            data={data}
                            renderItem={renderItem}
                        />

                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}
export default Your_Active_Engagement;
const styles = ScaledSheet.create({
    mainContent: {
        flex: 1
    },
    linearGradient: {
        flex: 1
    },
    hedding: {
        textAlign: 'center',
        fontSize: scale(20),
        fontWeight: 700,
        color: 'white',
        marginTop: scale(20)
    },
    loremTopContent: {
        backgroundColor: '#1478A882',
        justifyContent: 'center',
        alignItems: 'center', padding: 10,
        width: '70%',
        alignSelf: 'center',
        marginTop: scale(15),
        borderRadius: 13
    },
    currentlyEngaged: {
        fontSize: 14,
        color: 'white',
        fontWeight: 500
    },
    whiteConteant: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: scale(25),
        paddingHorizontal: scale(15)
    },
    barConteant: {
        backgroundColor: '#D8D8D8',
        width: 100,
        height: 7,
        marginTop: scale(15),
        alignSelf: 'center'
    },
    mainCampaignConteant: {
        width: '100%',
        height: 230,
        borderWidth: 1,
        borderColor: '#029CAB',
        marginTop: scale(15),
        borderRadius: scale(15),
    },
    profileMainConteant: {
        flexDirection: 'row',
        paddingHorizontal: scale(20),
        marginTop: scale(10)
    },
    profileConteant: {
        backgroundColor: '#C4C4C4',
        width: 80,
        height: 80,
        borderRadius: scale(50),
        elevation: 2,
        shadowColor: '#029CAB',
    },
    userNameConteant: {
        marginLeft: scale(10),
        marginTop: scale(10)
    },
    userName: {
        fontSize: 15,
        fontWeight: 700,
        color: '#000000',
    },
    followers: {
        fontSize: 12,
        fontWeight: 400,
        color: '#3A3A3A'
    },
    SocialOption: {
        fontSize: 12,
        fontWeight: 400,
        color: '#029CAB',
        marginTop: scale(7)
    },
    loremMainConteant: {
        marginTop: scale(15),
        flexDirection: 'row',
        paddingHorizontal: scale(10),
        justifyContent: 'space-between',
    },
    visitting: {
        color: '#8E8E8E',
        fontSize: 12,
        fontWeight: 400
    },
    submission: {
        color: '#8E8E8E',
        fontSize: 12,
        fontWeight: 400,
        marginTop: scale(15)
    },
    Waiting: {
        color: '#1478A8',
        fontSize: 12,
        fontWeight: 400,
    },
    Content: {
        color: '#1478A8',
        fontSize: 12,
        fontWeight: 400,
        marginTop: scale(15)
    },
    btnConteant: {
        paddingHorizontal: scale(10),
        marginTop: scale(20)
    },
})