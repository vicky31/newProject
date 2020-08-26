import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import scaling from '../config/normalize';
import { profile, arrow } from '../assets';
import { SubCategories } from './SubCategories';

const { widthScale, moderateScale, heightScale, normalize } = scaling;
const ProductDropdown = (props) => {
    const { product, changeState, index } = props;
    const { category = {}, expanded = false } = product;
    const { categoryName = '', colorCode = '#fff', servingSize = '', imagePath = profile, subcategories = [], quote = '', protip = '' } = category;
    const isSubCategoriesAvailable = Boolean(subcategories.length);
    if (!isSubCategoriesAvailable) {
        return null;
    }
    return (
        <View>
            <View style={[styles.ProductContainer]}
            >
                <TouchableOpacity
                    style={styles.ProductWrapper}
                    onPress={() => changeState(index)}
                >
                    <View>
                        <Image style={[styles.profile, { backgroundColor: colorCode }]} source={imagePath} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text
                            style={{ color: colorCode, fontSize: normalize(16) }}
                            numberOfLines={1}
                            ellipsizeMode={"tail"}
                        >{categoryName}</Text>
                        {servingSize ? <Text style={{ fontSize: normalize(16) }}>{'  (' + servingSize + ')'}</Text> : null}
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Image style={[styles.arrow, expanded ? { transform: [{ rotate: '180deg' }] } : {}]} source={arrow} />
                    </View>
                </TouchableOpacity>
                {expanded ?
                    <View>
                        {
                            subcategories.map((subCategory) =>
                                <SubCategories
                                    subCategory={subCategory}
                                    color={colorCode}
                                    quote={quote}
                                />
                            )

                        }
                        {quote ? 
                        <View style={styles.quote}>
                            <Text style={{ fontSize: 14, color: '#BAC3D0' }}>{quote}</Text>
                        </View>
                            : null}
                    </View>
                    : null
                }
            </View>
            {expanded && protip ?
                <View>
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={[colorCode, '#98EBE9']}
                        style={styles.linearGradient}
                    >
                        <View style={[styles.protip, {backgroundColor: '#4E97C8'}]}>
                            <Text style={{ color: '#FEFEFE' }}>
                                {'Pro Tip'}
                            </Text>
                        </View>
                        <Text style={{ color: '#F0F0FE' }}>
                            {protip}
                        </Text>
                    </LinearGradient>
                </View>
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    ProductContainer: {
        flex: 1,
        marginHorizontal: widthScale(12),
        marginBottom: heightScale(20),
        backgroundColor: '#fff',
        borderRadius: moderateScale(5),
    },
    ProductWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: moderateScale(5),
        padding: widthScale(5),
    },
    profile: {
        width: moderateScale(50),
        height: moderateScale(50),
        borderRadius: moderateScale(5),
        marginRight: widthScale(15)
    },
    arrow: {
        width: moderateScale(8),
        height: moderateScale(8),
        marginRight: 10
    },
    elevation: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
    },
    linearGradient: {
        paddingHorizontal: widthScale(20),
        paddingVertical: heightScale(10),
        borderRadius: 15,
        marginBottom: heightScale(20),
        marginHorizontal: widthScale(12),
        alignItems: 'flex-start'
    },
    quote: {
        backgroundColor: '#EBF2F7',
        marginHorizontal: widthScale(25),
        marginVertical: heightScale(20),
        padding: 15,
        borderRadius: 10
    },
    protip: {
        borderRadius: 20, 
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginBottom: 10
    }
});


export { ProductDropdown };
