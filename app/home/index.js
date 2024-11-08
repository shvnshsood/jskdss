import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Pressable ,ScrollView,TextInput} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../../constants/theme';
import { hp, wp } from '../../helpers/common';


const HomeScreen = () => {

    // for the devices having notch handling layouts
    const { top } = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 20 : 30; 
    // state for search & active category
    const [activeCategory ,setActiveCategory] = useState(null)
    const [search ,setSearch] =useState ('')
    // search input refernce for cleaning the txt
    const searchInputRef =useRef(null)


    const handleChangeCategory = (cat) =>{
        setActiveCategory (cat);
    }
    console.log(activeCategory)


    return (
        <View style={[styles.contianer, { paddingTop }]}>
            <View style={styles.header}>
                <Pressable>
                    <Text style={styles.title}></Text>
                </Pressable>
                {/* <Pressable>
                    <FontAwesome6 name="bars-staggered" size={22} color={theme.colors.neutral(0.7)} />
                </Pressable> */}
            </View>

            {/* <ScrollView contentContainerStyle={{gap:15}}> */}
                {/* search bar */}
                    {/* <View style={styles.searchBar}>
                    <View style={styles.searchIcon}>
                        <Feather name='search' size={26} color={theme.colors.neutral(.4)} />  
                    </View>

                    <TextInput placeholder="Search wallie's" 
                    value={search}
                    ref={searchInputRef}
                    onChangeText={value=>setSearch(value)}
                    style={styles.searchInput} /> */}

                    {/* show if search has value */}
                    {/* {
                        search && (
                    <Pressable style={styles.closeIcon}>
                        <Ionicons name="close"  size={24} color={theme.colors.neutral(.6)} ></Ionicons>
                    </Pressable>
                        )
                    }
                    </View>  */}
                    {/* categoreis component */}

                    {/* <View style={styles.categories}>
                        <Categories activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} />
                    </View> */}
            {/* </ScrollView> */}
        </View>
    );
}


const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        gap: 15,
    },
    header: {
        marginHorizontal: wp(4),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"

    },
    title: {
        fontSize: hp(4),
        fontWeight: theme.fontWeights.semibold,
        color: theme.colors.neutral(0.9)


    },
    searchBar :{
        marginHorizontal:wp(4),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderWidth:1,
        borderColor:theme.colors.grayBG,
        backgroundColor:theme.colors.white,
        padding:6,
        paddingLeft:16,
        borderRadius: theme.radius.lg,
    },
    searchIcon :{
        padding:8,
    },
    searchInput:{
        flex:1,
        borderRadius:theme.radius.sm,
        paddingVertical:10,
        fontSize:hp(1.8),

    },
    closeIcon :{
        backgroundColor:theme.colors.neutral(.1),
        padding:8,
        borderRadius:theme.radius.sm
    }

});

export default HomeScreen