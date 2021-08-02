import Client from 'shopify-buy';
import GraphQLClient from 'graphql-js-client';

import typeBundle from './TypeBundle';


export const Shopify = Client.buildClient({
    storefrontAccessToken: '9c6f0fac5a611a19be3e490c6c0810ba',
    domain: 'liquidthoughttest.myshopify.com'
});

export const ShopifyGQL = new GraphQLClient(typeBundle, {
    url: 'https://liquidthoughttest.myshopify.com/api/graphql',
    fetcherOptions: {
        headers: {
            'X-Shopify-Storefront-Access-Token': '9c6f0fac5a611a19be3e490c6c0810ba'
        }
    }
});

export const ShopifyXHR = (payload, state = {}) => {

    return new Promise((resolve, reject) => {
        const endPointURL = `https://liquidthoughttest.myshopify.com/api/graphql`;
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Success Data
                    var data = JSON.parse(xhr.responseText);
                    resolve(data);
                } else {
                    // API Failed
                    reject(new Error({ error: `API has been failed`, isError: true }));
                }
            }
        };

        xhr.open("POST", endPointURL, true);
        xhr.setRequestHeader('Content-Type', 'application/graphql');
        xhr.setRequestHeader('X-Shopify-Storefront-Access-Token', '9c6f0fac5a611a19be3e490c6c0810ba');

        xhr.send(payload);
    });

};