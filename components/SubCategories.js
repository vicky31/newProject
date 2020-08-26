import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import scaling from '../config/normalize';
import { profile, arrow } from '../assets';

const { widthScale, moderateScale, heightScale, normalize } = scaling;
const SubCategories = (props) => {
    const { subCategory, color, quote } = props;
    const { subCategoryname = '', items = [] } = subCategory;
    console.log(subCategory);
    const isItemAvailable = Boolean(items.length);
    if (!isItemAvailable) {
        return null;
    }
    return (
        <View style={[styles.ProductContainer]}
        >
            {subCategoryname ?
                <View style={{ flexDirection: 'row', marginTop: heightScale(17), marginBottom: heightScale(3), marginHorizontal: widthScale(12), }}>
                    <Text
                        style={{ color: color, fontSize: normalize(20) }}
                        numberOfLines={1}
                        ellipsizeMode={"tail"}
                    >{subCategoryname}</Text>
                </View>
                : null
            }
            <View>
                {
                    items.map((subItem) =>
                        <View style={styles.itemContainer}>
                            <Text>{subItem}</Text>
                        </View>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ProductContainer: {

    },
    itemContainer: {
        borderBottomColor: '#EDECF3',
        borderBottomWidth: 1,
        paddingHorizontal: widthScale(13),
        paddingVertical: heightScale(13)
    },
 
});


export { SubCategories };
