import React, { useState, useEffect } from 'react';
import { View, Text, Platform, Image, StyleSheet } from 'react-native';

const WhyUsArticle = () => {
    const [articles, setArticles] = useState([]);

    const getArticleData = async () => {
        try {
            let url;
            if (Platform.OS == "android") {
            //ddev describe om port number te weten te komen
                url = `http://10.0.2.2:63130/api/whyUs/`;
                } else {
                url = "http://examen-v1.ddev.site/api/whyUs/";
                }

            const response = await fetch(url, {
                method: "GET",
            });

            const json = await response.json();

            setArticles(json.items);
        } 

        catch (error) {
            console.error(error);
            alert("Network request failed. Please try again later.");
        }

    }



    useEffect(() => {
        getArticleData();
    }, []);

    const cleanDescription = (description) => {
      return description.replace(/<\/?p>/g, '').trim();
    };
   


    return (
        <View >
          {articles.map((article, index) => (
            <View style={styles.wrapper}>
              <Image
               style={styles.image}
               source={{
                 uri: article.iconimg
               }}
             />
               <Text style={styles.title}>{article.title}</Text>
               <Text style={styles.body}>{cleanDescription(article.description)}</Text>
            </View>
          ))}

        </View>
      );
}

const styles = StyleSheet.create({
    contentContainer:{
      margin: 20, 
      backgroundColor: "#9C9CBA",
  },

    image: {
      height: 40,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,

    },
    wrapper: {
      padding: 24,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      backgroundColor: "#E0E0E7",
      width: 350,

    },
    title: {
      fontSize: 24,
      color: "#D94A01",
      fontWeight: "bold",
      textTransform: "uppercase",
      marginBottom: 24,
    },
    body: {
      lineHeight: 24
  
    }
});

export default WhyUsArticle;
 
